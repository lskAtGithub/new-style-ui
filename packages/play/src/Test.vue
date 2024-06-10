<script setup lang="ts">
defineProps<{
  name: string
  value: string
  
}>()
</script>

<template>
  <label>
    <input type="radio" :name="name">
  </label>
</template>

