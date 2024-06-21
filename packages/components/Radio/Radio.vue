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
const { radioRef, isChecked, actualValue, actualName, actualModelValue } =
  useRadio(props, emits)

defineExpose({ radioRef })
</script>

<template>
  <label
    class="ns-radio"
    :class="[isChecked ? 'ns-active--active' : '', `ns-radio-${size}`]"
  >
    <input
      ref="radioRef"
      type="radio"
      :value="actualValue"
      v-model="actualModelValue"
      :name="actualName"
      @click.stop
    />
    <span @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
