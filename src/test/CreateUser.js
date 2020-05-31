import React, { Fragment,useState } from "react";
import request from 'superagent';
//import axios from 'axios'
  /*COMPONENTE TEST PARA GUARDAR EL USUARIO NUEVO */
  

  const CreateUser = () =>{
    const [user, setUser] = useState({
      username:'',
      email:'',
      password:'',
      role:''      
    });

    //ocupa el evento que trae el onChange en el input
    const handleInputChange = (event)=>{
      console.log(event.target.value)
      setUser({
        ...user,
        [event.target.name] : event.target.value
      });
    }

    const GuardarUsuario=(e)=>{
      e.preventDefault();
      const nuevoUsuario = {
        username:user.username,
        email:user.email,
        password:user.password,
        role:user.role
    }
      request.post('http://localhost:5555/api/users')
      .send(nuevoUsuario)
      .then()
      console.log(nuevoUsuario)
      const cleanUser ={
      username:'',
      email:'',
      password:'',
      role:'' }      
      setUser(cleanUser)
    }
    

   /*  const onSubmit = async(e)=>{
      e.preventDefautl();
      const nuevoUsuario = {
        username:user.username,
        email:user.email,
        password:user.password,
        role:user.role
    }
    console.log(nuevoUsuario)
      //GUARDAR EL NUEVO USUARIO(NO FUNCIONA)
      await axios.post('localhost:5555/api/users',nuevoUsuario); 
    
    } */

    return (
      <Fragment>
        <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
            <form onSubmit={GuardarUsuario}>
              <div className="card-header">Crea el Ususario Nuevo</div>
              <div className="card-body">
                  {/*NOMBRE */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Usuiario"
                  onChange={handleInputChange}
                  
                  name="username"
                />
                {/*EMAIL*/}
                <input
                  type="email"
                  className="mt-3 form-control"
                  placeholder="Email"
                  
                  onChange={handleInputChange}
                  name="email"
                />
                {/*PASSWORD*/}
                <input
                  type="password"
                  className="mt-3 form-control"
                  placeholder="Contraseña"
                  
                  onChange={handleInputChange}
                  name="password"
                />
                {/*SELECTOR DE ROL */}
              <select name="role" 
              className="form-control mt-3"
              onChange={handleInputChange}
              required                            
              >
                <option value="USER">ELIGE UN ROL</option>
                  <option value="ADMIN" name="ADMIN" >ADMINISTRADOR</option>
                  <option value="USER" name="USER">USUARIO</option>
              </select>
              </div>
              
              
                <button type="submit" className="btn btn-block btn-success">GUARDAR</button>
            </form>
            </div>{/*fin del card */}
           
          </div>{/*fin de col-4 */}
          <div className="col-8">
            {/*card user */}
            <div className="card text-center col-4">    
              <div className="text-center card-header">
                {user.username}
              </div>
              <div className="card-body">
                {user.email}
              </div>
              <div className="card-footer">
                {user.password}                
              </div>   
              <div className="card-footer">
              {user.role}  
              </div>         
            </div>
          </div>
        </div>
      </div>      
      </Fragment>
    );
  }
    
    
 


  

export default CreateUser;