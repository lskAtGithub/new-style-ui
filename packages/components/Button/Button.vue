<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'

defineOptions({
  name: 'NsButton'
})

withDefaults(defineProps<ButtonProps>(), {})

const buttonRef = ref<HTMLButtonElement>()

defineExpose()
</script>

<template>
  <button
    ref="buttonRef"
    class="ns-button"
    :class="[
      type ? `ns-button--${type}` : '',
      size ? `ns-button--${size}` : ''
    ]"
  >
    <slot></slot>
  </button>
</template>
