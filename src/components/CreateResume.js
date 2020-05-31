import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/man-profile.svg";

export default class CreateResume extends Component {
  state = {
    users:[],
    nombre: "",
    direccion:"",
    telefono: "",
    celular: "",
    email:"",
    dui:"",
    nit:"",
    licencia:"",
    nivel_acadmy:"",
    lugar_acadmy:"",
    info_tec:"",
    otros_estudios:"",
    exp_laboral:"",
    conocimientos:"",
    skills:"",
    ref_personales:[
      {nombre_ref_uno:"",
       numero_ref_uno:""
      },
      {nombre_ref_dos:"",
       numero_ref_dos:""
      }
    ],
    editing: false,
    _id: "",
    date: new Date()
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newResume = {        
        nombre:this.state.nombre,
        edad:this.state.nombre,
        direccion:this.state.direccion,
        telefono:this.state.telefono,
        celular:this.state.celular,
        email:this.state.celular,
        dui:this.state.dui,
        nit:this.state.nit,
        licencia:this.state.licencia,
        nivel_acadmy:this.state.level_acadmy,
        lugar_acadmy:this.state.lugar_acadmy,
        info_tec:this.state.conotec,
        otros_estudios:this.state.otrosestudios,
        exp_laboral:this.state.exp_laboral,
        conocimientos:this.state.conocimientos,
        skills:this.state.skills,
        ref_personales:[
          {nombre_ref_uno:this.state.ref_personales.nombre_ref_uno,
           numero_ref_uno:this.state.ref_personales.numero_ref_uno
          },
          {nombre_ref_dos:this.state.ref_personales.nombre_ref_dos,
           numero_ref_dos:this.state.ref_personales.numero_ref_dos
          }
        ]
       
    }//en caso de editar un cv
    if (this.state.editing) {
      await axios.put('http://localhost:5555/api/resumes/'+this.state._id,newResume);
    }else{//en caso de crear un cv nuevo
      await axios.post('http://localhost:5555/api/resumes',newResume)
      console.log(newResume)
    }
    console.log(newResume)
    
    window.location.href='/resumes';
  };

  async componentDidMount(){
    console.log(this.props.match.params.id);
    await axios.get('http://localhost:5555/api/users');
  
    //si existe un id vamos a actualizar
    if (this.props.match.params.id) {
      const res = await axios.get('http://localhost:5555/api/resumes/'+this.props.match.params.id);
      console.log(res.data);
      this.setState({
        nombre:res.data.nombre,
        edad:res.data.edad,
        direccion:res.data.direccion,
        telefono:res.data.telefono,
        celular:res.data.celular,
        email:res.data.celular,
        dui:res.data.dui,
        nit:res.data.nit,
        licencia:res.data.licencia,
        level_acadmy:res.data.level_acadmy,
        lugar_acadmy:res.data.lugar_acadmy,
        conotec:res.data.conotec,
        otrosestudios:res.data.otrosestudios,
        exp_laboral:res.data.exp_laboral,
        conocimientos:res.data.conocimientos,
        skills:res.data.skills,
        ref_personales:[
          {nombre_ref_uno:res.data.ref_personales.nombre_ref_uno,
           numero_ref_uno:res.data.ref_personales.numero_ref_uno
          },
          {nombre_ref_dos:res.data.ref_personales.nombre_ref_dos,
           numero_ref_dos:res.data.ref_personales.numero_ref_dos
          }
        ]
      });
    }
  }

  onInputChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
    console.log(e.target.value);
  }

  onChangeDate = (date)=>{
    this.setState({date});
  };


  render() {
    return (
      <div className="row">        
        <div className="container">
          <h3 className="bg-warning text-justify text-center rounded">
            CREA TU CURRÍCULUM VITAE
          </h3>
          <form onSubmit={this.onSubmit} className="shadow-lg border border-info col-12">
            {/*Formulario de IMAGEN */}
            <div className="row">
            <div className="form-group col-4 border border-danger ">
              <img
                className="img-thumbnail  float-left w-100"               
                src="man-profile.svg"
                alt="profile pic"
              />
              
                <label
                  className="text-white text-center bg-success col-12"
                  htmlFor="exampleFormControlFile1"
                >
                  Sube tu foto para el CV
                </label>
                <input                
                  type="file"
                  name="imagePath"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />      
                                
            </div>
              {/* INPUT FORMS */}
              <div className="col-8">
              {/* INPUT NAME */}
              <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Nombre Completo"
                name="nombre"
              />              
            </div>
            {/* INPUT DIRECCIÓN */}
            <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Dirección"
                name="direccion"
              />              
            </div>
            {/* INPUT TELEFONO */}
            <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Telefono"
                name="telefono"
              />              
            </div>
            {/* INPUT CELULAR */}
            <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Celular"
                name="celular"
              />              
            </div>
            {/* INPUT EMAIL */}
            <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Email"
                name="email"
              />              
            </div>
            {/* INPUT DUI */}
            <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="number"
                placeholder="DUI"
                name="dui"
              />              
            </div>
            {/* INPUT NIT */}
            <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="number"
                placeholder="NIT"
                name="nit"
              />              
            </div>
            {/* INPUT LICENCIA */}
            <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Licencia"
                name="licencia"
              />              
            </div>            
            </div>  {/*fin del form 8 inputs*/}
            
            </div>{/*FIN DEL ROW*/}
            <div className="col-12">{/*INPUTS BAJOS*/}
                {/* INPUT NIVEL ACADÉMICO */}
              <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Nivel Académico"
                name="nivel_acadmy"
              />              
            </div>
             {/* INPUT LUGAR ACADMY */}
             <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Lugar Donde Estudió"
                name="lugar_acadmy"
              />              
            </div>
              {/* INPUT INFO TECNICA */}
              <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Conocimientos Técnicos"
                name="info_tec"
              />              
            </div>
              {/* INPUT OTROS ESTUDIOS */}
              <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Otros Estudios"
                name="otros_estudios"
              />              
            </div>
              {/* INPUT EXP LABORAL */}
              <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="EXP Laboral"
                name="exp_laboral"
              />              
            </div>
              {/* INPUT CONOCIMIENTOS */}
              <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Conocimientos"
                name="conocimientos"
              />              
            </div>
              {/* INPUT SKILLS */}
              <div className="form-group col-12">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Skills"
                name="skills"
              />              
            </div>
            </div>{/*CIERRE DE INPUTS BAJOS*/}
            {/*REF PERSONALES */}
            <div className="row container mx-auto">
                  {/* INPUT REF P_UNO */}
              <div className="form-group col-6">
              <input
                className="form-control form-control-lg mb-2"
                type="text"
                placeholder="Referencia Personal Uno"
                name="nombre_ref_uno"
              /> 
              <input
                className="form-control form-control-lg"
                type="number"
                placeholder="Número"
                name="numero_ref_uno"
              />               
            </div>
              {/* INPUT REF P_DOS */}
              <div className="form-group col-6">
              <input
                className="form-control form-control-lg mb-2"
                type="text"
                placeholder="Referencia Personal Dos"
                name="nombre_ref_dos"
              />  
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Número"
                name="numero_ref_uno"
              />              
            </div>
            </div>{/*fin de ref Personales */}
            <div className="con-10 row container mx-auto">
            <button className="text-center btn btn-success btn-block">
                GUARDAR CV
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
