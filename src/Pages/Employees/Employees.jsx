import Datatable from '../../Components/Datatable/Datatable';
import Sidebar from '../../Components/SideBar/Sidebar';
import './Employees.css';

function Employees() {
  return (
    <div>
<Sidebar />
    <div className='container-table'>
      <Datatable />
    </div>
    </div>
  )
}

export default Employees