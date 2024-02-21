import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import Navbar from "../../Components/Navbar/Navbar";

function AddEmploye() {
  return (
    <div className="container-add-employee">
      <Navbar />
      <EmployeeForm />
    </div>
  );
}

export default AddEmploye;
