import React from 'react'
import * as VscIcons from "react-icons/vsc";

export const ProfessorsSidebarData=[
    {
        title:'Profile',
        path:'/professor-profile',
        icon:<VscIcons.VscPerson/>,
        className:'nav-text'
    },
    {
        title:'Groups',
        path:'/professor-main',
        icon:<VscIcons.VscLibrary/>,
        className:'nav-text'
    },
    {
        title:'Signout',
        path:'/',
        icon:<VscIcons.VscSignOut/>,
        className:'nav-text signout'
    },
]