import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../../Loading';

function Empresa() {
  const [empresa, setEmpresa] = useState();
  const { id } = useParams();

  useEffect(() => {
    getEmpresa();
  });

  const getEmpresa = async () => {
    const token = localStorage.getItem('access_token');
    const respuesta = await axios.get(`api/empresa/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        "Content-Type": 'application/json',
      },
      withCredentials: true,
    });

    setEmpresa(respuesta.data?.empresa);
  }


  return (
    <>
       {!empresa && (<Loading/>)}
      {empresa && (
        <div className="h-full w-full flex flex-col mt-8 justify-center items-center">
          <h1 className='font-bold text-3xl'>Empresa {empresa.id_empresa}</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                ID
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {empresa.id_empresa}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Habilitado
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {empresa.habilitado ? 'True' : 'False'}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                URL Local
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {empresa.url_local}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                URL Remota
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {empresa.url_remota}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                URL Remota Alternativa
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {empresa.url_remota_alternativa}
              </p>
              
        
            </div>
            <div className="ml-16">
              <Link className="bg-teal-600 text-white px-6 py-2 rounded-lg" to = {"/empresas"}>
                Back <FontAwesomeIcon icon={faBackward} />
              </Link>
            </div>
            
          </div>
          
        </div>
      )}

    </>
  )
}

export default Empresa
