import type Button from './Button.vue'
import type { Size } from '../Types'

type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

interface ButtonProps {
  type?: ButtonType
  size?: Size
  disabled?: boolean
  loading?: boolean
  icon?: string
  circle?: boolean
  plain?: boolean
  round?: boolean
}

export type ButtonInstance = InstanceType<typeof Button>
export type { ButtonType, ButtonProps }
