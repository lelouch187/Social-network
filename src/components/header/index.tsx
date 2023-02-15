import { Layout } from 'antd';
import { FC } from 'react';
import s from './header.module.css'
const Header:FC=()=> {
  return (
    <Layout.Header
     className={s.header}>
      <h1>Social Network</h1>
      </Layout.Header>
  )
}
export default Header