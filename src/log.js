import Log from './components/login.component'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function log() {
    return (
      <Router>
        <div style ={{flexDirection:"row"}}>
            <Log/>
            <Log/>
        </div>
          
          
          
          
      </Router>
    )
  }
  export default log