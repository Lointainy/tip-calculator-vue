<template>
  <div class="bill">
    <h1 class="bill__title">Bill</h1>
    <div class="bill__input-container" for="bill">
      <input v-model="billValue" class="bill__input" name="bill" type="number" min="0" />
      <span class="bill__input-icon">$</span>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const billValue = inject('bill')
</script>
<style lang="scss">
/* bill */
.bill {
  margin-bottom: 2.5rem;

  &__title {
    margin-bottom: 0.375rem;
    color: $color-dark-cyan;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &__input-container {
    position: relative;
    height: 3rem;
    width: 100%;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding-right: 1rem;
    background-color: $color-very-light-cyan;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: right;
    color: $color-very-dark-cyan;
  }

  &__input-icon {
    position: absolute;
    left: 1rem;
    top: 0.75rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: #9ebbbd;
  }
}
</style>
