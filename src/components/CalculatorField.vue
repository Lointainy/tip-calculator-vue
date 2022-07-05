<template>
  <div class="calculator-field">
    <!-- input bill -->
    <bill-input @update:billValue="changeBill" />

    <!-- select tip -->
    <til-input />

    <!-- number of people -->
    <people-input @update:peopleValue="changeNumber" />
  </div>
</template>

<script setup>
import BillInput from './BillInput.vue'
import TilInput from './TilInput.vue'
import PeopleInput from './PeopleInput.vue'

const changeBill = (bill) => {
  console.log('bill: ' + bill)
}

const changeNumber = (people) => {
  console.log('num of people: ' + people)
}
</script>

<style lang="scss">
/* CALCULATOR */
.calculator-field {
  width: calc((100% / 2) - 1.5rem);
}
</style>
