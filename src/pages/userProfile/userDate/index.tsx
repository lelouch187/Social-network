import { ChangeEvent, FC, useState } from 'react';
import {
  useChangeMyStatusMutation,
  useGetProfileQuery,
  useGetStatusQuery,
} from '../../../redux/RTKQuery';
import ava from '../../../assets/img/ava.jpeg';

import s from './userDate.module.css';
import SocialInfo from '../../../components/Social';
import UserDateLoader from './userDateLoader';

interface ISerDateProps {
  userId: string | number;
  myId: number;
}

const UserDate: FC<ISerDateProps> = ({ userId, myId }) => {
  const [saveMyStatus] = useChangeMyStatusMutation();
  const { data, isFetching } = useGetProfileQuery(userId);
  const { data: userStatus, refetch } = useGetStatusQuery(userId);
  const [visibleInput, setVisibleInput] = useState<boolean>(false);
  const [value, setValue] = useState<string>(userStatus || '');

  const changeMyStatus = async () => {
    await saveMyStatus(value)
      .unwrap()
      .then((res): any =>
        res.resultCode === 0
          ? refetch()
          : alert('Произошла ошибка'),
      );
    setVisibleInput(false);
  };

  if (data && !isFetching) {
    return (
      <div className={s.wrapper}>
        <div className={s.wrapperImg}>
          <img
            src={data?.photos.large ? data.photos.large : ava}
            alt="аватар"
          />
        </div>
        <div className={s.userInfo}>
          <h3 className={s.title}>{data?.fullName}</h3>
          <p className={s.item}>
            <span>Статус:</span>{' '}
            {visibleInput ? (
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
                onFocus={(e: ChangeEvent<HTMLInputElement>) => {
                  e.target.select();
                  setValue(userStatus || '...Загрузка');
                }}
                autoFocus
                onBlur={changeMyStatus}
                value={value}
              />
            ) : (
              <span
                style={{ fontWeight: '300' }}
                onDoubleClick={() => {
                  if (Number(userId) === myId) setVisibleInput(true);
                }}>
                {userStatus ? userStatus : 'не заполнено'}
              </span>
            )}
          </p>
          <p className={s.item}>
            <span>Обо мне:</span> {data.aboutMe ? data.aboutMe : 'не заполнено'}
          </p>
          <div>
            <h3 className={s.title}>Социальные сети:</h3>
            <SocialInfo socials={data?.contacts} />
          </div>
          <div>
            <p className={s.item}>
              <span>В поисках работы:</span>{' '}
              {data?.lookingForAJob ? 'да' : 'нет'}
            </p>
            <p className={s.item}>
              <span>Описание желаемой работы:</span>{' '}
              {data?.lookingForAJobDescription
                ? data?.lookingForAJobDescription
                : 'не заполнено'}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={s.wrapper}>
      <UserDateLoader />
    </div>
  );
};
export default UserDate;
