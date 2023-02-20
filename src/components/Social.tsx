import { FC } from 'react';
import { IContacts } from '../types';
import s from '../pages/userProfile/userDate/userDate.module.css';

interface ISocial {
  socials: IContacts | undefined;
}
const social = [
  'facebook',
  'website',
  'vk',
  'twitter',
  'instagram',
  'youtube',
  'github',
  'mainLink',
];

const SocialInfo: FC<ISocial> = ({ socials }) => {
  return (
    <>
      {socials
        ? Object.values(socials).map((link, i) => {
            if (link) {
              return (
                <p key={i} className={s.item}>
                  <span>{social[i]}:</span> {link}
                </p>
              );
            } else return null;
          })
        : null}
    </>
  );
};
export default SocialInfo;
