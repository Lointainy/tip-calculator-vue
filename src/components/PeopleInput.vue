<template>
  <div class="people">
    <div class="people__title">
      Number of People<span v-if="peopleValue == 0" class="error-title">Can’t be zero</span>
    </div>
    <div class="people__input-container" for="bill">
      <input
        :class="peopleValue == 0 ? 'error-input' : ''"
        v-model="peopleValue"
        class="people__input"
        name="bill"
        type="number"
        min="0"
        placeholder="0"
      />
      <img src="@/assets/img/CombinedShape.svg" alt="" class="people__input-icon" />
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const peopleValue = inject('people')
</script>

<style lang="scss">
/* people */
.people {
  margin-bottom: 2.5rem;

  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.375rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: $color-wintergreen-dream;
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
    color: $color-deep-jungle-green;
    background-color: $color-alice-blue;
    border-radius: $border-radius-button;

    &:focus {
      outline: 0.125rem $color-light-sea-green solid;
    }

    &::placeholder {
      color: $color-dark-electric-blue;
    }
  }

  &__input-icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 0.8125rem;
    height: 1rem;
  }
}
</style>
