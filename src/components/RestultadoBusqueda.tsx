import React from "react";

interface Props{
    resultado: string | undefined
}

const ResultadoBusqueda : React.FC<Props> =({resultado})=>{
    return(
        <div className="container resultContainer">
            <div className="resultRow">
                <div className="col-md-8 resultColumn">
                    <span>Resultado de <strong>{resultado}</strong> encontrados: </span>
                </div>
            </div>
        </div>
    )
}

export default ResultadoBusqueda;