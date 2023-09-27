import './App.css';
import Login from './Components/Login';
import Register from './Components/Register'
import { Route, Routes } from 'react-router-dom';
import Missing from "./Components/Missing";
import Layout from "./Components/Layout";
import LinkPage from "./Components/LinkPage";
import RequireAuth from "./Components/RequireAuth";
import Unauthorized from "./Components/Unauthorized";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
const ROLES = {
  'User': 'user',
  'Admin': 'admin'
}


function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          {/* catch all */}
         <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  );
}

export default App;
