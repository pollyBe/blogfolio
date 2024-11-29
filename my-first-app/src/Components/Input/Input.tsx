import { useState } from 'react';
import style from './Input.module.scss'

interface IInputProps {
  title?: string,
  placeholder: string,
  type: string,
}

const Input = ({ title, placeholder, type }: IInputProps) => {
  const [text, setText] = useState(placeholder)

  return (
    <div className={style.inputWrap}>
      <label className={style.label}>{title}</label>
      <input
        className={ style.inputBox }
        type={type}
        value={text}
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}></input>
    </div>)
}

export default Input;