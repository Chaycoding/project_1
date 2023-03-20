import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="sticky-top" style={{borderBottom:'white solid 0.2px'}}>
    <nav className="navbar navbar-expand-sm navbar-dark" style={{height:'60px', opacity: 0.95,backgroundImage:'linear-gradient( to right, #2f2626, #4c3c3c)'}}>
        <div className="container-fluid">
        <Link to='/' className="navbar-brand mb-0 h1" href="#" style={{fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: '1.8rem'}}>
          Chayticles
        </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-items">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" id="bestOf" >Best of</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Subjects</a>
            </li>
          </ul>
          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          <Link to='/contactinfo'><button className="btn ms-3" id="nav-contactButton">Contact us</button></Link>
    </div>
  </div>
</nav>
  </div>
  );
}

export default Navbar;
