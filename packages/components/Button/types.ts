import type Button from './Button.vue'

type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
type ButtonSize = 'large' | 'default' | 'small'

interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  icon?: string
  circle?: boolean
  plain?: boolean
  round?: boolean
}

export type ButtonInstance = InstanceType<typeof Button>
export type { ButtonType, ButtonSize, ButtonProps }
