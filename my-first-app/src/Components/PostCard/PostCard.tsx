import Like from '../../assets/Icon-Thumbs-Up.svg?react'
import DisLike from '../../assets/Icon-Thumbs-Down.svg?react'
import Save from '../../assets/Icon-Bookmark.svg?react'

import style from './PostCard.module.scss'

interface IProps {
  date: string,
  title: string,
  description: string,
  image?: string,
}
const PostCard = ({ date, title, description, image }: IProps) => {
  return (<div className={style.card}>
    <div className={style.cardWrap}>
      <div className={style.infoWrap}>
        <div className={style.date}>
          <p>{date}</p>
        </div>
        <h3 className={style.title}>{title.substring(0, 150)} ...</h3>
        <div className={style.description}>
          <p>{description.substring(0, 400)} ...</p>
        </div>
      </div>
      <div className={style.imgWrap}>
        <img src={image} />
      </div>
    </div>
    <div className={style.postFooter}>
      <div>
        <button type="button"><Like/></button>
        <button type="button"><DisLike/></button>
      </div>
      <div>
        <button type='button'><Save /></button>
        <button type='button'>...</button>
      </div>
    </div>
  </div>)
}
export default PostCard