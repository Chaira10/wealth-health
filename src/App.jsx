import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmploye from "./Pages/AddEmployee/AddEmploye";
import Employees from "./Pages/Employees/Employees";

// Définition du composant App, le composant racine de l'application
function App() {
  return (
    <div>
      {/* Utilisation de BrowserRouter pour encapsuler le système de routage */}
      <BrowserRouter>
        {/* Routes définit le mappage entre les chemins d'URL et les composants correspondants */}
        <Routes>
          {/* Route pour la page d'accueil ("/") qui affiche le composant AddEmploye */}
          <Route path="/" element={<AddEmploye />} />
          {/* Route pour la page "/employees" qui affiche le composant Employees */}
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
