import React from "react";
import { NavLink,Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/" activeClassName="active">
              RRDV6
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
            to='/form'
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Form
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/form/add">
                  ADD Form
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  className="dropdown-item"
                  to="/form/list"
                  activeClassName="active"
                >
                  List Form
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/nested"
              activeClassName="active"
            >
              Nested Async
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/spinner"
              activeClassName="active"
            >
              Spinner
            </Link>
          </li>
          {/* Add additional links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;