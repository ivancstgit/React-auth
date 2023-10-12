import { useLocation, Navigate, Outlet } from "react-router-dom";
//import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    //const { auth } = useAuth();
    const location = useLocation();
    //const rolesUser = [auth?.roles];
   const access_token = localStorage.getItem('access_token');
    return (
        access_token == null ? <Navigate to="/login" state={{ from: location }} replace /> :
        <Outlet />
        /*rolesUser.find(role => allowedRoles?.includes(role))? <Outlet />: 
        auth?.access_token
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
                */
    );
}

export default RequireAuth;