import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as VscIcons from "react-icons/vsc";
import { SidebarData } from "./data/SideData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Signout() {
    cookies.remove("id", { path: "/" });
    cookies.remove("carrer", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("first_name", { path: "/" });
    cookies.remove("last_names", { path: "/" });
}
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <VscIcons.VscThreeBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="manu-bars">
                <VscIcons.VscClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <>
                  <li key={index} className={item.className} onClick={item.className =='nav-text signout' ? ()=>Signout() : null}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </>
              );
            })}{" "}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
