import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import './Navbar.css';

// Définition du composant fonctionnel Navbar
function Navbar() {
    // Utilisation du hook useLocation pour accéder à l'objet de localisation courante
    const currentRoute = useLocation();
    // Le composant retourne le JSX suivant
    return (
        // Création d'un conteneur div pour la barre de navigation
        <div>
            {/* Définition de la barre de navigation avec une classe CSS pour le style */}
            <nav className="navbar-container">
                {/* Conteneur pour le logo de la navigation */}
                <div className="container-logo-nav">
                    {/* Image du logo avec le chemin d'accès, texte alternatif et classe CSS */}
                    <img src="/logo.png" alt="Logo application" className="logo-navbar" />
                </div>
                {/* Liste non ordonnée pour les éléments de navigation */}
                <ul className="navbar">
                    {/* Condition pour afficher un élément de liste basé sur le chemin d'accès courant */}
                    {currentRoute.pathname === "/" ? (
                        // Élément de liste pour le chemin d'accès racine "/"
                        <li>
                            {/* Lien de navigation avec classe CSS, dirige vers "/employees" */}
                            <NavLink className="nav-link" to="/employees">
                                {/* Icône (FontAwesome) avec classe CSS pour le style */}
                                <FontAwesomeIcon icon={faList} className="icon-navbar" />
                            </NavLink>
                        </li>
                    // Condition alternative pour le chemin "/employees"
                    ) : currentRoute.pathname === "/employees" ? (
                        // Élément de liste pour le chemin "/employees"
                        <li>
                            {/* Lien de navigation avec classe CSS, dirige vers "/" */}
                            <NavLink className="nav-link" to="/">
                                {/* Icône (FontAwesome) avec classe CSS pour le style */}
                                <FontAwesomeIcon icon={faUserPlus} className="icon-navbar" />
                            </NavLink>
                        </li>
                    // Condition finale, ne retourne rien si aucun des chemins
                    ) : null}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
