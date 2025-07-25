import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import notfound from '../assets/errorpage.jpg'
// ErrorPage.jsx
export default function NotFound({ error }) {
  return (
    <div className="text-center p-2">
      {/* <h1 className="text-3xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p className="my-4 text-gray-700">
        {error?.message || "Unknown error occurred."}
      </p> */}
      <img src={notfound} alt="" className="lg:w-1/2 mx-auto" />
      <div className="mx-auto lg:w-1/6 mt-4">
        <Link
        to="/"
        className="text-white bg-[#0B254C] px-2 py-2 rounded-md flex items-center gap-3 justify-center "
      >
        <FaHome></FaHome> Back To Home
      </Link>
      </div>
    </div>
  );
}

