import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../../types/types';

import s from './dialog.module.css';

interface dialogProps {
  user: IUser;
}

const Dialog: FC<dialogProps> = ({user}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(user.id)}
    className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img
          src={user.avatar}
          alt="аватар"
        />
      </div>
      <div className={s.textBlock}>
      <h3>{user.name} {user.fullName}</h3>  
      <p className={s.text}>текст</p>
      </div>
    </div>
  );
};
export default Dialog;
