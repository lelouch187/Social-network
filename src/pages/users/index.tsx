import { Layout, Pagination } from 'antd';
import { FC, MouseEvent, useEffect, useState } from 'react';

import {
  useFollowUserMutation,
  useGetUsersQuery,
  useUnFollowUserMutation,
} from '../../redux/RTKQuery';
import User from './user';
import SkeletonUser from './user/skeletonUser';
import s from './users.module.css';

const UsersPage: FC = () => {
  const [page, setPage] = useState<number>(
    Number(localStorage.getItem('page')) || 1,
  );
  const [userInPage, setUserInPage] = useState<number>(10);
  const { data, error, isLoading, isFetching } = useGetUsersQuery(
    { page, userInPage },
    { refetchOnReconnect: true },
  );
  const [follow] = useFollowUserMutation();
  const [unFollow] = useUnFollowUserMutation();
  const onFollow = async (e: MouseEvent<HTMLElement>, userId: number) => {
    e.stopPropagation();
    await unFollow(userId);
  };
  const onUnFollow = async (e: MouseEvent<HTMLElement>, userId: number) => {
    e.stopPropagation();
    await follow(userId);
  };

  useEffect(() => {
    localStorage.setItem('page', page.toString());
  }, [page]);

  if (data?.items && !isFetching) {
    return (
      <Layout.Content>
        <Pagination pageSizeOptions = {[5,10,15]}
        defaultPageSize={userInPage}
          style={{ paddingTop: '15px', textAlign: 'center' }}
          onShowSizeChange={(_, userInPage: number) => {
            setUserInPage(userInPage);
          }}
          onChange={(page: number) => setPage(page)}
          current={page}
          total={Math.ceil(data.totalCount / userInPage)}
        />
        <div className={`${s.wrapper} content`}>
          {data.items.map((user) => {
            return (
              <User
                onUnFollow={onUnFollow}
                onFollow={onFollow}
                key={user.id}
                user={user}
              />
            );
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
  if (isLoading || isFetching) {
    return (
      <Layout.Content style={{ marginTop: '50px' }} className="content">
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
