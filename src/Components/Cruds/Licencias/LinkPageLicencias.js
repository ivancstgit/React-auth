import { Link } from "react-router-dom"

const LinkPageLicencias = () => {
    return (
        <section>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Links</h1>
                <br />
                <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Public</h2>
                <Link className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    to="/login">Sign In</Link>
                <Link className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    to="/register">Sign Up</Link>
                <br />
                <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Private</h2>
                <Link className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    to="/">Home</Link>
                <Link className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    to="/admin">Admin Page</Link>
            </div>
        </section>
    )
}

export default LinkPageLicencias
