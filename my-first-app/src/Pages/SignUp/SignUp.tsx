import { NavLink } from "react-router-dom"
import Form from "../../Components/Form/Form"

import style from './SignUp.module.scss'
const SignUp = () => {
  return (
    <div className={style.container}>
      <div className={style.titleWrap}>
        <NavLink to="/home">Back to home</NavLink>
        <h1>Sign Up</h1>
      </div>
      <Form/>
    </div>
  )
}
export default SignUp