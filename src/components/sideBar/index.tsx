import { FC } from 'react';
import { Layout } from 'antd';

import s from './sideBar.module.css';

const SideBar: FC = () => {
  return <Layout.Sider className={s.sideBar}>
    <p className={s.item}>Профиль</p>
    <p className={s.item}>Сообщения</p>
    <p className={s.item}>Новости</p>
    <p className={s.item}>Новости</p>
    <p className={s.item}>Музыка</p>
    <p className={s.item}>Настройки</p>
    </Layout.Sider>;
};
export default SideBar;
