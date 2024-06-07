<script setup lang="ts">
import { ref } from 'vue'
import NsIcon from '../Icon/Icon.vue'
import type { ButtonProps } from './types'

defineOptions({
  name: 'NsButton'
})

withDefaults(defineProps<ButtonProps>(), {
  size: 'default'
})

const buttonRef = ref<HTMLButtonElement>()

defineExpose({ buttonRef })
</script>

<template>
  <button
    ref="buttonRef"
    class="ns-button"
    :disabled="loading || disabled"
    :class="[
      type ? `ns-button--${type}` : '',
      size ? `ns-button--${size}` : '',
      loading ? `is-loading` : '',
      disabled ? `is-disabled` : ''
    ]"
  >
    <template v-if="loading">
      <ns-icon icon="spinner" size="1x" spin />
    </template>
    <template v-if="icon && !loading">
      <ns-icon :icon="icon" size="1x" />
    </template>
    <slot></slot>
  </button>
</template>
