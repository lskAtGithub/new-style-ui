<script setup lang="ts">
import { provide } from 'vue'
import { provideKey } from './constants.ts'

import type { RadioGroupProps, RadioGroupEmits } from './types.ts'

defineOptions({
  name: 'NsRadioGroup'
})

const props = defineProps<RadioGroupProps>()
const emits = defineEmits<RadioGroupEmits>()

provide(provideKey, { ...props, emits })
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
