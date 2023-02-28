import { Button, Form, Input, Radio } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';
import { IProfileUser } from '../types';

import Modal from './modal/Modal';

interface ModalProfileProps {
  setChangeAvatarModal: Dispatch<SetStateAction<boolean>>;
  myProfile: IProfileUser;
}

const ModalProfile: FC<ModalProfileProps> = ({ setChangeAvatarModal, myProfile }) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Modal setChangeAvatarModal={setChangeAvatarModal}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off">
        <Form.Item name='aboutMe' label="Обо мне">
          <Input />
        </Form.Item>
       {Object.keys(myProfile.contacts).map((contact:string)=>{
            return   <Form.Item key={contact}
            name={contact} label={contact}>
               <Input />
             </Form.Item>
       })}
       <Form.Item name='lookigForAJob' label="Ищу работу?">
      <Radio.Group>
        <Radio value={true}>Да</Radio>
        <Radio value={false}>Нет</Radio>
      </Radio.Group>
    </Form.Item>
        <Form.Item name="lookigForAJobDescription" label="Описание желаемой работы">
          <Input />
        </Form.Item>
        <Form.Item name="fullName" label="Имя">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
        type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalProfile;
