import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/753/753850.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" style={{ marginRight: '10px' }}/>
        AdventureSphere
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
