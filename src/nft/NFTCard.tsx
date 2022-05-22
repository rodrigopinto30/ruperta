import React from "react";
import {Nft} from './types';

interface Props{
    nftCard : Nft
}
const NFTCard : React.FC<Props> =({nftCard})=>{
    return(
        <div className="col-md-3 nftColumn">
            <div className="caractContainer">
                <div className="ownerContainer">
                    <img className="ownerImg" src={nftCard.img}/>
                    <h5 className="owner">
                        {nftCard.owner}
                    </h5>
                </div>
                <div className="titlesContainer">
                    <h5 className="name">
                        {nftCard.name}     
                    </h5>
                    <h5 className="price">
                        $ {nftCard.price} 
                    </h5>
                </div>

            </div>
        </div>
    )
}

export default NFTCard;