import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="col-9">

        <Link className="navbar-brand" to="/" style={{ color: "#dc3545", fontWeight: "bold", fontSize: "30px" }}>TV SHOW WATCHLIST</Link>
      </div>
      <div className="col-3">
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={{ color: "white" }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users" style={{ color: "white" }}>Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shows" style={{ color: "white" }}>TV Shows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/post" style={{ color: "white" }}> Create</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

