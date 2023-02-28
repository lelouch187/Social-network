import { Button, Input } from 'antd';
import {  Dispatch, FC, SetStateAction, useState } from 'react';

import Modal from './modal/Modal';
import { useChangeAvatarMutation } from '../redux/RTKQuery';

interface ModalAvatarProps {
  setChangeAvatarModal: Dispatch<SetStateAction<boolean>>;
}

const ModalAvatar: FC<ModalAvatarProps> = ({ setChangeAvatarModal }) => {

  const [value, setValue] = useState<any>()
  const [setRes] =useChangeAvatarMutation()
  return (
    <Modal setChangeAvatarModal={setChangeAvatarModal}>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setRes(value)
      setChangeAvatarModal(false)
    }}>
    <Input  className='upload'
    onChange={(e:any)=>{
      if ( e.target.files[0]) {
        const data = new FormData();
        data.append('image',e.target.files[0]) 
        setValue(data)   
      }
    }}
    type='file' />
    <Button htmlType='submit'>Загрузить</Button>
    </form> 
    </Modal>
  );
};
export default ModalAvatar;



 