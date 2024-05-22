<script setup lang="ts">
import { ref } from 'vue'
const a = ref('www')
</script>

<template>
  <div class="container" :class="{ a: a }">
    <ns-button type="primary">click me</ns-button>
  </div>
</template>

<style scoped>
.container {
  padding: 80px;
  text-align: center;
}
</style>
