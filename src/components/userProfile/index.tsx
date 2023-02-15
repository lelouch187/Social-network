import { Layout } from "antd"
import { FC } from "react"

import UserDate from "./userDate"
import PostForm from "./userPosts/postForm"
import Posts from "./userPosts/posts"

import s from './userProfile.module.css'

const UserProfile:FC = () => {
  return (
    <Layout.Content className={s.userProfile}>
      <UserDate />
      <PostForm />
      <Posts />
    </Layout.Content>
  )
}
export default UserProfile