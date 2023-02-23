import { FC, MouseEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { IFethUser } from '../../../types';
import ava from '../../../assets/img/ava.jpeg';

import s from './user.module.css';
import { Button } from 'antd';




interface UserProps {
  user: IFethUser;
  onFollow:(e:MouseEvent<HTMLElement>,userId:number)=>void;
  onUnFollow:(e:MouseEvent<HTMLElement>,userId:number)=>void;
}

const User: FC<UserProps> = ({ user, onFollow, onUnFollow }) => {
  const navigate = useNavigate();
  
 
  return (
    <div onClick={() => navigate(`${user.id}`)} className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img src={user.photos.small ? user.photos.small : ava} alt="аватар" />
      </div>
      <div className={s.textBlock}>
        <h3>{user.name}</h3>
        {user.followed? 
          <Button onClick={(e)=>onFollow(e, user.id)}>Отписаться</Button>
        : 
          <Button onClick={(e)=>onUnFollow(e, user.id)}>Подписаться</Button>
        }
      </div>
    </div>
  );
};
export default User;
