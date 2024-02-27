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
          <NavLink exact="true" to={"/"} activeclassname="active">
            <li className="home-link">Home</li>
          </NavLink>
          <NavLink to={"/pharmacy"} activeclassname="active">
            <li>Pharmacy</li>
          </NavLink>
          <NavLink to={"/labs"} activeclassname="active">
            <li>Labs</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
