import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus,faList}  from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar() {
    const currentRoute = useLocation();


  return (
<div className="sidebar open">
      <ul className="nav-side">
        {currentRoute.pathname === '/' ? (
          <li>
            <NavLink className="main-nav-logo" to="/employees">
              <FontAwesomeIcon icon={faList} className="icon-sidebar" />
            </NavLink>
          </li>
        ) : currentRoute.pathname === '/employees' ? (
          <li>
            <NavLink className="main-nav-logo" to="/">
              <FontAwesomeIcon icon={faUserPlus} className="icon-sidebar" />
            </NavLink>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Sidebar