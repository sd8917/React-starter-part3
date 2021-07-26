import React from 'react';
import { Link } from 'react-router-dom'


const Topbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        <Link to="/contact" className="nav-link" >Contact</Link>
                        <Link to="/about" className="nav-link" >About</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Topbar;