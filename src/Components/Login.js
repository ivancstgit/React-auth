import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthProvider";


import axios from '../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [passw, setPassw] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


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
        setAuth({user, passw, accessToken})
        setUser("");
        setPassw("");
        setSuccess(true);
    

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
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (

                <section>
                    <p ref={errRef} className=
                        {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={formSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" ref={userRef} autoComplete="off" onChange={(e) =>
                            setUser(e.target.value)} value={user} required />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" autoComplete="off" onChange={(e) =>
                            setPassw(e.target.value)} value={passw} required />

                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>

                </section>
            )}
        </>
    );

}
export default Login;