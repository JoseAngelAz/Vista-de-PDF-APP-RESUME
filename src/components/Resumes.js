import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/curriculum-viate.svg";

export default class Resumes extends Component {
  state = {
    resumes: [],
  };

  async componentDidMount() {
    this.getResumes();
  }

  async getResumes() {
    const res = await axios.get("http://localhost:5555/api/resumes");
    this.setState({ resumes: res.data });
  }

  deleteResume = async (id) => {
    await axios.delete("http://localhost:5555/api/resume/" + id);
    this.getResumes();
  };

  render() {
    return (
      <div className="row">
        {this.state.resumes.map((resume) => (
          <div className="col-md-4 p2" key={resume._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{resume.imagePath}</h5>
                <Link className="btn btn-warning" to={"/edit/"+resume._id}>Editar</Link>
              </div>
              <div className="card-body">
                <p className="container">{resume.nombre}</p>
                <p className="container">{resume.email}</p>
                <div className="container">
                  <img src="curriculum-vitae.svg" alt="CV" />
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => this.deleteResume(resume._id)}
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
