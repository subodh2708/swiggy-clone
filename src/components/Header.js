import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("login");
  console.log("Header Called");

  useEffect(() => {
    console.log("useEffect called");
  }, [btnLogin]);

  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="Logo" style={{ width: "150px" }} />
      </div>
      <nav className="nav">
        <ul className="nav-list">
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
