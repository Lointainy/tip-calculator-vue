<template>
  <div class="bill">
    <h1 class="bill__title">Bill</h1>
    <div class="bill__input-container" for="bill">
      <input v-model="billValue" class="bill__input" name="bill" type="number" min="0" placeholder="0" />
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
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: $color-dark-cyan;
  }

  &__input-container {
    position: relative;
    width: 100%;
    height: 3rem;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding-right: 1rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: right;
    color: $color-very-dark-cyan;
    background-color: $color-very-light-cyan;
  }

  &__input-icon {
    position: absolute;
    top: 0.75rem;
    left: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #9ebbbd;
  }
}
</style>
