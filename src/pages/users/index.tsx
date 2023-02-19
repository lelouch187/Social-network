import { Layout } from 'antd';
import { FC } from 'react';
import { useGetUsersQuery } from '../../redux/RTKQuery';
import User from './user';
import SkeletonUser from './user/skeletonUser';
import s from './users.module.css';

const UsersPage: FC = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useGetUsersQuery('', { refetchOnReconnect: true });
  if (users) {
    return (
      <Layout.Content className="content">
        <div className={s.wrapper}>
          {users.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </div>
      </Layout.Content>
    );
  }
  if (error) {
    return (
      <Layout.Content className="content">
        <div className={s.wrapper}>
          <h2 className={s.title}>
            Что-то пошло не так! Повторите попытку позже.
          </h2>
        </div>
      </Layout.Content>
    );
  }
  if (isLoading) {
    return (
      <Layout.Content className="content">
        <div className={s.wrapper}>
          {[...new Array(7)].map((_, i) => {
            return <SkeletonUser key={i} />;
          })}
        </div>
      </Layout.Content>
    );
  }
  return null;
};
export default UsersPage;
