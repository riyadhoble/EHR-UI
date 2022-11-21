import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
//import Sogin from './images/green (1).jpg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Dsignin from './components/doctorlogin'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                  <Link className="nav-link" to={'/sign-in'} style={{color: 'white',justifyContent: 'Right',
        alignItems: 'Right',}}>
                    Login
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'} style={{color: 'white'}}  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        
        
        
        <div className="auth-wrapper" >
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App