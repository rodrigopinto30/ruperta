import React from "react";
import NFTCard from "./NFTCard";
import { Nft } from "./types";

interface Props{
    search: string | undefined
}

const NFTGrid : React.FC<Props> =({search})=>{

    const nfts = [
        {
            id: 1,
            name: "perro",
            price: 12,
            owner: "OQL-pepe",
            img: "./src/img/arquitectura.PNG",
        },
        {
            id: 2,
            name: "paraiso",
            price: 102,
            owner: "martatattta",
            img: "../img/arquitectura.PNG",
        },{
            id: 3,
            name: "mesa oscura",
            price: 1222,
            owner: "un chino",
            img: "../img/arquitectura.PNG",
        },{
            id: 4,
            name: "teclado de oro",
            price: 1266,
            owner: "roberto",
            img: "../img/arquitectura.PNG",
        },{
            id: 5,
            name: "tarde-noche",
            price: 125,
            owner: "wddw-aa",
            img: "../img/arquitectura.PNG",
        },
    ]

    return(
        <div className="container nftContainer">
            <p className="parrafoResultado"> 
                El resultado de <span> {search} </span> es: 
            </p>
            <div className="row nftRow">
                    {
                        nfts.map((nft) =>(
                           // nft.name === search
                            1 === 1
                                ?
                                    <NFTCard key={nft.id} nftCard={nft}/>
                                :
                                    <></> 
                        ))
                    }
            </div>
        </div>
    )
}

export default NFTGrid;