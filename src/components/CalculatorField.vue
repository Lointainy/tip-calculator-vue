<template>
  <div class="calculator-field">
    <!-- input bill -->
    <bill-input />

    <!-- select tip -->
    <til-input />

    <!-- number of people -->
    <people-input />
  </div>
</template>

<script setup>
import BillInput from './BillInput.vue'
import TilInput from './TilInput.vue'
import PeopleInput from './PeopleInput.vue'
</script>

<style lang="scss">
/* CALCULATOR */
.calculator-field {
  width: calc((100% / 2) - 1.5rem);
}
</style>
