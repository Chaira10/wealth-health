import  './Datatable.css';
import  DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledDataTable = styled(DataTable)`
    display: none;
`;

function Datatable() {
    const employeesData = useSelector(state => state.data.employees);
    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Start Date',
            selector: row => row.startDate,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Date of Birth',
            selector: row => row.dateOfBirth,
            sortable: true,
            reorder: true,
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true,
            reorder: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
            reorder: true,
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
            reorder: true,
        },
        {
            name: 'State',
            selector: row => row.zipCode,
            sortable: true,
            reorder: true,
        },
    ];

    const [ records, setRecords ] = useState(employeesData);

    function handleFilter(event) {
        const newData = employeesData.filter( row => {
            return row.firstname.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    return (
    <div className="container-tables">
    <h4 className='text-center title'>Current Employees</h4>
    <div className="text-end">
        <input type="text" onChange={handleFilter}/>
    </div>
    <DataTable columns={columns} data={records} fixedHeader pagination striped pointerOnHover />
    <StyledDataTable sortActive={true} />
    </div>
    )
}

export default Datatable