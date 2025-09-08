import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {}, [btnLogin]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-32 md:w-36 cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex items-center space-x-8 text-gray-700 font-medium">
            <li>
              <span
                className={`flex items-center gap-1 text-sm ${
                  onlineStatus ? "text-green-600" : "text-red-500"
                }`}
              >
                {onlineStatus ? "🟢 Online" : "🔴 Offline"}
              </span>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `relative hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                🛒 Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                    {cartItems.length}
                  </span>
                )}
              </NavLink>
            </li>

            <li>
              <button
                className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg shadow-md transition"
                onClick={() =>
                  setBtnLogin(btnLogin === "Login" ? "Logout" : "Login")
                }
              >
                {btnLogin}
              </button>
            </li>

            <li className="hidden md:block text-gray-600 text-sm italic">
              Hi, {loggedInUser}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
