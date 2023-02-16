import { Layout } from 'antd';
import { FC } from 'react';

import UserDate from './userDate';
import PostForm from './userPosts/postForm';
import Posts from './userPosts/posts';

const UserProfile: FC = () => {
  return (
    <Layout.Content className="content">
      <UserDate />
      <PostForm />
      <Posts />
    </Layout.Content>
  );
};
export default UserProfile;
