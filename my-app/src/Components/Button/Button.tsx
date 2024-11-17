// import { useState } from "react"
import style from './Button.module.scss'

interface IProps {
  children: React.ReactNode,
  isDisabled?: boolean,
  btnType?: 'Primary' | 'Secondary' | 'Secondary 2'
}

const Button = ({
  isDisabled,
  children,
  btnType, }: IProps) => {

  return (<button
    disabled={isDisabled}
    className={btnType === 'Secondary' ? `button ${style.secondary}` : btnType === 'Secondary 2' ? `button ${style.secondary2}` : `button ${style.button}`}
    onClick={() => { console.log('Click') }}>{children}</button>)
}

export default Button