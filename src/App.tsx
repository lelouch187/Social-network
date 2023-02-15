import { Layout } from 'antd';
import { FC } from 'react';
import Header from './components/header';
import SideBar from './components/sideBar';
import UserProfile from './components/userProfile';

const App: FC = () => {
  return (
    <Layout className="App">
      <Header />
      <Layout className='container'>
        <SideBar />
        <UserProfile />
      </Layout>
    </Layout>
  );
};

export default App;
