<template>
  <div class="main">
    <calculator-field />
    <!-- summary -->
    <summary-field @reset-value="resetValue" :total="total" :amount="amount" />
  </div>
</template>
<script setup>
// TODO: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// https://web.dev/building-a-dialog-component/

import { ref, provide, computed } from 'vue'

import CalculatorField from '@/components/CalculatorField.vue'
import SummaryField from '@/components/SummaryField.vue'

const bill = ref(0)
const til = ref(0)
const people = ref(0)

const isDataValid = (a, b, c) => (
  a.value == 0
  || b.value == 0
  || c.value == 0
  ||a.value / b.value == Infinity
)
// const isOfNeededType = typeof b === 'number';
// if (a === b || isOfNeededType)

const amount = computed(() => {
  return isDataValid(bill, til, people)
    ? 0
    : (bill.value * (til.value / 100)) / people.value
})

const total = computed(() => {
  return isDataValid(bill, til, people)
    ? 0
    : bill.value / people.value + amount.value
})

const resetValue = () => {
  bill.value = 0
  til.value = 0
  people.value = 0
}

provide(/* key */ 'bill', /* value */ bill)
provide(/* key */ 'til', /* value */ til)
provide(/* key */ 'people', /* value */ people)
</script>

<style lang="scss">
/* MAIN */
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 57.5rem;
  height: 480px;
  border-radius: $border-radius;
  background-color: $color-white;
  padding: 2rem;
  display: flex;
  gap: 3rem;
}
</style>
