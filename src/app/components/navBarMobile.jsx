import "./styles/navbarmobile.css";
import { Link } from "react-router-dom";
const NavBarMobile = () => {
  return (
    <>
      <div className="d-flex justify-content-end p-3">
        <div className="btn-group ">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle bi bi-list "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="nav-link active fs-5 text-primary" to="/">
                Main
              </Link>
            </li>
            <li>
              <Link className="nav-link fs-5 text-primary" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link fs-5 text-primary" to="/users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* 
      <input type="checkbox" id="check" />
      <label className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Menu</label>
      <ul>
        <li>
          <Link className="nav-link active fs-5 text-primary" to="/">
            Main
          </Link>
        </li>
        <li>
          <Link className="nav-link fs-5 text-primary" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link fs-5 text-primary" to="/users">
            Users
          </Link>
        </li>
      </ul> */}
    </>
  );
};

export default NavBarMobile;
