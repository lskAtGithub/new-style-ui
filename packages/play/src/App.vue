<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import { NsInput } from 'new-style-ui'
import { NsRadio, NsRadioGroup } from '../../components/Radio/index'

let inputRef = ref()
let radioValue = ref('1')

const handleClick = () => {
  console.log(radioValue.value)
}
</script>

<template>
  <div class="container">
    <p>
      <ns-radio-group v-model="radioValue">
        <ns-radio label="label1" name="1" value="1" />
        <ns-radio label="label2" name="1" value="2" />
        <ns-radio label="label3" name="1" value="3" />
        <ns-radio name="1" value="4">
          <ns-icon icon="eye" />
          label4
        </ns-radio>
      </ns-radio-group>
    </p>
    <ns-button @click="handleClick">Clike me</ns-button>
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
