import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

import axios from '../api/axios';
import { Link, useNavigate, useLocation } from "react-router-dom";
const LOGIN_URL = '/auth';



const Login = () => {

    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [passw, setPassw] = useState('');
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, passw])


    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(LOGIN_URL,
                {
                    username: user,
                    password: passw,
                    headers: {
                        Authorization: 'Basic ' + btoa(user + ':' + passw),
                        "Content-Type": 'application/json',
                    },
                    withCredentials: true,
                });

            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, passw, roles, accessToken })
            setUser("");
            setPassw("");

            navigate(from, { replace: true });



        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <section>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <p ref={errRef} className=
                                {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h1>
                            <form className="space-y-6" onSubmit={formSubmit}>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="username">Username</label>
                                    <div className="mt-2">
                                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                            type="text"
                                            id="username"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="password">Password:</label>
                                    </div>
                                    <div className="mt-2">
                                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                            type="password" id="password" autoComplete="off" onChange={(e) =>
                                                setPassw(e.target.value)} value={passw} required />
                                    </div>
                                </div>
                                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
                            </form>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Need an Account?<br />
                                <span className="line">
                                    <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</Link>
                                </span>
                            </p>
                        </div>
                    </section>



                </div>
            </div>
        </>
    );

}
export default Login;


