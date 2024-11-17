import style from './Title.module.scss'

interface IProps {
  title?:string,
}

const Title = ({title = 'Sign In'}:IProps) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
    </>
  )
}

export default Title