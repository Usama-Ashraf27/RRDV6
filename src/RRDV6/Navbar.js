import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar =()=>{

    return (
        
      <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">RRDV6</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/form">From</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/nested">Nested Async</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/spinner">Spinner</NavLink> </li>
            {/* <li className="nav-item"><Link className="nav-link" to="/genral">Genral</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link>   </li>
            <li className="nav-item"><Link className="nav-link" to="/sport">Sport</Link> </li> */}
          </ul>
        </div>
      </div>
    </nav>

    {/* <Outlet/> */}
    </div>
    )
  }


export default Navbar