import { InputHTMLAttributes } from 'react'

import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  placeholder: string
  labelVisible?: boolean
  labelContent?: string
  labelClassName?: string
}

export function Input({
  id,
  placeholder,
  labelVisible = false,
  labelContent = '',
  labelClassName = '',
  ...rest
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={labelVisible ? labelClassName : 'sr-only'} htmlFor={id}>
        {labelContent.length > 0 ? labelContent : placeholder}
      </label>
      <input
        id={id}
        className={styles.input}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}
