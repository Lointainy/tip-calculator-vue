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
  width: calc((100% / 2) - 1.5rem);
  background-color: $color-very-dark-cyan;
  padding: 2.5rem;
  border-radius: 1.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.125rem;

    &-heading {
      .amount-title {
        color: $color-white;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        margin-bottom: 0.075rem;
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
      letter-spacing: -0.0625rem;
      color: $color-strong-cyan;
    }
  }

  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.125rem;

    &-heading {
      .total-title {
        color: $color-white;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        margin-bottom: 0.075rem;
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
      letter-spacing: -0.0625rem;
      color: $color-strong-cyan;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-very-dark-cyan;
    background-color: $color-strong-cyan;
    font-weight: 700;
    font-size: 1.25rem;
    height: 3rem;
    border-radius: $border-radius-button;
    cursor: pointer;
  }
}
</style>
