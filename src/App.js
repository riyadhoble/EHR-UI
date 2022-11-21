import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import Dsignin from './components/doctorlogin'
import Dsignup from './components/doctorsignup'
import Login from './components/login.component'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignUp from './components/signup.component'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import * as Components from './Components';
import Welcome from './Welcome';


function App() {
  
  return (

    <Router>
      <div className="App">
        
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'} style={{color: 'white',fontSize:'1.5rem'}}>
              Medical Chain
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <DropdownButton id="dropdown-basic-button" title="Login">
                <Dropdown.Item href="/sign-in/doctor-sign-in">Doctor Login</Dropdown.Item>
                <Dropdown.Item href="/sign-up/doctor-sign-up">Patient Login</Dropdown.Item>
                
              </DropdownButton>
                  
                </li>
                <li className="nav-item">
                <DropdownButton id="dropdown-basic-button" title="SignUp">
                <Dropdown.Item href="/sign-up/doctor-sign-up">Doctor SignUp</Dropdown.Item>
                <Dropdown.Item href="/sign-up/patient-sign-up">Patient SignUp</Dropdown.Item>
                
              </DropdownButton>
                
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper" >
          <div className="auth-inner">
            <div className='riya'>
              
              
              
            <Routes>
              <Route exact path="/" element={<Login />} />

              <Route path='/sign-in/patient-sign-in' element={<Login />} />
              <Route path='/sign-up/patient-sign-up' element={<SignUp />} />
              <Route path='/sign-in/doctor-sign-in' element={<Dsignin />} />
              <Route path='/sign-up/doctor-sign-up' element={<Dsignup />} />
              
            </Routes>
          </div>
        </div>
      </div>
      </div>
     
        
        
    </Router>
  )
}
export default App;