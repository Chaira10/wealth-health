import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import Navbar from "../../Components/Navbar/Navbar";

// Définition du composant fonctionnel AddEmploye
function AddEmploye() {
  // Le composant retourne du JSX pour afficher la page
  return (
    // Conteneur principal de la page d'ajout d'employé
    <div className="container-add-employee">
      {/* Intégration du composant Navbar en haut de la page */}
      <Navbar />
      {/* Intégration du formulaire d'ajout d'employé via le composant EmployeeForm */}
      <EmployeeForm />
    </div>
  );
}

export default AddEmploye;
