import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "../../../api/axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare, faList, faPlus } from "@fortawesome/free-solid-svg-icons"

const LinkPageEmpresas = () => {

    const [empresas, setEmpresas] = useState([]);

    
    useEffect(() => {
        getEmpresas();
    }, []);

    const getEmpresas = async () => {
        const token = localStorage.getItem('access_token');
        const respuesta = await axios.get("api/empresas", {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": 'application/json',
            },
            withCredentials: true,
        });

        setEmpresas(respuesta.data?.empresas);
    }


    function DeleteEmpresa(id){
        const token = localStorage.getItem('access_token');

        axios.delete(`api/empresa/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": 'application/json',  
            },
            withCredentials: true,
        }).then(getEmpresas);        
    }


    return (
        <>
            <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
                <h1 className="text-3xl font-bold">Tabla Empresas</h1>
                <Link className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
                                                    to={`/empresas/add`}>
                                                        Añadir <FontAwesomeIcon icon={faPlus}/>
                                                    </Link>
                <div className="flex flex-col">
                    <div className="overflow-x-auto mt-4 sm:-mx-6 items-center lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white px-6 py-4"
                                            >
                                                ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                Habilitado
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                URL Remota
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-black border-b-2">
                                        {empresas.map((empresa, index) => (
                                            <tr key={empresa.id_empresa} className="bg-white border-b-2 border-black">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                                                    {empresa.id_empresa}
                                                </td>
                                                <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                    {empresa.habilitado.toString()}
                                                </td>
                                                <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                    {empresa.url_remota}
                                                </td>
                                                <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                                                    <Link className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                                                    to = {`/empresas/${empresa.id_empresa}`}
                                                    >
                                                        View <FontAwesomeIcon icon={faList} />
                                                    </Link>
                                                    <Link className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                                                    to={`/empresas/edit/${empresa.id_empresa}`}>
                                                        Edit <FontAwesomeIcon icon={faPenToSquare}/>
                                                    </Link>
                                                    <Link className="bg-red-600 text-white px-6 py-2 rounded-lg"
                                                    onClick={() => DeleteEmpresa(empresa.id_empresa)}>
                                                        Delete <FontAwesomeIcon icon={faTrash}/>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LinkPageEmpresas
