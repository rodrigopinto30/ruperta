import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC=()=>{

    const[search, setSearch] = React.useState("");

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid navbarContainer">
                <Link className="navbar-brand" to="/">ruperta</Link>
                <div className="navbar formContainer" id="navbarSupportedContent">
                    <form className="form" role="search">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Buscar" 
                            aria-label="Search"
                            onChange={e => setSearch(e.target.value)}
                        />
                        <NavLink to={`/search/${search}`} className="btn btn-outline-success" type="submit">Buscar</NavLink>
                    </form>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;