<script setup lang="ts">
import { withDefaults } from 'vue'
import { useRadio } from './use-radio'

import type { RadioProps, RadioEmits } from './types.ts'

defineOptions({
  name: 'NsRadio'
})

const props = withDefaults(defineProps<RadioProps>(), {
  size: 'default',
  modelValue: undefined
})
const emits = defineEmits<RadioEmits>()
const { radioRef, isChecked, actualValue, modelValue } = useRadio(props, emits)

defineExpose({ radioRef })
</script>

<template>
  <label class="ns-radio" :class="[isChecked ? 'ns-active--active' : '']">
    <input
      ref="radioRef"
      type="radio"
      :value="actualValue"
      v-model="modelValue"
      :name="name"
      @click.stop
    />
    <span @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
