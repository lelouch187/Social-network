import { CloseOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { useAppDispatch } from '../../../../../hooks/reduxHoks';
import { removePost } from '../../../../../redux/slice/profilePageSlice';
import { IPost } from '../../../../../types';

import s from './post.module.css';

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img
          src="https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-19.jpg"
          alt="аватар"
        />
      </div>
      <p className={s.text}>{post.text}</p>
      <CloseOutlined
        onClick={() => dispatch(removePost(post.id))}
        className={s.icon}
      />
    </div>
  );
};
export default Post;
