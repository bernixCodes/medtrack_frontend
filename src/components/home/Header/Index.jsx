import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="nav-data">
        <img src={logo} alt="" className="logo" />
        <ul className="navLinks">
          <li>
            <NavLink exact="true" to={"/"} activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/pharmacy"} activeclassname="active">
              Pharmacy
            </NavLink>
          </li>
          <li>
            <NavLink to={"/labs"} activeclassname="active">
              Labs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
