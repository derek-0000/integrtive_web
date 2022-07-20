import React from 'react'
import * as VscIcons from "react-icons/vsc";

export const SidebarData=[
    {
        title:'Student ID',
        path:'/',
        icon:<VscIcons.VscCreditCard/>,
        className:'nav-text'
    },
    {
        title:'Profile',
        path:'/profile',
        icon:<VscIcons.VscPerson/>,
        className:'nav-text'
    },
    {
        title:'Atendance',
        path:'/atendance',
        icon:<VscIcons.VscChecklist/>,
        className:'nav-text'
    }
    // {
    //     title:'Signout',
    //     path:'/',
    //     icon:<VscIcons.VscSignOut/>,
    //     className:'nav-text'
    // },
]