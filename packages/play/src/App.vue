<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import { NsInput } from 'new-style-ui'
import { NsRadio, NsRadioGroup } from '../../components/Radio/index'

let compRef = ref()
let radioValue = ref('3')

const handleClick = () => {
}
const handleChange = (e: any) => {}
</script>

<template>
  <div class="container">
    <p>
      <ns-radio-group
        v-model="radioValue"
        name="www"
        ref="compRef"
        @change="handleChange"
      >
        <ns-radio label="label1" value="1" />
        <ns-radio label="label2" value="2" />
        <ns-radio label="label3" value="3" />
        <ns-radio value="4">
          <ns-icon icon="eye" />
          label4
        </ns-radio>
      </ns-radio-group>
    </p>
    <p>
      <ns-radio v-model="radioValue" label="label3" value="3" />
    </p>
    <!-- <ns-button type="primary" @click="handleClick">Click me</ns-button> -->
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
