import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="nav-data">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="navLinks">
          <li className="home-link">
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
