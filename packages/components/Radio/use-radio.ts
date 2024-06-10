import { ref, computed, inject } from 'vue'
import { provideKey } from './constants'

import type { RadioProps, RadioEmits } from './types'
import type { ExtractPropTypes } from 'vue'

const useRadio = (props: ExtractPropTypes<RadioProps>, emits: RadioEmits) => {
  const radioRef = ref<HTMLInputElement>()
  const radioGroup = inject(provideKey, undefined)
  const isGroup = computed(() => !!radioGroup)
  const actualValue = computed(() => {
    if (props.value) return props.value
    return props.label
  })
  const isChecked = computed(() => {
    return actualValue.value === props.modelValue
  })
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup!.modelValue : props.modelValue!
    },
    set(val: string | number | boolean) {
      if (isGroup) {
        console.log(radioGroup!.emits('update:modelValue', val))
      } else {
        emits('update:modelValue', val)
      }
      radioRef.value!.checked = props.modelValue === actualValue.value
    }
  })

  return { radioRef, actualValue, isChecked, modelValue, isGroup }
}

export { useRadio }
