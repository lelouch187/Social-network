import { Layout } from "antd"
import { FC } from "react"
import { useAppSelector } from "../../hooks/reduxHoks"
import { selectUsers } from "../../redux/slice/dialogsPageSlice"
import Dialog from "./dialog"

import s from './dialogs.module.css'

const Dialogs:FC= () => {
  const users = useAppSelector(selectUsers)
  return (
    <Layout.Content className="content">
      <div className={s.wrapper}>
        {users.map(user=><Dialog key={user.id}
        user={user} />)}
      </div>
    </Layout.Content>
  )
}
export default Dialogs