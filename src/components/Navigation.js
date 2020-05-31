import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../index.css'
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg text-warning bg-dark mb-4">
        <Link to="/">
         RESUME-APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/resumes">Resumes</Link>
            <Link className="nav-item nav-link" to="/create">Crear-Resume</Link>
            <Link className="nav-item nav-link" to="/user">Create-Users</Link>                      
            <Link className="nav-item nav-link" to="/crear_usuario">Usuario-Nuevo</Link>                      
            <Link className="nav-item nav-link" to="/crear_resume">Nuevo-Curriculum</Link>
          </div>
        </div>
      </nav>
    );
  }
}
