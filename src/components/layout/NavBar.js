import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {

    return(
        <nav className="nav">
            <h1>Okta-Auth</h1>
            <div className="menu">
            <div className="nav-div" ><Link className="nav-link" to="/">Home</Link></div>
            <div className="nav-div" ><Link className="nav-link" to="/protected">Protected</Link></div>
            </div>
        </nav>
    )
}


export default Home;