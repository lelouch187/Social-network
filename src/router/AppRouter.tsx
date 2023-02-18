import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import DialogChat from "../components/dialogChat/DialogChat"
import Dialogs from "../pages/dialogs"
import UserProfile from "../pages/userProfile"



export enum RouteNames {
  PROFILE='/',
  DIALOGS='dialogs',
  DIALOG='dialogs/:id',
  NEWS='news',
  MUSIC='music',
  SETTING='settings',
  NOTFOUND='*',
}

const AppRouter:FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.PROFILE} element={<UserProfile/>} />
      <Route path={RouteNames.DIALOGS} element={<Dialogs/>} />
      <Route path={RouteNames.DIALOG} element={<DialogChat/>} />
    </Routes>
  )
}
export default AppRouter