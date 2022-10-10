import type { FC, MouseEventHandler, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

interface ButtonProps {
    children: ReactNode
    outline?: boolean
    click?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ children, outline = false, click }) => {
    const current = outline ? styles.outline : styles.normal
    const classes = classNames(styles.button, current)

    return (
        <button className={classes} onClick={click}>
            {children}
        </button>
    )
}

export default Button
