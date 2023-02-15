import { FC } from "react"
import Post from "./post"

import s from './posts.module.css'

const Posts:FC = () => {
  return (
    <div className={s.posts}>
        <Post />
        <Post />
        <Post />
    </div>
  )
}
export default Posts