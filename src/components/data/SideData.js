import React from 'react'
import * as VscIcons from "react-icons/vsc";

export const SidebarData=[
    {
        title:'Student ID',
        path:'/user',
        icon:<VscIcons.VscCreditCard/>,
        className:'nav-text user'
    },
    {
        title:'Profile',
        path:'/profile',
        icon:<VscIcons.VscPerson/>,
        className:'nav-text profile'
    },
    {
        title:'Atendance',
        path:'/atendance',
        icon:<VscIcons.VscChecklist/>,
        className:'nav-text atendance'
    },
    {
        title:'Signout',
        path:'/',
        icon:<VscIcons.VscSignOut/>,
        className:'nav-text signout'
    },
]