import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IFethUser } from '../../../types';
import ava from '../../../assets/img/ava.jpeg'

import s from './user.module.css';

interface UserProps {
  user: IFethUser;
}

const User: FC<UserProps> = ({ user }) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`${user.id}`)}
    className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img
          src={
            user.photos.small
              ? user.photos.small
              : ava
          }
          alt="аватар"
        />
      </div>
      <div className={s.textBlock}>
        <h3>{user.name}</h3>
      </div>
    </div>
  );
};
export default User;
