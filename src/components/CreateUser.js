import React, { Component } from "react";
import axios from "axios";
export default class CreateUser extends Component {

  state = {
    users: [],
    username: "",
    email:'',
    password:'',
    role:''
  };
  

  async componentDidMount(){
      this.getUsers();
  }

  getUsers = async()=>{
    const UsuarioApi = await axios.get('http://localhost:5555/api/users');
    this.setState({users:UsuarioApi.data});
  }

  onChangeInput = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteUser = async(id)=>{
    await axios.delete('http://localhost:5555/api/users/'+id);
    this.getUsers();
    console.log(id)
  }

  onSubmit = async e =>{
    e.preventDefault();    
    const newUser = {
      username:this.state.username,
      email:this.state.email,
      password:this.state.password,
      role:this.state.role
    };
    console.log(newUser)
   await axios.post('http://localhost:5555/api/users',newUser);
   
    this.setState({username:'',email:'',password:'',role:''});//limpia el input
    this.getUsers();//mostrar a los usuarios de nuevo
    
  }

  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card shadow-lg">
              <div className="text-center card-header bg-warning font-weight-bold">CREAR USUARIO</div>
              <div className="card-body col-12">
                <form onSubmit={this.onSubmit}>
                    {/*Name INPUT */}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre del Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      required
                      onChange={this.onChangeInput}
                      value={this.state.username}                     
                      aria-describedby="Nombre"/>
                    <small id="emailHelp" className="form-text text-muted">
                      Escribe aquí el nombre del  Usuario.
                    </small>
                  </div>
                    {/*EMAIL INPUT */}
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"                     
                      name="email"
                      required
                      onChange={this.onChangeInput}
                      value={this.state.email}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Escribe aquí tu dirección de correo electrónico.
                    </small>
                  </div>
                  {/*PASSWORD INPUT */}
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"                      
                      name="password"
                      required
                      onChange={this.onChangeInput}
                      value={this.state.password}                   
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Escribe aquí tu contraseña.
                    </small>
                  </div>               
                  <button type="submit" className="btn btn-primary btn-block">
                    GURARDAR USUARIO
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/*USERS LIST*/}
        <div className="container">
         <div className="row">
         <div className="col-12">
         
         {this.state.users.map((user)=>(
          <div className="card mt-3 shadow-lg bg-warning border border-success"
          key={user._id}
          >
            <div className="card-header">
              Nombre: 
            {user.username}
            </div>
            <div className="card-body">
              Email:
              {user.email}
            </div>
            <div className="card-footer">Rol: {user.role}</div> 
         <div className="card-footer">password: {user.password}</div>  
          </div>                                                 
          ))}
         
         </div>
         </div>
        </div>
        </div>{/*fin del row principal */}
      </div>
    );
  }
}
