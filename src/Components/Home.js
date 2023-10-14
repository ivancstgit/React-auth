import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        localStorage.removeItem('access_token');
        navigate('/login');
    }

    return (
        <section>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Links</h1>
                <br />
                <Link className="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    to="/empresas">Empresas</Link>
                <Link className="mt-24 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    to="/licencias">Licencias</Link>
                <br />
            </div>
        </section>
    )
}

export default Home
