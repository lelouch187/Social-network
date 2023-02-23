import { Layout } from 'antd';
import { FC  } from 'react';
import { useParams } from 'react-router-dom';

import UserDate from './userDate';
import PostForm from './userPosts/postForm';
import Posts from './userPosts/posts';

  interface IUserProfileProps {
    myId?: number;
  }

const UserProfile: FC<IUserProfileProps> = ({myId}) => {
  let { id } = useParams<string>()

  if (!id) {
    id=myId!.toString()
  }

  return (
    <Layout.Content className="content">
      <UserDate userId={id} />
      <PostForm />
      <Posts />
    </Layout.Content>
  );
};
export default UserProfile;
