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
            // Nom de la colonne pour le prénom
            name: 'First Name',
            // Fonction sélecteur pour obtenir le prénom de la ligne
            selector: row => row.firstName,
            // Activation du tri pour cette colonne
            sortable: true,
            // Permet le réordonnancement de cette colonne
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
            name: 'Zip Code',
            selector: row => row.zipCode,
            sortable: true,
            reorder: true,
        },
    ];
    // Utilisation du hook useState pour gérer l'état des enregistrements affichés
    const [ records, setRecords ] = useState(employeesData);
    // Fonction pour gérer le filtrage des données basé sur la saisie utilisateur
    function handleFilter(event) {
        const newData = employeesData.filter( row => {
            // Filtre les données pour ne garder que les lignes correspondant à la recherche
            return row.firstname.toLowerCase().includes(event.target.value.toLowerCase())
        })
        // Mise à jour de l'état des enregistrements avec les données filtrées
        setRecords(newData)
    }
    // Le composant retourne le JSX suivant pour l'affichage
    return (
    // Conteneur principal pour les tables
    <div className="container-tables">
    {/* Titre de la section */}
    <h4 className='text-center title'>Current Employees</h4>
    {/* Conteneur pour le champ de recherche avec un gestionnaire d'événement pour filtrer */}
    <div className="text-end">
        <input type="text" onChange={handleFilter}/>
    </div>
    {/* Utilisation du composant DataTable pour afficher les données avec les colonnes et enregistrements définis,
        activation du header fixe, de la pagination, et ajout d'effets visuels supplémentaires */}
    <DataTable columns={columns} data={records} fixedHeader pagination striped pointerOnHover />
    {/* Utilisation du composant StyledDataTable avec la propriété sortActive activée */}
    <StyledDataTable sortActive={true} />
    </div>
    )
}

export default Datatable