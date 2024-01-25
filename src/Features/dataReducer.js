import { createSlice } from '@reduxjs/toolkit';
// Définition du slice de données (dataSlice)
export const dataSlice = createSlice({
    // Nom du slice
    name: 'data',
    // État initial du slice
    initialState: {
        employees: [],
    },
    // Reducers qui définissent comment l'état peut être modifié
    reducers: {
        setNewEmployee: (state, action) => {
            // Utilise state.employees au lieu de state
            state.employees.push(action.payload);
        },
    }
})
// Exportation des actions générées par createSlice
export const { setNewEmployee } = dataSlice.actions;
// Exportation du réducteur généré par createSlice
export default dataSlice.reducer;