import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, [btnLogin]);

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md ">
      <div className="flex items-center">
        <img src={LOGO_URL} alt="Logo" className="w-36 cursor-pointer" />
      </div>
      <nav className="">
        <ul className="flex items-center space-x-6 text-lg font-medium text-gray-700">
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            Cart
          </li>
          <button
            className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors shadow-md duration-200"
            onClick={() => {
              btnLogin === "login"
                ? setBtnLogin("logout")
                : setBtnLogin("login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
