<template>
  <div class="people">
    <div class="people__title">Number of People</div>
    <div class="people__input-container" for="bill">
      <input v-model="peopleValue" class="people__input" name="bill" type="number" min="0" />
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
    top: 1rem;
    left: 1rem;
    width: 0.8125rem;
    height: 1rem;
  }
}
</style>
