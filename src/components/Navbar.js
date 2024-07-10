import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='box-shadow sticky-top'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/img/F2-Fintech-logo-1.png" className='img-navbar' alt="F2 Fintech Logo" style={{ height: '50px' }}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <a href="#contact" className='btn btn-primary mx-2'>Contact</a>
            <a href="#faq" className='btn btn-primary mx-2'>FAQ</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
