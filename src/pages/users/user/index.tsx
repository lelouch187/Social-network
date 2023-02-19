import { FC } from "react"
import { IFethUser } from "../../../types/types"

import s from './user.module.css'

interface UserProps {
  user:IFethUser;
}

const User:FC<UserProps> = ({user}) => {
  return (
    <div
    className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img
          src={user.photos.small?user.photos.small:'https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-19.jpg'}
          alt="аватар"
        />
      </div>
      <div className={s.textBlock}>
      <h3>{user.name}</h3>
      </div>
    </div>
  )
}
export default User