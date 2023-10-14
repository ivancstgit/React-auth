import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Licencia() {
  const [licencia, setLicencia] = useState();
  const { id } = useParams();

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
  }


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
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {licencia.email}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Telefono
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {licencia.telefono}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Habilitado
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {licencia.habilitado ? 'True' : 'False'}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Empresa ID
              </label>
              <Link className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              to={`/empresas/${licencia.empresa_id}`}>
                {licencia.empresa_id}
              </Link>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Codigo Usuario
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {licencia.codigo_usuario}
              </p>
            </div>
            <div className="ml-16">
              <Link className="bg-teal-600 text-white px-6 py-2 rounded-lg" to = {"/licencias"}>
                Back <FontAwesomeIcon icon={faBackward} />
              </Link>
            </div>
            
          </div>
          
        </div>
      )}

    </>
  )
}

export default Licencia
