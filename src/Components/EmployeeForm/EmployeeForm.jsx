import "./EmployeeForm.css";
import { NavLink  } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Select from '../Select/Select';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewEmployee } from "../../Features/dataReducer.js";
import Modal from "react-modal";
import { Select } from "lib-select-oc";

// Définit l'élément racine pour les modaux, évitant ainsi les problèmes d'accessibilité
Modal.setAppElement('#root')

// Déclaration du composant fonctionnel EmployeeForm
function EmployeeForm() {
  // Utilisation du hook useDispatch pour envoyer des actions Redux
  const dispatch = useDispatch();

  // Fonction pour générer un identifiant unique pour l'employé
  const generateUniqueId = () => {
    // Création d'un tableau pour stocker des nombres aléatoires
    const array = new Uint32Array(2);
    // Génération de nombres aléatoires sécurisés
    window.crypto.getRandomValues(array);
    // Jointure des nombres avec un tiret pour former l'ID
    return array.join("-");
  };

  // Utilisation du hook useState pour gérer l'identifiant unique
  const [uniqueId, setUniqueId] = useState(generateUniqueId());
  // Commenté : Appel initial inutile puisque déjà fait dans useState

  // Définition de l'état initial du formulaire avec useState
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
    id: "",
  });

  // Déclaration des départements disponibles pour le choix
  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];
  // Options de codes postaux disponibles pour le choix
  const zipCodeOptions = ["12345", "67890", "34567", "89012", "45678"];
  // Options d'états disponibles pour le choix
  const stateOptions = [
    "Alabama",
    "California",
    "Colorado",
    "Massachusetts",
    "Missouri",
  ];
  // Utilisation de useState pour gérer l'état d'ouverture du modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Fonction pour ouvrir le modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // Gestionnaire d'événements pour les changements de champs du formulaire
  const handleChange = (e) => {
    // Mise à jour de formData avec les nouvelles valeurs des champs
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Gestionnaire spécifique pour les changements de dates
  const handleDateChange = (date, fieldId) => {
    // Mise à jour de formData avec la nouvelle date
    setFormData({ ...formData, [fieldId]: date});
  };

  // Gestionnaire pour les changements d'état (le champ)
  const handleStateChange = (e) => {
    const { name, value } = e.target;
  
    // Mise à jour de formData avec la nouvelle valeur d'état
    setFormData({ ...formData, [name]: value });
  };
  
  // Gestionnaire pour les changements de code postal
  const handleZipCodeChange = (e) => {
    const { name, value } = e.target;
  
    // Mise à jour de formData avec le nouveau code postal
    setFormData({ ...formData, [name]: value });
  };
  
  // Gestionnaire pour les changements de département
  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;
  
    // Mise à jour de formData avec le nouveau département
    setFormData({ ...formData, [name]: value });
  };


  const saveEmployee = (e) => {
    e.preventDefault();
// Vérifiez si les champs requis sont remplis
if (
  formData.firstName === "" ||
  formData.lastName === "" ||
  formData.dateOfBirth === "" ||
  formData.startDate === "" ||
  formData.street === "" ||
  formData.city === "" ||
  formData.state === "" ||
  formData.zipCode === "" ||
  formData.department === ""
) {
  alert("Veuillez remplir tous les champs du formulaire.");
  return; // Arrêtez l'exécution de la fonction si des champs sont manquants
}

    console.log("Employee Data:", formData);
    // Préparation de l'objet formData avec l'identifiant unique et les dates formatées
    const formDataWithUniqueId = {
      // Copie des données existantes du formulaire
      ...formData,
      // Ajout de l'identifiant unique
      id: uniqueId,
      // Formatage de la date de naissance en chaîne de caractères locale
      dateOfBirth: formData.dateOfBirth.toLocaleDateString(),
      // Formatage de la date de début en chaîne de caractères locale
      startDate: formData.startDate.toLocaleDateString(),

    };
    // Affichage des données finales du formulaire dans la console pour vérification
    console.log(formDataWithUniqueId);
    // Dispatch de l'action pour ajouter un nouvel employé avec les données préparées
    dispatch(setNewEmployee(formDataWithUniqueId));
    // Ouverture du modal pour afficher le message de confirmation
    openModal();
    // Réinitialisation de l'état du formulaire à ses valeurs par défaut après l'envoi
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
      id: "",
    });
    // Génération d'un nouvel identifiant unique pour le prochain formulaire
    setUniqueId(generateUniqueId());
  };
  return (
    <div className="container-form">
      <div className="form-container">
        <div className="container-sm-form">
          <div className="title">
            <h1>HRnet</h1>
          </div>
          {/* Lien pour visualiser les employés actuels et sous-titre pour création d'un nouvel employé */}
          <div className="text">
            <NavLink to="/employees" className="link-all">
              View Current Employees
            </NavLink>
            <h2>Create Employee</h2>
          </div>
           {/* Formulaire pour la création d'un nouvel employé */}
          <form id="create-employee" className="form" onSubmit={saveEmployee}>
            <div className="form-row">
            {/* Groupe de saisie pour le prénom de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ du prénom */}
                <label htmlFor="firstName" className="label">
                  First Name
                </label>
                {/* Champ de saisie pour le prénom */}
                <input
                  type="text"
                  id="firstName" 
                  className="input"
                  value={formData.firstName} // La valeur est liée à l'état formData.firstName
                  onChange={handleChange} // La fonction handleChange met à jour l'état lors de la saisie dans le champ
                />
              </div>
              {/* Groupe de saisie pour le nom de famille de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ du nom de famille */}
                <label htmlFor="lastName" className="label">
                  Last Name
                </label>
                {/* Champ de saisie pour le nom de famille */}
                <input
                  type="text"
                  id="lastName"
                  className="input"
                  value={formData.lastName} // La valeur est liée à l'état formData.lastName, permettant une saisie contrôlée
                  onChange={handleChange} // Appelle handleChange à chaque saisie pour mettre à jour l'état
                />
              </div>
            </div>
            <div className="form-row">
            {/* Groupe de saisie pour la date de naissance de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ de date de naissance */}
                <label htmlFor="dateOfBirth" className="label">
                  Date of Birth
                </label>
                {/* Composant DatePicker pour la sélection de la date de naissance */}
                <DatePicker
                  id="dateOfBirth"
                  selected={formData.dateOfBirth} // La date sélectionnée est liée à l'état formData.dateOfBirth
                  onChange={(date) => handleDateChange(date, "dateOfBirth")} // Gère le changement de date
                  dateFormat="dd/MM/yyyy" // Format de la date affichée
                  className="input"
                />
              </div>
              {/* Groupe de saisie pour la date de début de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ de la date de début */}
                <label htmlFor="startDate" className="label">
                  Start Date
                </label>
                {/* Composant DatePicker pour sélectionner la date de début */}
                <DatePicker
                  id="startDate"
                  selected={formData.startDate} // La valeur sélectionnée est liée à l'état formData.startDate
                  onChange={(date) => handleDateChange(date, "startDate")} // Fonction appelée lors du changement de date
                  dateFormat="dd/MM/yyyy" // Format de la date affichée 
                  className="input"
                />
              </div>
            </div>
            <div className="form-row">
            {/* Groupe de saisie pour l'adresse de rue de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ de l'adresse de rue */}
                <label htmlFor="street" className="label">
                  Street
                </label>
                {/* Champ de saisie pour l'adresse de rue */}
                <input
                  id="street"
                  type="text"
                  className="input"
                  value={formData.street} // La valeur du champ est liée à l'état formData.street
                  onChange={handleChange} // La fonction handleChange est appelée à chaque modification du champ
                />
              </div>
              {/* Groupe de saisie pour la ville de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ de la ville */}
                <label htmlFor="city" className="label">
                  City
                </label>
                {/* Champ de saisie pour la ville */}
                <input
                  id="city"
                  type="text"
                  className="input"
                  value={formData.city} // La valeur est liée à l'état formData.city
                  onChange={handleChange} // Appelle handleChange à chaque modification du champ, mettant à jour l'état
                />
              </div>
            </div>
            <div className="form-row">
            {/* Groupe de saisie pour l'état de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ de sélection de l'état */}
                <label htmlFor="state" className="label">
                  State
                </label>
                {/* Composant Select pour la sélection de l'état */}
                <Select
                  value={formData.state} // La valeur sélectionnée est liée à l'état formData.state
                  onChange={handleStateChange} // La fonction handleStateChange est appelée à chaque changement de sélection
                  options={stateOptions} // Les options de sélection sont fournies par la variable stateOptions
                  placeholder={"Selectionnez ..."} // Texte affiché lorsque aucune option n'est sélectionnée
                  name="state"
                  id="state"
                />
              </div>
              {/* Groupe de saisie pour le code postal de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ de sélection du code postal */}
                <label htmlFor="zipCode" className="label">
                  Zip Code
                </label>
                {/* Composant Select pour choisir un code postal */}
                <Select
                  value={formData.zipCode} // La valeur sélectionnée est liée à l'état formData.zipCode
                  onChange={handleZipCodeChange} // La fonction handleZipCodeChange est appelée à chaque changement de sélection
                  options={zipCodeOptions} // Les options de sélection sont fournies par la variable zipCodeOptions
                  placeholder={"Selectionnez ..."} // Texte affiché lorsque aucune option n'est sélectionnée
                  name="zipCode"
                  id="zipCode"
                />
              </div>
              {/* Groupe de saisie pour le département de l'employé */}
              <div className="input-group">
              {/* Étiquette pour le champ de sélection du département */}
                <label htmlFor="department" className="label">
                  Department
                </label>
                {/* Composant Select pour la sélection du département */}
                <Select
                  value={formData.department} // La valeur sélectionnée est liée à l'état formData.department
                  onChange={handleDepartmentChange} // La fonction handleDepartmentChange est appelée à chaque changement de sélection
                  options={departments}  // Les options de sélection sont fournies par la variable departments
                  placeholder={"Selectionnez ..."} // Texte affiché lorsque aucune option n'est sélectionnée
                  name="department"
                  id="department"
                />
              </div>
            </div>
            <input
              type="hidden"
              id="uniqueId"
              value={uniqueId} // La valeur est liée à l'état uniqueId, contenant l'identifiant unique de l'employé
            />
            {/* Conteneur pour le bouton d'enregistrement */}
             {/* Bouton pour soumettre le formulaire */}
            <div className="btn-container">
            {/* Bouton pour soumettre le formulaire et pour sauvegarder les informations de l'employé */}
              <button onClick={saveEmployee} className="btn-save">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Modal pour confirmer l'ajout d'un nouvel employé */}
      <Modal
        isOpen={modalIsOpen} // Contrôle l'affichage du modal basé sur l'état modalIsOpen
        onRequestClose={closeModal} // Fonction appelée pour fermer le modal, par exemple lors d'un clic en dehors du modal ou sur un bouton de fermeture
        contentLabel="Modal de Soumission" // Label pour l'accessibilité, décrit le contenu du modal
      >
        <div className="modal-content">
        {/* Titre du modal indiquant le succès de l'opération */}
          <h2>Employée ajouté</h2>
          {/* Conteneur pour les boutons du modal */}
          <div className="btn-container">
          {/* Lien pour naviguer vers la liste des employés actuels */}
          <NavLink className="Modal_ShowButton" to="/employees">View Current Employees</NavLink>
          {/* Bouton pour fermer le modal */}
            <button className="Modal_CloseButton" onClick={closeModal}>
              Fermer
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EmployeeForm;
