import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmploye from "./Pages/AddEmployee/AddEmploye";
import Employees from "./Pages/Employees/Employees";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddEmploye />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
