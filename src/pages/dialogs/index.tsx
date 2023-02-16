import { Layout } from "antd"
import { FC } from "react"
import Dialog from "./dialog"

import s from './dialogs.module.css'

const Dialogs:FC= () => {
  return (
    <Layout.Content className="content">
      <div className={s.wrapper}>
        <Dialog />
        <Dialog />
        <Dialog />
      </div>
    </Layout.Content>
  )
}
export default Dialogs