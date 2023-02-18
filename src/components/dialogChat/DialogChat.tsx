import { LeftOutlined, SendOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHoks';
import { selectDialog } from '../../redux/slice/dialogsPageSlice';
import s from './dialogChat.module.css';

const DialogChat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useAppSelector(selectDialog(id as string));
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <button className={s.button} onClick={() => navigate(-1)}>
          <LeftOutlined />
          назад
        </button>
        <h3>
          {user?.name} {user?.fullName}
        </h3>
        <div className={s.imgWrapper}>
          <img src={user?.avatar} alt="аватар" />
        </div>
      </div>
      <div className={s.dialogContent}></div>
      <form className={s.dialogForm}>
        <input type="text" />
        <button>
          <SendOutlined />
        </button>
      </form>
    </div>
  );
};
export default DialogChat;
