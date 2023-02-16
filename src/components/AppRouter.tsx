import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { privateRoutes } from "../router"

const AppRouter:FC = () => {
  return (
    <Routes>
        {privateRoutes.map(route=>{
            return <Route element={<route.element/>}
            path={route.path}/>
        })}
    </Routes>
  )
}
export default AppRouter