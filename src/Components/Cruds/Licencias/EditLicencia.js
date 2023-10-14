import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import { faBackward, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EditLicencia() {
  const [licencia, setLicencia] = useState();
  const { id } = useParams();
  const [habilitado, setHabilitado] = useState(true);
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa_id, setEmpresa_id] = useState(1);
  const [codigo_usuario, setCodigo] = useState("");

  
  const navigate = useNavigate();
    
  
  useEffect(() => {
    getLicencia();
  });



  const getLicencia = async () => {
    const token = localStorage.getItem('access_token');
    const respuesta = await axios.get(`lic/licencia/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        "Content-Type": 'application/json',
      },
      withCredentials: true,
    });

    setLicencia(respuesta.data?.licencia);
    setHabilitado(respuesta.data?.licencia.habilitado);
    setEmail(respuesta.data?.licencia.email);
    setEmpresa_id(respuesta.data?.licencia.empresa_id);
    setTelefono(respuesta.data?.licencia.telefono);
    setCodigo(respuesta.data?.licencia.codigo_usuario);
  }


  const body = {
    email: email,
      telefono: telefono,
      empresa_id: empresa_id,
      habilitado: habilitado,
      codigo_usuario: codigo_usuario
  }

  const EditLicencia = async () => {
        
    const token = localStorage.getItem('access_token');
    await axios.put(`lic/licencia/${id}`, body, {
        headers: {
            Authorization: 'Bearer ' + token,
            "Content-Type": 'application/json',
            
        },
        withCredentials: true,
    });
    navigate("/licencias")
}
  
  const handleChange = (event) => {
    setHabilitado(event.target.value === "habilitado" ? true : false);
 };


  return (
    <>

      {licencia && (
        <div className="h-full w-full flex flex-col mt-8 justify-center items-center">
          <h1 className='font-bold text-3xl'>Licencia {licencia.id}</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                ID
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {licencia.id}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" 
              defaultValue={licencia.email} onChange={(e) => setEmail(e.target.value)}>
                
              </input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Telefono
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              defaultValue={licencia.telefono} onChange={(e) => setTelefono(e.target.value)}>
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
              defaultValue={licencia.empresa_id} onChange={(e) => setEmpresa_id(e.target.value)}>
                
              </input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Codigo Usuario
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              defaultValue={licencia.codigo_usuario} onChange={(e) => setCodigo(e.target.value)}>
              </input>
            </div>
            <div className="ml-16">
            <Link className="bg-teal-600 text-white px-6 py-2 rounded-lg" to={"/licencias"}>
                                Back <FontAwesomeIcon icon={faBackward} />
                            </Link>
                            <Link className="ml-2 bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={EditLicencia}> 
                                Edit <FontAwesomeIcon icon={faPenToSquare} />
                            </Link>
            </div>
            
          </div>
          
        </div>
      )}

    </>
  )
}

export default EditLicencia
