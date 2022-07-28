<template>
  <div class="summary-field">
    <div class="summary-field__amount">
      <div class="summary-field__amount-heading">
        <div class="amount-title">Tip Amount</div>
        <div class="amount-subtitle">/ person</div>
      </div>
      <div class="summary-field__amount-number">${{ amount.toFixed(1) }}</div>
    </div>
    <div class="summary-field__total">
      <div class="summary-field__total-heading">
        <div class="total-title">Total</div>
        <div class="total-subtitle">/ person</div>
      </div>
      <div class="summary-field__total-number">${{ total.toFixed(1) }}</div>
    </div>
    <button :disabled="isDisabled" @click="handleReset" class="summary-field__btn">reset</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const emit = defineEmits(['resetValue'])

const handleReset = () => emit('resetValue')

const props = defineProps({
  amount: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
})

const isDisabled = computed(() => props.amount <= 0 || props.total <= 0)
</script>
<style lang="scss">
/* summary-field */
.summary-field {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: $column-width;
  padding: 2.5rem;
  background-color: $color-deep-jungle-green;
  border-radius: 1.5625rem;

  @include media(lg, mx) {
    width: 100%;
  }

  &__amount {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.125rem;

    &-heading {
      @include mediaWidth(400px, mx) {
        width: 100%;
      }

      .amount-title {
        margin-bottom: 0.075rem;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        color: $color-white;
      }

      .amount-subtitle {
        font-weight: 700;
        font-size: 0.8125rem;
        color: $color-weldon-blue;
      }
    }

    &-number {
      font-weight: 700;
      font-size: 3rem;
      color: $color-light-sea-green;
      letter-spacing: -0.0625rem;
    }
  }

  &__total {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.125rem;

    &-heading {
      @include mediaWidth(400px, mx) {
        width: 100%;
      }

      .total-title {
        margin-bottom: 0.075rem;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        color: $color-white;
      }

      .total-subtitle {
        font-weight: 700;
        font-size: 0.8125rem;

        color: $color-weldon-blue;
      }
    }

    &-number {
      font-weight: 700;
      font-size: 3rem;
      color: $color-light-sea-green;
      letter-spacing: -0.0625rem;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    font-weight: 700;
    font-size: 1.25rem;
    color: $color-deep-jungle-green;
    text-transform: uppercase;
    background-color: $color-light-sea-green;
    border-radius: $border-radius-button;
    cursor: pointer;
    transition: $transition-background;

    &:hover {
      background-color: $color-crystal;
    }

    &:disabled {
      background-color: $color-skobeloff;
      cursor: default;
    }
  }
}
</style>
