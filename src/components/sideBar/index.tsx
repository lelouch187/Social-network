import { FC } from 'react';
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../router/AppRouter';

import s from './sideBar.module.css';


const SideBar: FC = () => {
  return <Layout.Sider className={s.sideBar}>
    <p className={s.item}>
      <NavLink className={({isActive})=>isActive?`${s.active} ${s.link}`:`${s.link}`} 
      to={RouteNames.PROFILE}>Профиль</NavLink> 
      </p>
    <p className={s.item}>
      <NavLink className={({isActive})=>isActive?`${s.active} ${s.link}`:`${s.link}`}
      to={RouteNames.DIALOGS}>Сообщения</NavLink> 
      </p>
    <p className={s.item}>
      <NavLink className={({isActive})=>isActive?`${s.active} ${s.link}`:`${s.link}`}
      to={RouteNames.NEWS}>Новости</NavLink>
    </p>
    <p className={s.item}>
      <NavLink className={({isActive})=>isActive?`${s.active} ${s.link}`:`${s.link}`} 
      to={RouteNames.MUSIC}>Музыка</NavLink>
    </p>
    <p className={s.item}>
     <NavLink className={({isActive})=>isActive?`${s.active} ${s.link}`:`${s.link}`} 
     to={RouteNames.SETTING}>Настройки</NavLink> 
    </p>
    </Layout.Sider>;
};
export default SideBar;
