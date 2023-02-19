import { Layout } from 'antd';
import { FC } from 'react';
import errorImg from '../assets/img/404.png';

const NotFound: FC = () => {
  return (
    <Layout.Content style={{minHeight:'calc(100vh - 60px)'}}>
      <img style={{width:'100%', marginTop:'20px'}}
      src={errorImg} alt="notFound" />
    </Layout.Content>
  );
};
export default NotFound;
