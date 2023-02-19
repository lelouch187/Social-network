import { Layout, Pagination } from 'antd';
import { FC, useState } from 'react';

import { useGetUsersQuery } from '../../redux/RTKQuery';
import User from './user';
import SkeletonUser from './user/skeletonUser';
import s from './users.module.css';

const UsersPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [userInPage, setUserInPage] = useState<number>(10);
  const { data, error, isLoading } = useGetUsersQuery(
    { page, userInPage },
    { refetchOnReconnect: true },
  );

  if (data?.items) {
    return (
      <Layout.Content>
        <Pagination style={{paddingTop:'15px', textAlign:'center'}}
          onShowSizeChange={(page: number, userInPage: number) => {
            setUserInPage(userInPage);
          }}
          onChange={(page: number) => setPage(page)}
          current={page}
          total={Math.ceil(data.totalCount / userInPage)}
        />
        <div 
        className={`${s.wrapper} content`}>
          {data.items.map((user) => {
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
