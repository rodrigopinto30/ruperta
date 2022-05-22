import React from "react";
import { NavLink } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";

const HomeScreen: React.FC =()=>{

  
    const[search, setSearch] = React.useState('');

    return(
        <div className="container homeContainer">
            
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-2">
                            <h1>
                                ruperta
                            </h1>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex">
                                    <input className="form-control me-2" 
                                        type="search" 
                                        placeholder="Cotizaciones, investigaciones, noticias y mucho más..."
                                        aria-label="Search" 
                                        onChange={e => 
                                            setSearch(e.target.value)
                                        }
                                    />
                                    <NavLink
                                        to={`/search/${search}`} 
                                        className="btn btn-outline-success linkBoton"
                                        type="submit"
                                        onClick={()=> localStorage.setItem('busqueda','si')}
                                    >
                                        Buscar
                                    </NavLink>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default HomeScreen;