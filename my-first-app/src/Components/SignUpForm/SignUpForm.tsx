import Button from "../Button/Button"
import Input from "../Input/Input"

import style from './SignUpForm.module.scss'
const SignUpForm = () => {
  return (
    <div className={style.formWrap}>
      <form className={style.form}>
        <Input type='text' placeholder="Your name" title='Name' />
        <Input type='e-mail' placeholder="Your email" title='Email' />
        <Input type='password' placeholder="Your password" title='Password' />
        <Input type='confirmPassword' placeholder="Confirm password" title='Confirm password' />
        <Button>Sign Up</Button>
        <div className={style.formFooter}>
          <p>Already have an account?</p>
          <a href="#">Sign in</a>
        </div>
      </form>
    </div>
  )
}
export default SignUpForm