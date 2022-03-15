import React from 'react';
import './NavBar.css';
import Logo from '../Image/logo.png';
const NavBar = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid d-flex justify-content-around">

    <a className="navbar-brand text-white" href="#"><img src={Logo} className="logo" alt="logo..."></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Link</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar