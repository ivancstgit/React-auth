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
import NavBar from './Components/NavBar';
import Empresa from './Components/Cruds/Empresas/Empresa';
import EditEmpresa from './Components/Cruds/Empresas/EditEmpresa';
import AddEmpresa from './Components/Cruds/Empresas/AddEmpresa';
import Licencia from './Components/Cruds/Licencias/Licencia';
import AddLicencia from './Components/Cruds/Licencias/AddLicencia';
import EditLicencia from './Components/Cruds/Licencias/EditLicencia';
/*
const ROLES = {
  'User': 'user',
  'Admin': 'admin'
}*/


function App() {

  return (
    <div className='app'>
      <NavBar />

      <Routes>
        <Route path="/" element={<Layout />}>

          {/* public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />


          {/* we want to protect these routes */}
          {/*separar en route si necesito diferentes pemirsos segun roles*/}
          <Route element={<RequireAuth /*allowedRoles={[ROLES.User, ROLES.Admin]}*/ />}>
            <Route path="/" element={<Home />} />
            <Route path="/empresas" element={<LinkPageEmpresas />} />
            <Route path="/empresas/:id" element={<Empresa />} />
            <Route path="/empresas/edit/:id" element={<EditEmpresa />} />
            <Route path="/empresas/add" element={<AddEmpresa />} />
            
            <Route path="/licencias" element={<LinkPageLicencias />} />
            <Route path="/licencias/:id" element={<Licencia />} />
            <Route path="/licencias/add" element={<AddLicencia />} />
            <Route path="/licencias/edit/:id" element={<EditLicencia />} />
          </Route>


          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
