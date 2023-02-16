import { FC } from "react"

import s from './dialog.module.css'

const Dialog:FC = () => {
  return (
    <div className={s.wrapper}>
    <div className={s.imgWrapper}>
      <img
        src="https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-19.jpg"
        alt="аватар"
      />
    </div>
    <p className={s.text}>текст</p>
    </div>
  )
}
export default Dialog