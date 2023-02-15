import { FC } from 'react';
import { useAppSelector } from '../../../../hooks/reduxHoks';
import { selectPosts } from '../../../../redux/slice/profilePageSlice';

import Post from './post';

import s from './posts.module.css';

const Posts: FC = () => {
  const posts = useAppSelector(selectPosts);
  return (
    <div className={s.posts}>
      {posts.length
        ? posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        : null}
    </div>
  );
};
export default Posts;
