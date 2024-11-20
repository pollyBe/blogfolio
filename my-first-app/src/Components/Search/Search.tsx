// import Button from "../Button/Button"
import Button from "../Button/Button"
import Input from "../Input/Input"
import SearchIcon from '../../assets/search.svg?react'
import style from './Search.module.scss'
import { useState } from "react"

const Search = () => {

  const [visibility, setVisibility] = useState(false)
  return (
    <div className={style.searchwrap}>

      <Button btnType='Primary' onClick={()=>setVisibility(visibility ? false : true)}><SearchIcon/></Button>
    </div>
  )
}
export default Search