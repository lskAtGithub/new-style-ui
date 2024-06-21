import { ref, computed, inject } from 'vue'
import { provideKey } from './constants'

import type { RadioProps, RadioEmits } from './types'
import type { ExtractPropTypes } from 'vue'

const useRadio = (props: ExtractPropTypes<RadioProps>, emits: RadioEmits) => {
  const radioRef = ref<HTMLInputElement>()
  const radioGroup = inject(provideKey, undefined)

  const isGroup = computed(() => !!radioGroup)
  const actualName = computed(() => {
    if (isGroup.value) return radioGroup!.name
    return props.name
  })
  const actualValue = computed(() => {
    if (props.value) return props.value
    return props.label
  })
  const isChecked = computed(() => {
    return actualValue.value === actualModelValue.value
  })
  const actualModelValue = computed({
    get() {
      return isGroup.value ? radioGroup!.modelValue : props.modelValue!
    },
    set(val: string | number | boolean) {
      if (isGroup) {
        radioGroup!.emits('update:modelValue', val)
        radioGroup!.emits('change', val)
      } else {
        emits('update:modelValue', val)
      }
    }
  })

  return {
    radioRef,
    actualValue,
    isChecked,
    actualModelValue,
    isGroup,
    actualName
  }
}

export { useRadio }
