import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const currentRoute = useLocation();
    return (
    <div>
        <nav className="navbar-container">
            <div className="container-logo-nav">
            <img src="/logo.png" alt="Logo application" className="logo-navbar" />
            </div>
            <ul className="navbar">
            {currentRoute.pathname === "/" ? (
                <li>
                    <NavLink className="nav-link" to="/employees">
                    <FontAwesomeIcon icon={faList} className="icon-navbar" />
                    </NavLink>
                </li>
                ) : currentRoute.pathname === "/employees" ? (
                <li>
                    <NavLink className="nav-link" to="/">
                    <FontAwesomeIcon icon={faUserPlus} className="icon-navbar" />
                    </NavLink>
                </li>
            ) : null}
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;
