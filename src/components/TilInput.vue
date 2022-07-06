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
    color: $color-dark-cyan;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &__list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;

    &-item {
      position: relative;
      height: 3rem;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: calc((100% / 3) - 2rem);
      // flex: 1 1 calc((100% / 3) - 2rem);
    }
  }

  &__item-radio {
    position: absolute;
    display: none;
    &:checked + .tip__item-title {
      background-color: $color-strong-cyan;
    }
  }

  &__item-title {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    color: $color-white;
    background-color: $color-very-dark-cyan;
    border-radius: $border-radius-button;
  }

  &__item-input {
    height: 100%;
    width: 100%;
    border-radius: $border-radius-button;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    background-color: $color-very-light-cyan;
    color: #547878;
    text-align: center;
  }
}
</style>
