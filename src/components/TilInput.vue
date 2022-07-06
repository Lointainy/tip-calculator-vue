<template>
  <div class="tip">
    <div class="tip__title">Select Tip %</div>
    <div class="tip__list">
      <div v-for="(item, index) in tipPercentage" :key="index" class="tip__list-item">
        <input
          v-model="tilValue"
          class="tip__item-radio"
          type="radio"
          :id="`radio-percentage-${item}`"
          name="tip-percentage"
          :value="item"
        />
        <label class="tip__item-title" :for="`radio-percentage-${item}`">{{ item }}%</label>
      </div>
      <div class="tip__list-item">
        <input v-model="tilValue" class="tip__item-input" type="number" placeholder="custom" min="0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const tilValue = inject('til')
const tipPercentage = ref([5, 10, 15, 25, 50])
</script>

<style lang="scss">
/* tip */
.tip {
  margin-bottom: 2.5rem;

  &__title {
    margin-bottom: 0.375rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: $color-dark-cyan;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;

    &-item {
      position: relative;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: calc((100% / 3) - 2rem);
      height: 3rem;
    }
  }

  &__item-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    color: $color-white;
    background-color: $color-very-dark-cyan;
    border-radius: $border-radius-button;
    cursor: pointer;
  }

  &__item-radio {
    position: absolute;
    display: none;

    &:checked + .tip__item-title {
      background-color: $color-strong-cyan;
    }
  }

  &__item-input {
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
    color: #547878;
    background-color: $color-very-light-cyan;
    border-radius: $border-radius-button;
  }
}
</style>
