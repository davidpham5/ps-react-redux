import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
         <ul className="nav navbar-nav">
          <li className="nav-item">
            <IndexLink to="/" className="nav-link" activeClassName="active">Home</IndexLink>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" activeClassName="active">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link" activeClassName="active">Courses</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;