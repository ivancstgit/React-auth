import './App.css';
import Login from './Components/Login';
import Register from './Components/Register'
import { Route, Routes } from 'react-router-dom';
import Missing from "./Components/Missing";
import Layout from "./Components/Layout";
import RequireAuth from "./Components/RequireAuth";
import Unauthorized from "./Components/Unauthorized";
import Home from "./Components/Home";
import LinkPageEmpresas from "./Components/Cruds/Empresas/LinkPageEmpresas";
import LinkPageLicencias from "./Components/Cruds/Licencias/LinkPageLicencias";
/*
const ROLES = {
  'User': 'user',
  'Admin': 'admin'
}*/


function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          
          {/* we want to protect these routes */}
          {/*separar en route si necesito diferentes pemirsos segun roles*/}
          <Route element={<RequireAuth /*allowedRoles={[ROLES.User, ROLES.Admin]}*/ />}>
            <Route path="/" element={<Home />} />
            <Route path="empresas" element={<LinkPageEmpresas />} />
            <Route path="licencias" element={<LinkPageLicencias />} />

          </Route>


          {/* catch all */}
         <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  );
}

export default App;
