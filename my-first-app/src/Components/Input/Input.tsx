import { useState } from 'react';
import style from './Input.module.scss'

interface IInputProps {
  title?: string,
  placeholder: string,
  type: string,
  isActive:boolean
}

const Input = ({ title, placeholder, type, isActive=false }: IInputProps) => {
  const [text, setText] = useState(placeholder)

  return (
    <>
      <label>{title}</label>
      <input
        className={isActive ? style.hide : style.inputBox }
        type={type}
        placeholder={text}
        onChange={(e) => setText(e.target.value)}></input>
    </>)
}

export default Input;