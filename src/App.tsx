import { Layout } from 'antd';
import { FC } from 'react';

import AppRouter from './router/AppRouter';
import Header from './components/header';
import SideBar from './components/sideBar';


const App: FC = () => {
  return (
    <Layout className="App">
      <Header />
      <Layout className="container">
        <SideBar />
        <AppRouter />
      </Layout>
    </Layout>
  );
};

export default App;
