import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC =()=>{
    return(
        <div className="headerContainer" >
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/">Ruperta</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item" >
                                <a className="nav-link active" aria-current="page" href="#">Crypto</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>      
                        </ul >
                        <form className="d-flex" >
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Header;

/*
<ul>
                <Link to="/"> inicio </Link>
                <Link to="/cryptocurrency"> CRYPTOCURRENCY </Link>
                <Link to="/nft"> NFT </Link>
                <Link to="/news"> NEWS </Link>
            </ul> */