import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        {/* Configuration des routes avec React Router */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />
          {/* Route pour la page de connexion */}
          <Route path="/login" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
