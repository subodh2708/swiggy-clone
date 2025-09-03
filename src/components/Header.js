import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, [btnLogin]);

  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="Logo" style={{ width: "150px" }} />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn-login"
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
