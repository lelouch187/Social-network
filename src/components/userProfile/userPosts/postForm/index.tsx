import { Button } from 'antd';
import { FC } from 'react';

import s from './postForm.module.css'

const PostForm: FC = () => {
  return (
    <div className={s.wrapper}>
    <form className={s.form}>
      <input placeholder='Что у вас нового?'
      type="textarea" />
      <Button className={s.button}
      type="primary">Опубликовать</Button>
    </form>
    </div>
  );
};
export default PostForm;
