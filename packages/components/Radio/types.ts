import type { Size } from '../Types'

// radio group
interface RadioGroupProps {
  modelValue?: string | number | boolean
  label?: string | number | boolean
  size?: Size
  disabled?: boolean
  name?: string
  value?: string | number | boolean
}
interface RadioGroupEmits {
  (e: 'update:modelValue'): void
  (e: 'change', modelValue: string | number | boolean | undefined): void
}

// radio
interface RadioProps {
  modelValue?: string | number | boolean
  label?: string | number | boolean
  size?: Size
  disabled?: boolean
  name?: string
  value?: string | number | boolean
}
interface RadioEmits {
  (e: 'update:modelValue', val: string | number | boolean): void
}

export type { RadioProps, RadioEmits, RadioGroupProps, RadioGroupEmits }
