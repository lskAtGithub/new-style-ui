<script setup lang="ts">
import { ref } from 'vue'
import { NsInput } from 'new-style-ui'

let xxx = ref('')
let inputRef = ref()
let isComposing = ref(false)

const onGetValue = () => {
  console.log(inputRef.value)
}
const handleInput = () => {
  if (!isComposing.value) {
    console.log('run')
  }
}

</script>

<template>
  <div class="container">
    <p>
      <ns-icon icon="eye-slash"></ns-icon>
      <ns-input
        ref="inputRef"
        type="text"
        :suffix-icon="{ icon: 'search' }"
        :clearable="true"
        v-model="xxx"
        @input="handleInput"
      />
    </p>
    <ns-button @click="onGetValue">click get input ref</ns-button>
  </div>
</template>

<style scoped>
.container {
  padding: 80px;
  text-align: center;
  font-size: 14px;
}
.ipt {
  padding: 8px 12px;
  outline: none;
  border-radius: 3px;
  border: none;
  box-shadow: 0 0 5px #9a9a9a;
}
.ipt:hover {
  box-shadow: 0 0 5px #c8c9cc;
}
.ipt:focus {
  box-shadow:
    inset 2px 2px 5px #9a9a9a,
    inset -1px -1px 5px #9a9a9a;
}
</style>
