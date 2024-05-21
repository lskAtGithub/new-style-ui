import type { Component } from 'vue'

type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
type NativeType = 'button' | 'reset' | 'submit'
type ButtonSize = 'large' | 'default' | 'small'

interface ButtonProps {
  tag?: string | Component
  type?: ButtonType
  size?: ButtonSize
  nativeType?: NativeType
  disabled?: boolean
  loading?: boolean
  icon?: string
  circle?: boolean
  plain?: boolean
  round?: boolean
}

export type { ButtonType, NativeType, ButtonSize, ButtonProps }
