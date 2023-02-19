import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import DialogChat from '../components/dialogChat/DialogChat';
import Dialogs from '../pages/dialogs';
import NotFound from '../pages/NotFound';
import UserProfile from '../pages/userProfile';
import UsersPage from '../pages/users';

export enum RouteNames {
  PROFILE = '/',
  DIALOGS = 'dialogs',
  DIALOG = 'dialogs/:id',
  USERS = 'users',
  NEWS = 'news',
  MUSIC = 'music',
  SETTING = 'settings',
  NOTFOUND = '*',
}

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.PROFILE} element={<UserProfile />} />
      <Route path={RouteNames.DIALOGS} element={<Dialogs />} />
      <Route path={RouteNames.DIALOG} element={<DialogChat />} />
      <Route path={RouteNames.USERS} element={<UsersPage />} />
      <Route path={RouteNames.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
