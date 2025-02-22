import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarMobile from "./navBarMobile";

const Navbar = () => {
  const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };

  const width = useWindowWidth();
  if (width <= 991) {
    return <NavBarMobile />;
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active fs-5 text-primary" to="/">
                    Main
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-primary" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-primary" to="/users">
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
