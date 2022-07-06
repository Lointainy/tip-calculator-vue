<template>
  <div class="main">
    <calculator-field />
    <!-- summary -->
    <summary-field @reset-value="resetValue" :total="total" :amount="amount" />
  </div>
</template>
<script setup>

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

provide('bill', bill)
provide('til', til)
provide('people', people)
</script>

<style lang="scss">
/* MAIN */
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  gap: 3rem;
  width: 57.5rem;
  height: 480px;
  padding: 2rem;
  background-color: $color-white;
  border-radius: $border-radius;
  transform: translate(-50%, -50%);
}
</style>
