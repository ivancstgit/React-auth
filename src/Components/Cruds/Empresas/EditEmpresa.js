
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import { faBackward, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
function EditEmpresa() {
    const [empresa, setEmpresa] = useState();
    const { id } = useParams();
    
    const [habilitado, setHabilitado] = useState(true);
    const [url_remota, setUrl_remota] = useState("");
    const [url_remota_alternativa, setUrl_alter] = useState("");
    const [url_local, setUrl_local] = useState("");

    const navigate = useNavigate();
    
    useEffect(() => {
        getEmpresa();
    }, []);

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
        setHabilitado(respuesta.data?.empresa.habilitado);
        setUrl_alter(respuesta.data?.empresa.url_remota_alternativa);
        setUrl_local(respuesta.data?.empresa.url_local);
        setUrl_remota(respuesta.data?.empresa.url_remota);
    }

    const body = {
        habilitado: habilitado,
        url_remota: url_remota,
        url_remota_alternativa: url_remota_alternativa,
        url_local: url_local
    }

    const EditEmpresa = async () => {
        
        const token = localStorage.getItem('access_token');
        const respuesta = await axios.put(`api/empresa/${id}`, body, {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": 'application/json',
                
            },
            withCredentials: true,
        });
        navigate("/empresas")
    }
    const handleChange = (event) => {
        setHabilitado(event.target.value === "habilitado" ? true : false);
     };

    return (
        <>

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
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                value={habilitado ? "habilitado" : "deshabilitado"} onChange={handleChange}>
                                <option value="habilitado">Habilitado</option>
                                <option value="deshabilitado">Deshabilitado</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                URL Local
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                value={url_local} onChange={(e) => setUrl_local(e.target.value)}>
                            </input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                URL Remota
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                value={url_remota} onChange={(e) => setUrl_remota(e.target.value)}>
                            </input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                URL Remota Alternativa
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                value={url_remota_alternativa} onChange={(e) => setUrl_alter(e.target.value)}>
                            </input>
                        </div>
                        <div className="ml-16">

                            <Link className="bg-teal-600 text-white px-6 py-2 rounded-lg" to={"/empresas"}>
                                Back <FontAwesomeIcon icon={faBackward} />
                            </Link>
                            <Link className="ml-2 bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={EditEmpresa}> 
                                Edit <FontAwesomeIcon icon={faPenToSquare} />
                            </Link>
                        </div>

                    </div>

                </div>
            )}

        </>
    )
}

export default EditEmpresa
