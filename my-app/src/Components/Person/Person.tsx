import { useMemo } from "react"
import style from './Person.module.scss'

interface IProps {
  userName: string
}

const Person = ({ userName }: IProps) => {

  const initials = useMemo(()=>
  {
    return userName.split(' ').map((item)=>{return item[0]}).join('')
  },[userName])
  return (
    <div className={style.person}>
      <div className={style.initials}>
        <span>{ initials}</span>
      </div>
      <div className={style.username}>
        <span>{ userName}</span>
      </div>
    </div>
  )
}

export default Person