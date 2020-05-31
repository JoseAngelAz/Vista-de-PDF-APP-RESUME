import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import CreateResume from './components/CreateResume'
import CreateUser from './components/CreateUser'
import Resumes from './components/Resumes'
import Index from './components/Index'

//test
import CreateUser2 from './test/CreateUser'
import Curriculum from './test/Cv';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container">
      <Route path="/" exact component={Index}/>
        <Route path="/resumes" exact component={Resumes}/>
        <Route path="/edit/:id" component={CreateResume}/>
        <Route path="/create" component={CreateResume}/>
        <Route path="/user"  component={CreateUser}/>
        {/*TEST*/}
        <Route path="/crear_usuario" component={CreateUser2}/>
        <Route path="/crear_resume" component={Curriculum} />
      </div>
    </Router>
  );
}

export default App;
