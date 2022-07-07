<template>
  <div class="calculator-field">
    <!-- input bill -->
    <bill-input />

    <!-- select tip -->
    <tip-input />

    <!-- number of people -->
    <people-input />
  </div>
</template>

<script setup>
import BillInput from './BillInput.vue'
import TipInput from './TipInput.vue'
import PeopleInput from './PeopleInput.vue'
</script>

<style lang="scss">
/* CALCULATOR */
.calculator-field {
  width: $column-width;

  @include media(lg, mx) {
    width: 100%;
  }
}
</style>
