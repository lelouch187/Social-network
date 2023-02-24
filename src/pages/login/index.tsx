import { FC } from 'react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { useOnLoginMutation } from '../../redux/RTKQuery';
import { AuthLogin } from '../../types';



const Login: FC = () => {
  const [onAuth] = useOnLoginMutation()

  const onFinish =async (values: AuthLogin) => {
   await onAuth(values).unwrap().then((res)=>{
    if (res.resultCode === 1) alert('Введены неверные данные!')
   })
  };
  
  return (
    <Layout.Content>
        <div className='wrapper content'>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, margin:'20% auto',fontWeight:'bold' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш логин!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}>
        <Input.Password />
      </Form.Item>
      
      <Form.Item name="rememberMe" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
    </div>
    </Layout.Content>
  );
};
export default Login;
