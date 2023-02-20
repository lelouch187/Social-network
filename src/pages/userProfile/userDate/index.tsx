import { FC } from 'react';
import { useGetProfileQuery } from '../../../redux/RTKQuery';
import ava from '../../../assets/img/ava.jpeg';

import s from './userDate.module.css';
import SocialInfo from '../../../components/Social';
import UserDateLoader from './userDateLoader';

interface ISerDateProps {
  userId: string | undefined;
}

const UserDate: FC<ISerDateProps> = ({ userId }) => {
  const { data, isFetching } = useGetProfileQuery(userId!);

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
            <span>Обо мне:</span>{' '}
            {data?.aboutMe ? data?.aboutMe : 'не заполнено'}
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
