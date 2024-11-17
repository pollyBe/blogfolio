import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from './Burger.module.scss'
import { useState } from "react"

// interface IProps{
//   btnType?:string,
// }

const Burger = () => {
  const [open, setOpen] = useState(false)

  function handler() {
    if (open) {
      return (
        <FontAwesomeIcon icon={faXmark}
       className={style.cross} />
      )
    } else {
       return <FontAwesomeIcon icon={faBars} className={style.icon} />
      }
    }

  return (
    <button
      className={style.burgerWrap}
      onClick={() => { setOpen(open ? false : true) }}>{handler()}
    </button>
  )
}

export default Burger