import React from "react";
import { Filter } from "./types";


const FILTERS : Filter [] = [Filter.Cryptocurrency, Filter.News, Filter.NFT]

const Filters : React.FC=()=>{
    return(
        <div className="container filterContainer">
            <div className="row filterRow">
                <div className="col-md-8 filterCol">
                    <ul className="nav nav-pills filterNav">
                        <li className="nav-item">
                            <button className="nav-link">Todos</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link">Criptomonedas</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link">NFT's</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link">Noticias</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Filters;