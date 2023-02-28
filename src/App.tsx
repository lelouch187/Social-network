import { Layout } from 'antd';
import { FC } from 'react';

import AppRouter from './router/AppRouter';
import Header from './components/header';
import SideBar from './components/sideBar';
import { useIsAuthQuery } from './redux/RTKQuery';


const App: FC = () => {
  const {data:isAuth, isLoading} = useIsAuthQuery(null)
  return (
    <Layout className="App">
      <Header />
      <Layout className="container">
        <SideBar />
        {!isLoading&&<AppRouter isAuth={isAuth}  />}
      </Layout>
    </Layout>
  );
};

export default App;
