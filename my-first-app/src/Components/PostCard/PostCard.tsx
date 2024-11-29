import Like from '../../assets/Icon-Thumbs-Up.svg?react'
import DisLike from '../../assets/Icon-Thumbs-Down.svg?react'
import Save from '../../assets/Icon-Bookmark.svg?react'

interface IProps {
  date: string,
  title: string,
  description: string,
  image?: string,
}
const PostCard = ({ date, title, description, image }: IProps) => {
  // function cuttedDescr() {
  //   description.substring(0, 200)
  // }
  return (<div>
    <div>
      <div>
        <div>
          <p>{date}</p>
        </div>
        <h3>{title}</h3>
        <div>
          <p>{description.substring(0, 400)} ...</p>
        </div>
      </div>
      <div>
        <img src={image} />
      </div>
    </div>
    <div>
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