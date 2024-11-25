import Button from "../Button/Button"
import Input from "../Input/Input"

import style from './Form.module.scss'
const Form = () => {
  return (
    <div className={style.formWrap}>
      <form className={style.form}>
        <Input type='text' placeholder="Your name" title='Name' isActive={true} />
        <Input type='e-mail' placeholder="Your email" title='Email' isActive={true} />
        <Input type='password' placeholder="Your password" title='Password' isActive={true} />
        <Input type='password' placeholder="Confirm password" title='Confirm password' isActive={true} />
        <Button>Sign Up</Button>
        <div><p>Already have an account?</p><a href="#">Sign in</a></div>
      </form>
    </div>
  )
}
export default Form