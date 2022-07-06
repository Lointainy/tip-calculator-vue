<template>
  <div class="summary">
    <div class="summary__amount">
      <div class="summary__amount-heading">
        <div class="amount-title">Tip Amount</div>
        <div class="amount-subtitle">/ person</div>
      </div>
      <div class="summary__amount-number">${{ amount.toFixed(1) }}</div>
    </div>
    <div class="summary__total">
      <div class="summary__total-heading">
        <div class="total-title">Total</div>
        <div class="total-subtitle">/ person</div>
      </div>
      <div class="summary__total-number">${{ total.toFixed(1) }}</div>
    </div>
    <div @click="handleReset" class="summary__btn">reset</div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

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

props.amount
props.total
</script>
<style lang="scss">
/* SUMMARY */
.summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% / 2) - 1.5rem);
  padding: 2.5rem;
  background-color: $color-very-dark-cyan;
  border-radius: 1.5625rem;

  &__amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.125rem;

    &-heading {
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
        color: #7f9d9f;
      }
    }

    &-number {
      font-weight: 700;
      font-size: 3rem;
      color: $color-strong-cyan;
      letter-spacing: -0.0625rem;
    }
  }

  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.125rem;

    &-heading {
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

        color: #7f9d9f;
      }
    }

    &-number {
      font-weight: 700;
      font-size: 3rem;
      color: $color-strong-cyan;
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
    color: $color-very-dark-cyan;
    background-color: $color-strong-cyan;
    border-radius: $border-radius-button;
    cursor: pointer;
  }
}
</style>
