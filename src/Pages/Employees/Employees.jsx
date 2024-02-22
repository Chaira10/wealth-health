import Datatable from "../../Components/Datatable/Datatable";
import Navbar from "../../Components/Navbar/Navbar";
import "./Employees.css";

// Définition du composant fonctionnel Employees pour afficher la liste des employés
function Employees() {
  // Rendu des composants Navbar et Datatable dans un conteneur de page
  return (
    <div className="container-page-employees">
      <Navbar />
      <div className="container-table">
        <Datatable />
      </div>
    </div>
  );
}

export default Employees;
