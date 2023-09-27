import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Home</h1>
            <br />
            <p className="mt-10 text-center text-sm text-gray-500">
                You are logged in!<br />
            <span className="line">
            <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    to="/admin">Go to the Admin page</Link>
            </span>
            </p>
            <br />
            <div className="flexGrow">
                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                        onClick={logout}>Sign Out</button>
            </div>
            </div>
        </section>
    )
}

export default Home
