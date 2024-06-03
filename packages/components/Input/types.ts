import type { IconProps } from '../Icon/types'

interface InputProps {
  type: string
  placeholder?: string
  resize?: string
  disabled?: boolean
  autocomplete?: string
  readonly?: boolean
  clearable?: boolean
  showPassword?: boolean
  showWordLimit?: boolean
  suffixIcon?: IconProps
  prefixIcon?: IconProps
  tabindex?: string | number
  autofocus?: boolean
  maxlength?: number
  minlength?: number
  rows?: number | string
  name?: string
  max?: string
  min?: string
  form?: string
}

interface InputEmits {
  (e: 'keydown', evt: KeyboardEvent | Event): void
  (e: 'keyup', evt: KeyboardEvent | Event): void
  (e: 'input', evt: FocusEvent | Event): void
  (e: 'change', evt: FocusEvent | Event): void
  (e: 'focus', evt: FocusEvent | Event): void
  (e: 'blur', evt: FocusEvent | Event): void
  (e: 'clear'): void
}

export type { InputEmits, InputProps }
