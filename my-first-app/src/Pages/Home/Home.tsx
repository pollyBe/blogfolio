import Tabs from '../../Components/Tabs/Tabs'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <h1>Blog</h1>
      <Tabs/>
    </div>
  )
}
export default Home