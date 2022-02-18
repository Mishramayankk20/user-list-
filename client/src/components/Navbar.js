import React, { useState , useEffect } from "react";
import {NavLink,useLocation} from "react-router-dom";


const Navbar = () => {
    const [activeTab,setActiveTab] = useState("Home");

    const location = useLocation();

    useEffect (()=>{
        if(location.pathname === "/") {
            setActiveTab("Home");
        }
        else if(location.pathname === "/add") {
            setActiveTab("addUser");
        }
        else if(location.pathname === "/about") {
            setActiveTab("About");
        }
    },[location])


    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
        <p className= {`${activeTab==="home" ? "active" :""}`}  onclick={()=> setActiveTab("Home")}>User Management system</p></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <NavLink className="nav-link" exact  to="/">
                        <p className= {`${activeTab==="home" ? "active" :""}`}  onClick={()=> setActiveTab("Home")}>Home</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/add">
                    <p className= {`${activeTab==="Adduser" ? "active" :""}`}  onClick={()=> setActiveTab("adduser")}>Add-User</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/about">
                        <p className= {`${activeTab==="About" ? "active" :""}`}   onClick={()=> setActiveTab("About")}>About</p>
                    </NavLink>
                </li>
            </ul>
        </div>
        <NavLink className='btn btn-outline-success' to="/add">+add User</NavLink>
    </nav>
        
        </>
    )
}

export default Navbar;