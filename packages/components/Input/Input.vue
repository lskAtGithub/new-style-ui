<script setup lang="ts">
import { ref, computed, defineModel } from 'vue'
import NsIcon from '../Icon/Icon.vue'
import { withDefaults } from 'vue'

import type { InputProps, InputEmits } from './types.ts'

defineOptions({
  name: 'NsInput',
  inheritAttrs: true
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  rows: '2',
  size: 'default'
})
const emits = defineEmits<InputEmits>()
const model = defineModel<string | number | null>()

let isFocus = ref(false)
const inputRef = ref<HTMLInputElement>()
const textareaRef = ref<HTMLTextAreaElement>()
let passwordIconName = ref<'eye' | 'eye-slash'>('eye')
let passwordType = ref<'password' | 'text'>('password')
let isComposing = ref(false)

const textAttrs = computed(() => {
  const {
    type,
    rows,
    suffixIcon,
    prefixIcon,
    showPassword,
    clearable,
    resize,
    size,
    ...filterAttrs
  } = props
  return filterAttrs
})
const showClearable = computed(
  () => props.clearable && !['', null, undefined].includes(model.value as never)
)
const showSuffixIcon = computed(
  () =>
    props.suffixIcon &&
    !['password'].includes(props.type) &&
    ['', null, undefined].includes(model.value as never)
)

const textareaAttrs = computed(() => {
  const {
    type,
    suffixIcon,
    prefixIcon,
    showPassword,
    clearable,
    autocomplete,
    size,
    max,
    min,
    ...filterAttrs
  } = props
  return filterAttrs
})

const handleFocus = (e: Event) => {
  isFocus.value = true
  emits('focus', e)
}
const handleBlur = (e: Event) => {
  isFocus.value = false
  emits('blur', e)
}
const handleInput = (e: Event) => {
  if (!isComposing.value) {
    emits('input', e)
  }
}
const handleChange = (e: Event) => emits('change', e)
const handleKeydown = (e: Event) => {
  if (!isComposing.value) {
    emits('keydown', e)
  }
}
const handleKeyup = (e: Event) => {
  if (!isComposing.value) {
    emits('keyup', e)
  }
}
const handleClear = () => {
  model.value = ''
  emits('clear')
}

const handleCompositionstart = () => {
  isComposing.value = true
}
const handleCompositionend = (e: Event) => {
  isComposing.value = false
  handleInput(e)
  handleKeydown(e)
  handleKeyup(e)
}
const handleChangePassWordStatus = () => {
  if (passwordIconName.value === 'eye' && passwordType.value === 'password') {
    passwordIconName.value = 'eye-slash'
    passwordType.value = 'text'
  } else {
    passwordIconName.value = 'eye'
    passwordType.value = 'password'
  }
}

defineExpose({ clear: handleClear, input: inputRef, textarea: textareaRef })
</script>

<template>
  <template v-if="type === 'textarea'">
    <textarea
      ref="textareaRef"
      class="ns-textarea"
      v-model="model"
      v-bind="textareaAttrs"
      :type="passwordType"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
      @keydown="handleKeydown"
      @keyup="handleKeyup"
      @compositionstart="handleCompositionstart"
      @compositionend="handleCompositionend"
    ></textarea>
  </template>
  <div
    v-else
    class="ns-input-container"
    :class="[isFocus ? 'ns-input-container--focused' : '']"
  >
    <template v-if="prefixIcon">
      <ns-icon v-bind="prefixIcon" />
    </template>
    <template v-if="type !== 'password'">
      <input
        ref="inputRef"
        class="ns-input"
        v-bind="textAttrs"
        type="text"
        v-model="model"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
        @compositionstart="handleCompositionstart"
        @compositionend="handleCompositionend"
      />
    </template>
    <template v-else>
      <input
        ref="inputRef"
        class="ns-input"
        v-bind="textAttrs"
        v-model="model"
        :type="passwordType"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
        @compositionstart="handleCompositionstart"
        @compositionend="handleCompositionend"
      />
    </template>
    <template v-if="showClearable">
      <ns-icon class="ns-close-icon" icon="close" @click="handleClear" />
    </template>
    <template v-if="showSuffixIcon">
      <ns-icon v-bind="suffixIcon!" />
    </template>
    <template v-if="type === 'password'">
      <ns-icon
        style="cursor: pointer"
        :icon="passwordIconName"
        @click="handleChangePassWordStatus"
      />
    </template>
  </div>
</template>
