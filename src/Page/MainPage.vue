<template>
  <div class="main">
    <calculator-field />
    <!-- summary -->
    <summary-field :total="total" :amount="amount" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import CalculatorField from '@/components/CalculatorField.vue'
import SummaryField from '@/components/SummaryField.vue'

const total = ref(0)
const amount = ref(0)
</script>

<style lang="scss">
/* MAIN */
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 57.5rem;
  height: 480px;
  border-radius: $border-radius;
  background-color: $color-white;
  padding: 2rem;
  display: flex;
  gap: 3rem;
}
</style>
