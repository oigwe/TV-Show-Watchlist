import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-8">

  <Link className="navbar-brand" to="/">TV SHOW WATCHLIST</Link>
  </div>
  <div className="col-4">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
    <Link className="nav-link" to="/users">Users</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/shows">TV Shows</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/genres"> Genres</Link>
  </li>
    </ul>
  </div>
  </div>
</nav>
    );
}

export default Header;