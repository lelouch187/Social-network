import { FC } from 'react';
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { PrivateRoutes } from '../../router/AppRouter';

import s from './sideBar.module.css';

const SideBar: FC = () => {
  return (
    <Layout.Sider className={s.sideBar}>
      <p className={s.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.link}` : `${s.link}`
          }
          to={PrivateRoutes.MYPROFILE}>
          Профиль
        </NavLink>
      </p>
      <p className={s.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.link}` : `${s.link}`
          }
          to={PrivateRoutes.DIALOGS}>
          Сообщения
        </NavLink>
      </p>
      <p className={s.item}>
        <NavLink end
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.link}` : `${s.link}`
          }
          to={PrivateRoutes.USERS}>
          Пользователи
        </NavLink>
      </p>
      <p className={s.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.link}` : `${s.link}`
          }
          to={PrivateRoutes.NEWS}>
          Новости
        </NavLink>
      </p>
      <p className={s.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.link}` : `${s.link}`
          }
          to={PrivateRoutes.MUSIC}>
          Музыка
        </NavLink>
      </p>
      <p className={s.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.link}` : `${s.link}`
          }
          to={PrivateRoutes.SETTING}>
          Настройки
        </NavLink>
      </p>
    </Layout.Sider>
  );
};
export default SideBar;
