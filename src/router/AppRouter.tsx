import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DialogChat from '../components/dialogChat/DialogChat';
import Dialogs from '../pages/dialogs';
import Login from '../pages/login';
import NotFound from '../pages/NotFound';
import UserProfile from '../pages/userProfile';
import UsersPage from '../pages/users';
import { IAuth } from '../types';

export enum PrivateRoutes {
  MYPROFILE = '/',
  DIALOGS = 'dialogs',
  DIALOG = 'dialogs/:id',
  USERS = 'users',
  USERSPROFILE = 'users/:id',
  NEWS = 'news',
  MUSIC = 'music',
  SETTING = 'settings',
  NOTFOUND = '*',
}
export enum PublicRoutes {
  LOGIN= 'login'
}
  interface AppRouterState {
    isAuth: IAuth | undefined
  }

const AppRouter: FC<AppRouterState> = ({isAuth}) => {


  if (isAuth?.resultCode === 0) {
    return (
      <Routes>
        <Route path={PrivateRoutes.MYPROFILE} element={<UserProfile myId={isAuth.data.id} />} />
        <Route path={`users/${isAuth.data.id}`} element={<Navigate to='/' replace/>}/>
        <Route path={PublicRoutes.LOGIN} element={<Navigate to={PrivateRoutes.MYPROFILE} replace/>}/>
        <Route path={PrivateRoutes.USERSPROFILE} element={<UserProfile />} />
        <Route path={PrivateRoutes.DIALOGS} element={<Dialogs />} />
        <Route path={PrivateRoutes.DIALOG} element={<DialogChat />} />
        <Route path={PrivateRoutes.USERS} element={<UsersPage />} />
        <Route path={PrivateRoutes.NOTFOUND} element={<NotFound />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path='*' element={<Navigate to={PublicRoutes.LOGIN} replace/>}/>
      </Routes>
    )
  }

};
export default AppRouter;
