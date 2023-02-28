import { nanoid } from '@reduxjs/toolkit';
import { Button } from 'antd';
import { ChangeEvent,  FC,  FormEvent,  useRef,  useState } from 'react';
import { useAppDispatch } from '../../../../hooks/reduxHoks';
import { addPost } from '../../../../redux/slice/profilePageSlice';

import s from './postForm.module.css';

const PostForm: FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const post = {
      id:nanoid(),
      text:value
    }
    dispatch(addPost(post));
    setValue('');
    inputRef.current?.focus()
  };

  return (
    <div className='wrapper'>
      <form onSubmit={onSubmit}
      className={s.form}>
        <input ref={inputRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
          placeholder="Что у вас нового?"
          type="textarea"
        />
        <Button htmlType='button'
        onClick={onSubmit} className={s.button} type="primary">
          Опубликовать
        </Button>
      </form>
    </div>
  );
};
export default PostForm;
