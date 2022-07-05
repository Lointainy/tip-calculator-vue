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
import { ref, defineEmits, computed } from 'vue'

const emit = defineEmits(['update:peopleValue'])

const numPeople = ref(0)

const peopleValue = computed({
  get: () => numPeople.value,
  set: (newValue) => emit('update:peopleValue', newValue),
})
</script>

<style lang="scss">
/* people */
.people {
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
    top: 1rem;
    left: 1rem;
    width: 0.8125rem;
    height: 1rem;
  }
}
</style>
