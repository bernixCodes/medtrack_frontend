import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/semi-logo.svg";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="nav-data">
        <Link to={"/"} className="logo-div">
          <img src={logo} alt="" />
          <p>
            <span style={{ color: "#00bcd1" }}>Med</span>Track
          </p>
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
