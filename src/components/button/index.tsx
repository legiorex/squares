import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

import styles from './styles.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ className, onClick, disabled = false, children, ...props }) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
