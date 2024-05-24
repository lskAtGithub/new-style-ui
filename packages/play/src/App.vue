<script setup lang="ts">
import { NsButton } from 'new-style-ui'

const handleClick = () => {
  console.log(1111)
}
</script>

<template>
  <div class="container">
    <ns-button @click="handleClick" :disabled="false">base button</ns-button>
    <ns-button @click="handleClick" :disabled="true" type="primary">primary button</ns-button>
    <ns-button @click="handleClick" :disabled="true" type="success">success button</ns-button>
    <ns-button @click="handleClick" :disabled="true" type="warning">warning button</ns-button>
    <ns-button @click="handleClick" :disabled="true" type="danger">danger button</ns-button>
  </div>
</template>

<style scoped>
.container {
  padding: 80px;
  text-align: center;
  font-size: 14px;
}
</style>
