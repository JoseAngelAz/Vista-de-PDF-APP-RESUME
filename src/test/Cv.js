import React ,{Fragment,useState} from 'react'
//import axios from 'axios'
import request from 'superagent';

const Curriculum = ()=>{
    const [Cv, setCv] = useState({
        imagePath:'',
        nombre:'',
        edad:'',
        direccion:'',
        telefono:'',
        celular:'',
        email:'',
        dui:'',
        nit:'',
        licencia:'',
        nivel_acadmy:'',
        lugar_acadmy:'',
        info_tec:'',
        otros_estudios:'',
        exp_laboral:'',
        conocimientos:'',
        skills:'',
        ref_personales:[
            {
                nombre_ref_uno:'',
                numero_ref_uno:''
            },
            {
                nombre_ref_dos:'',
                numero_ref_dos:''
            }
            ]
    });

    const handleInputChange = e =>{
        console.log(e.target.value);
        setCv({
            ...Cv,
            [e.target.name] : e.target.value
        });
    }
    

    const GuardarCv = e =>{
        e.preventDefault();
        const NuevoCv = {
            imagePath:Cv.imagePath,
            nombre:Cv.nombre,
            edad:Cv.edad,
            direccion:Cv.direccion,
            telefono:Cv.telefono,
            celular:Cv.celular,
            email:Cv.email,
            dui:Cv.dui,
            nit:Cv.nit,
            licencia:Cv.licencia,
            nivel_acadmy:Cv.nivel_acadmy,
            lugar_acadmy:Cv.lugar_acadmy,
            info_tec:Cv.info_tec,
            otros_estudios:Cv.otros_estudios,
            exp_laboral:Cv.exp_laboral,
            conocimientos:Cv.conocimientos,
            skills:'',
            ref_personales:[
                {
                    nombre_ref_uno:Cv.ref_personales,
                    numero_ref_uno:Cv.ref_personales
                },
                {
                    nombre_ref_dos:Cv.ref_personales,
                    numero_ref_dos:Cv.ref_personales
                }
                ]
        }
        request.post('http://localhost:5555/api/resumes')
        .send(NuevoCv)
        .then()
        console.log(NuevoCv)
        //limpiamos los imputs al guardar
        const CleanResume = {
            imagePath:'',
            nombre:'',
            edad:'',
            direccion:'',
            telefono:'',
            celular:'',
            email:'',
            dui:'',
            nit:'',
            licencia:'',
            nivel_acadmy:'',
            lugar_acadmy:'',
            info_tec:'',
            otros_estudios:'',
            exp_laboral:'',
            conocimientos:'',
            skills:'',
            ref_personales:[
                {
                    nombre_ref_uno:'',
                    numero_ref_uno:''
                },
                {
                    nombre_ref_dos:'',
                    numero_ref_dos:''
                }
                ]
        }
        setCv(CleanResume)
        
    }

return(
    //FORMULARIO TEST
    <Fragment>
        <div className="container bg-warning">
            <div className="row border border-success">
                <div className="col-7 border border-danger">
                    <div className="card">                        
                        {/*Comienza Formulario*/}
                        <form onSubmit={GuardarCv}>
                           <div className="card-body">
                            <div className="card-header bg-info">
                            <h2 className="text-center text-light">CREA TU CURRICULUM VITAE</h2>
                            </div>
                            {/*personales */}
                             {/*INPUT IMAGEPATH*/}
                             <input type="text" 
                            placeholder="IMAGEN.JPG"
                            className="form-control mt-3"
                            name="imagePath"    
                            onChange={handleInputChange}
                            />
                           <div className="rounded">
                                {/*INPUT NAME*/}
                            <input type="text" 
                            placeholder="nombre"
                            className="form-control mt-3"
                            name="nombre"
                            onChange={handleInputChange}
                            />
                            {/*INPUT EDAD*/}
                            <input type="text" 
                            placeholder="Edad"
                            className="form-control mt-3"
                            name="edad"
                            onChange={handleInputChange}
                            />
                            {/*INPUT DIRECCIÓN*/}
                            <input type="text" 
                            placeholder="Dirección"
                            className="form-control mt-3"
                            name="direccion"
                            onChange={handleInputChange}
                            />
                            {/*INPUT TELEFONO*/}
                            <input type="text" 
                            placeholder="telefono"
                            className="form-control mt-3"
                            name="telefono"
                            onChange={handleInputChange}
                            />
                            {/*INPUT CELULAR*/}
                            <input type="text" 
                            placeholder="celular"
                            className="form-control mt-3"
                            name="celular"
                            onChange={handleInputChange}
                            />
                            {/*INPUT EMAIL*/}
                            <input type="email" 
                            placeholder="Email"
                            className="form-control mt-3"
                            name="email"
                            onChange={handleInputChange}
                            />
                            {/*INPUT DUI*/}
                            <input type="number" 
                            placeholder="DUI"
                            className="form-control mt-3"
                            name="dui"
                            onChange={handleInputChange}
                            />
                            {/*INPUT NIT*/}
                            <input type="number" 
                            placeholder="NIT"
                            className="form-control mt-3 mb-3"
                            name="nit"
                            onChange={handleInputChange}
                            />
                           </div>{/*fin de content de personales */}
                            {/*INPUT LICENCIA*/}
                           <input type="text" 
                            placeholder="Licencia"
                            className="form-control mt-3"
                            name="licencia"
                            onChange={handleInputChange}
                            />
                            {/*INPUT NIVEL_ACADMY*/}
                           <input type="text" 
                            placeholder="Nivel Académico"
                            className="form-control mt-3"
                            name="nivel_acadmy"
                            onChange={handleInputChange}
                            />
                            {/*INPUT LUGAR_ACADMY*/}
                           <input type="text" 
                            placeholder="Lugar donde estudió"
                            className="form-control mt-3"
                            name="lugar_acadmy"
                            onChange={handleInputChange}
                            />
                            {/*INPUT INFO_TEC*/}
                           <input type="text" 
                            placeholder="Conocimientos Técnicos"
                            className="form-control mt-3"
                            name="info_tec"
                            onChange={handleInputChange}
                            />
                            {/*INPUT OTROS ESTUDIOS*/}
                           <input type="text" 
                            placeholder="Otros Estudios"
                            className="form-control mt-3"
                            name="otros_estudios"
                            onChange={handleInputChange}
                            />
                            {/*INPUT EXP_LABORAL*/}
                           <input type="text" 
                            placeholder="EXP Laboral"
                            className="form-control mt-3"
                            name="exp_laboral"
                            onChange={handleInputChange}
                            />
                            {/*INPUT CONOCIMIENTOS*/}
                           <input type="text" 
                            placeholder="Conocimientos"
                            className="form-control mt-3"
                            name="conocimientos"
                            onChange={handleInputChange}
                            />
                            {/*INPUT SKILLS*/}
                           <input type="text" 
                            placeholder="Habilidades"
                            className="form-control mt-3 mb-3"
                            name="skills"
                            onChange={handleInputChange}
                            />
                            {/*REFERENCIAS PERSONALES*/}

                            <div className="row bg-warning mx-auto">
                             
                              <div className="col-6 ref_uno mx-auto">
                                    {/*INPUT REF_P_UNO*/}
                           <input type="text" 
                            placeholder="Referencia Uno"
                            className="form-control mt-3 "
                            name="nombre_ref_uno"
                            onChange={handleInputChange}
                            />
                            {/*INPUT NUMERO REF UNO*/}
                           <input type="number" 
                            placeholder="Número"
                            className="form-control mt-3 mb-3"
                            name="numero_ref_uno"
                            onChange={handleInputChange}
                            />
                                </div>{/*fin ref UNO */}
                                <div className="col-6 mx-auto">

                                    {/*INPUT REF_P_DOS*/}
                           <input type="text" 
                            placeholder="Referencia Dos"
                            className="form-control mt-3"
                            name="nombre_ref_dos"
                            onChange={handleInputChange}
                            />
                            {/*INPUT NUMERO REF DOS*/}
                           <input type="number" 
                            placeholder="Número"
                            className="form-control mt-3"
                            name="numero_ref_dos"
                            onChange={handleInputChange}
                            />
                                </div>{/*fin ref DOS */}
                             
                            </div>
                           </div>
                           
                            <div className="card-footer">
                                {/*Boton guardar */}
                            <button type="submit" className="btn btn-primary btn-block">
                                <h2 className="text-light">CREAR CV</h2>
                            </button>
                            </div>
                        </form>
                    </div>
                </div>{/*fin del col-9 principal*/}
                
            </div>{/*fin del row principal */}
        </div>{/*fin de container */}
    </Fragment>
)
}//fin de crear cv

export default Curriculum;