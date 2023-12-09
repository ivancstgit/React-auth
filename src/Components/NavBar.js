import { Link } from 'react-router-dom'
import AuthContext from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useContext, React } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { faDoorClosed, faDoorOpen, faHouse, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('access_token') !== null){
      setAuthenticated(true)
    };
  }, [])
  
  const logout = async () => {
    setAuth({});
    localStorage.removeItem('access_token');
    navigate('/login');
  }
  return (
    <div className="w-full h-16 bg-black flex items-center px-10 py-2 justify-between">
        <Link className="px-10 py-1.5 rounded-md bg-white text-3x1 font-semibold font-Montserrat font-semibold leading-6 text-black shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to={"/"}
        ><FontAwesomeIcon icon={faHouse}/>  Home</Link>  
        <div className='flex justify-items-end '>

        {authenticated ? (
          <Link className="mr-4 px-10 py-1.5 rounded-md bg-indigo-600 text-3x1 font-semibold font-Montserrat font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={logout}>
          <FontAwesomeIcon icon={faDoorClosed} /> Log Out</Link>

        ) : (
          <Link className="mr-4 px-10 py-1.5 rounded-md bg-indigo-600 text-3x1 font-semibold font-Montserrat font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={"/login"}>
          <FontAwesomeIcon icon={faDoorOpen}/> Sign In</Link>
        )
      }
        <Link className="mr-4 px-10 py-1.5 rounded-md bg-indigo-600 text-3x1 font-semibold font-Montserrat font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={"/register"}>
          <FontAwesomeIcon icon={faKey} /> Sign Up</Link>
        </div>
        
        </div>
  )
}

export default NavBar
