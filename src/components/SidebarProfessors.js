import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as VscIcons from "react-icons/vsc";
import './SidebarProfessors.css'
import { ProfessorsSidebarData } from './data/SideProfessorsData';
import { IconContext } from 'react-icons'

function SidebarProfessors() {
    const[sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color:'#ffffff'}}>
        <div className='navbar'>
            <Link to="#" className='menu-bars'>
                <VscIcons.VscThreeBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to = '#' className='manu-bars'>
                        <VscIcons.VscClose/>
                    </Link>
                </li>  
                {ProfessorsSidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })} ;
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default SidebarProfessors