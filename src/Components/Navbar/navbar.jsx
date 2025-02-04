import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { GoThreeBars } from "react-icons/go";
import "./navbar.css";
import Logo from "../Logo/logo";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container nav__container">
          <Logo />
          <div className="nav__menu">
            <ul>
              {links.map(({ name, path }, index) => {
                return (
                  <li>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "active-nav" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav__left">
            <Link to="/" className="btn btn1">
              Login
            </Link>
            <button className="btn btn2">Signup</button>
            <button className="nav__toggle-btn">
              <GoThreeBars />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
