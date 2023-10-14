import React from 'react'
import { useState } from 'react'
import { Link} from 'react-router-dom';
import axios from '../../../api/axios';
import { faBackward, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function AddLicencia() {
  const [habilitado, setHabilitado] = useState(true);
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa_id, setEmpresa_id] = useState(1);
  const [codigo_usuario, setCodigo] = useState("");

  const navigate = useNavigate();


  const body = {
    email: email,
      telefono: telefono,
      empresa_id: empresa_id,
      habilitado: habilitado,
      codigo_usuario: codigo_usuario
  }



  const licenciaAdd = async () => {
    const token = localStorage.getItem('access_token');
    console.log(body)
    await axios.post("lic/licencia", body, {
      headers: {
        Authorization: 'Bearer ' + token,
        "Content-Type": 'application/json',
      },
      withCredentials: true,
    });

    navigate("/licencias");
  }

  const handleChange = (event) => {
    setHabilitado(event.target.value === "habilitado" ? true : false);
  };


  return (
    <>
        <div className="h-full w-full flex flex-col mt-8 justify-center items-center">
          <h1 className='font-bold text-3xl'>Añadir Licencia</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Telefono
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)}>
              </input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Habilitado
              </label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                value={habilitado ? "habilitado" : "deshabilitado"} onChange={handleChange}>
                <option value="habilitado">Habilitado</option>
                <option value="deshabilitado">Deshabilitado</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Empresa ID
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Empresa Id" onChange={(e) => setEmpresa_id(parseInt(e.target.value))}>
              </input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Codigo Usuario
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Codigo Usuario" onChange={(e) => setCodigo(e.target.value)}>
              </input>
            </div>
            <div className="ml-16">
              <Link className="bg-teal-600 text-white px-6 py-2 rounded-lg" to={"/licencias"}>
                Back <FontAwesomeIcon icon={faBackward} />
              </Link>
              <Link className="ml-2 bg-green-600 text-white px-6 py-2 rounded-lg" onClick={licenciaAdd}>
                Añadir <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>

          </div>

        </div>
    </>
  )
}

export default AddLicencia
