import { FC } from "react";

import s from './userDate.module.css'

const UserDate:FC=() => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperImg}>
        <img
          src="https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-19.jpg"
          alt="аватар"
        />
      </div>
      <div className={s.userInfo}>
        <p className={s.item}>Иван М.</p>
        <p className={s.item}>День рождение: 2 сентября</p>
        <p className={s.item}>Город: Омск</p>
        <p className={s.item}>Образование: ОмГУПС'21</p>
        <p className={s.item}>
          Веб-сайт:{' '}
          <a
            href="https://github.com/lelouch187"
            rel="noreferrer"
            target="_blank">
            github.com/lelouch187
          </a>
        </p>
      </div>
    </div>
  );
};
export default UserDate;
