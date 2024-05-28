<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import { NsButton } from 'new-style-ui'

let xxx = ref('')
let inputRef = ref()

const onGetValue = () => {
  console.log(inputRef.value)
}
const placeholder = 'input this'
</script>

<template>
  <div class="container">
    <ns-input v-model="xxx" :prefixIcon="{ icon: 'search' }" :suffixIcon="{ icon: 'search' }" :placeholder="placeholder" ref="inputRef"></ns-input>
    <ns-button @click="onGetValue">click get input ref</ns-button>
  </div>
</template>

<style scoped>
.container {
  padding: 80px;
  text-align: center;
  font-size: 14px;
}
</style>
