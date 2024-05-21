<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'

defineOptions({
  name: 'NsButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button'
})

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
</script>

<template>
  <component
    ref="_ref"
    class="ns-button"
    :is="props.tag"
    :type="tag === 'button' ? props.nativeType : void 0"
    :disabled="props.disabled"
    :class="['ns-button', props.size]"
  >
    <slot></slot>
  </component>
</template>
