import Datatable from "../../Components/Datatable/Datatable";
import Navbar from "../../Components/Navbar/Navbar";
import "./Employees.css";

function Employees() {
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
