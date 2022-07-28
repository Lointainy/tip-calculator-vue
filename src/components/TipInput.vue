<template>
  <div class="tip">
    <div class="tip__title">Select Tip %</div>
    <div class="tip__list">
      <div v-for="(item, index) in tipPercentage" :key="index" class="tip__list-item">
        <input
          v-model="tipValue"
          class="tip__item-radio"
          type="radio"
          :id="`radio-percentage-${item}`"
          name="tip-percentage"
          :value="item"
        />
        <label class="tip__item-title" :for="`radio-percentage-${item}`">{{ item }}%</label>
      </div>
      <div class="tip__list-item">
        <input v-model="tipValue" class="tip__item-input" type="number" placeholder="custom" min="0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const tipValue = inject('tip')
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
    color: $color-wintergreen-dream;
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
      @include item-width(3, 2rem);
      height: 3rem;

      @include media(sm, mx) {
        @include item-width(2, 2rem);
      }
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
    background-color: $color-deep-jungle-green;
    border-radius: $border-radius-button;
    cursor: pointer;
    transition: $transition-background;

    &:hover {
      background-color: $color-crystal;
    }
  }

  &__item-radio {
    position: absolute;
    display: none;

    &:checked + .tip__item-title {
      background-color: $color-light-sea-green;
    }
  }

  &__item-input {
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
    color: $color-deep-jungle-green;
    background-color: $color-alice-blue;
    border-radius: $border-radius-button;
    cursor: pointer;

    &:focus {
      outline: 0.125rem $color-light-sea-green solid;
    }

    &::placeholder {
      color: $color-dark-electric-blue;
    }
  }
}
</style>
