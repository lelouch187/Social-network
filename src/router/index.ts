import { ComponentType } from "react";
import Dialogs from "../pages/dialogs";
import UserProfile from "../pages/userProfile";

export enum RouteNames {
    PROFILE='/',
    DIALOGS='dialogs',
    NEWS='news',
    MUSIC='music',
    SETTING='settings',
    NOTFOUND='*',
}

interface IRoute {
    element: ComponentType;
    path:RouteNames;
}

export const privateRoutes:IRoute[] = [
    {element:UserProfile,path:RouteNames.PROFILE},
    {element:Dialogs,path:RouteNames.DIALOGS},
]