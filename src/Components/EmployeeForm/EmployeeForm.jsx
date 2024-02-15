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

function EmployeeForm() {
  const dispatch = useDispatch();

  const generateUniqueId = () => {
    const array = new Uint32Array(2);
    window.crypto.getRandomValues(array);
    return array.join("-");
  };

  const [uniqueId, setUniqueId] = useState(generateUniqueId());
  // setUniqueId(generateUniqueId());

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

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];
  const zipCodeOptions = ["12345", "67890", "34567", "89012", "45678"];
  // faudra stocker ou générer son abréviation
  const stateOptions = [
    "Alabama",
    "California",
    "Colorado",
    "Massachusetts",
    "Missouri",
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDateChange = (date, fieldId) => {
    setFormData({ ...formData, [fieldId]: date });
  };

  const handleStateChange = (e) => {
    const { name, value } = e.target;
  
    // Mettre à jour formData avec la nouvelle valeur
    setFormData({ ...formData, [name]: value });
    // setFormData({ ...formData,  [e.target.id]: e.target.value });
  };
  
  const handleZipCodeChange = (e) => {
    // console.log(selectedZipCode);
    const { name, value } = e.target;
  
    // Mettre à jour formData avec la nouvelle valeur
    setFormData({ ...formData, [name]: value });
  };
  
  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;
  
    // Mettre à jour formData avec la nouvelle valeur
    setFormData({ ...formData, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    console.log("Employee Data:", formData);
    // dispatch(setNewEmployee(formData));
    const formDataWithUniqueId = {
      ...formData,
      id: uniqueId,
    };
    console.log(formDataWithUniqueId);
    dispatch(setNewEmployee(formDataWithUniqueId));
    openModal();
    // Afficher le message de confirmation
    // setShowConfirmation(true);
    // Réinitialiser le formulaire après le traitement
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
    });
    // Réinitialiser uniqueId
    setUniqueId(generateUniqueId());
  };
  return (
    <div className="container-form">
      <div className="form-container">
        <div className="container-sm-form">
          <div className="title">
            <h1>HRnet</h1>
          </div>
          <div className="text">
            <NavLink to="/employees" className="link-all">
              View Current Employees
            </NavLink>
            <h2>Create Employee</h2>
          </div>
          <form id="create-employee" className="form" onSubmit={saveEmployee}>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="first-name" className="label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="input"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="last-name" className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="input"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="date-of-birth" className="label">
                  Date of Birth
                </label>
                <DatePicker
                  id="dateOfBirth"
                  selected={formData.dateOfBirth}
                  onChange={(date) => handleDateChange(date, "dateOfBirth")}
                  dateFormat="dd/MM/yyyy H:m:s"
                  className="input"
                />
              </div>

              <div className="input-group">
                <label htmlFor="start-date" className="label">
                  Start Date
                </label>
                <DatePicker
                  id="startDate"
                  selected={formData.startDate}
                  onChange={(date) => handleDateChange(date, "startDate")}
                  dateFormat="dd/MM/yyyy H:m:s"
                  className="input"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="street" className="label">
                  Street
                </label>
                <input
                  id="street"
                  type="text"
                  className="input"
                  value={formData.street}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="city" className="label">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className="input"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="state" className="label">
                  State
                </label>
                <Select
                  value={formData.state}
                  onChange={handleStateChange}
                  options={stateOptions}
                  placeholder={"Selectionnez ..."}
                  name="state"
                  id="state"
                />
              </div>

              <div className="input-group">
                <label htmlFor="zipCode" className="label">
                  Zip Code
                </label>
                <Select
                  value={formData.zipCode}
                  onChange={handleZipCodeChange}
                  options={zipCodeOptions}
                  placeholder={"Selectionnez ..."}
                  name="zipCode"
                  id="zipCode"
                />
              </div>

              <div className="input-group">
                <label htmlFor="department" className="label">
                  Department
                </label>
                <Select
                  value={formData.department}
                  onChange={handleDepartmentChange}
                  options={departments}
                  placeholder={"Selectionnez ..."}
                  name="department"
                  id="department"
                />
              </div>
            </div>
            <input
              type="hidden"
              id="uniqueId"
              value={uniqueId}
              onChange={handleChange}
            />
            <div className="btn-container">
              <button onClick={saveEmployee} className="btn-save">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal de Soumission"
      >
        <div className="modal-content">
          <h2>Employée ajouté</h2>
          <div className="btn-container">
          <NavLink className="Modal_ShowButton" to="/employees">View Current Employees</NavLink>
            {/* <Link to="/employees" className="Modal_ShowButton">
              View Current Employees
            </Link> */}
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
