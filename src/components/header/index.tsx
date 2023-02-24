import { Button, Layout } from 'antd';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useOnLogoutMutation } from '../../redux/RTKQuery';
import s from './header.module.css';
const Header: FC = () => {
  const [logout] = useOnLogoutMutation();
  const location = useLocation();
  
  return (
    <Layout.Header className={s.header}>
      <div className={`${s.content} container`}>
        <h1>Social Network</h1>
        {location.pathname !== '/login' ? (
          <Button onClick={() => logout(null)} danger>
            Выйти
          </Button>
        ) : null}
      </div>
    </Layout.Header>
  );
};
export default Header;
