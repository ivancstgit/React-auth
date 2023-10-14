import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from '../api/axios';

const Edit = ({ enable, id }) => {
  enable = true;
  id = 1;
  const [open, setOpen] = useState(enable);
  const [empresa, setEmpresa] = useState("");
  const [estado, setEstado] = useState(true);

  const handleChange = (e) => {
    setEstado(e.target.value === 'Habilitado');
  };
  const cancelButtonRef = useRef(null);


  useEffect(() => {
    getEmpresasById();
  }, []);

  const getEmpresasById = async () => {
    const token = localStorage.getItem('access_token');
    
    const respuesta = await axios.get("api/empresa/" + id, {
      headers: {
        Authorization: 'Bearer ' + token,
        "Content-Type": 'application/json',
      }
    });

    setEmpresa(respuesta.data?.empresa);
  }


  
  const toggle = async () => {
    setOpen(!open);
  }

  return (
    <Transition.Root show={open} as={Fragment} >
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">

                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Edit empresa
                      </Dialog.Title>
                      <div className="mt-2">

                        <p className="mt-2 text-sm text-black-500">
                          url_local
                        </p>
                        <input className="mt-2 block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                          type="text"
                          id="url_local"
                          placeholder='url_local'
                          defaultValue={empresa.url_local} />

                        <p className="mt-2 text-sm text-black-500">
                          url_remota
                        </p>
                        <input className="mt-2 block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                          type="text"
                          id="url_remota"
                          placeholder='url_remota'
                          defaultValue={empresa.url_remota} />
                        <p className="mt-2 text-sm text-black-500">
                          url_remota_alternativa
                        </p>
                        <input className="mt-2 block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                          type="text"
                          id="url_remota_alternativa"
                          placeholder='url_remota_alternativa'
                          defaultValue={empresa.url_remota_alternativa} />
                        <select className="mt-6 block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                          value={empresa.habilitado ? 'Habilitado' : 'NoHabilitado'} onChange={handleChange}>
                          <option value="Habilitado">Habilitado</option>
                          <option value="NoHabilitado">No Habilitado</option>
                        </select>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 sm:ml-3 sm:w-auto"
                    onClick={() => toggle()}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => toggle()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Edit;

