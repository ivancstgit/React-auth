import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <section>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Admins Page</h1>
                <br />
                <p className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Welcome to the admin page</p>
                <div className="flexGrow">
                    <Link className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        to="/">Go Home</Link>
                </div>
            </div>
        </section>
    )
}

export default Admin
