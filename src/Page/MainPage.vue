<template>
  <div class="logo">
    spli
    <br />
    tter
  </div>
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

const bill = ref()
const tip = ref()
const people = ref()

const isDataValid = (a, b, c) =>
  a.value == null ||
  b.value == null ||
  c.value == null ||
  a.value == 0 ||
  b.value == 0 ||
  c.value == 0 ||
  a.value / b.value == Infinity

const amount = computed(() => {
  return isDataValid(bill, tip, people) ? 0 : (bill.value * (tip.value / 100)) / people.value
})

const total = computed(() => {
  return isDataValid(bill, tip, people) ? 0 : bill.value / people.value + amount.value
})

const resetValue = () => {
  bill.value = ''
  tip.value = ''
  people.value = ''
}

provide('bill', bill)
provide('tip', tip)
provide('people', people)
</script>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: $color-deep-space-sparkle;
  text-transform: uppercase;
  letter-spacing: 0.625rem;
}
/* MAIN */
.main {
  display: flex;
  @include container;
  min-width: 57.5rem;
  padding: 2rem;
  background-color: $color-white;
  border-radius: $border-radius;
  gap: 3rem;

  @include media(lg, mx) {
    flex-wrap: wrap;
    min-width: 0;
    gap: 0;
  }

  @include media(sm, mx) {
    margin: 0;
  }
}
</style>
