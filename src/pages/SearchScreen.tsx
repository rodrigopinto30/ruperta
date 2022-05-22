import axios from "axios";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import ResultadoBusqueda from "../components/RestultadoBusqueda";
import { Filter } from "../components/types";
import CryptoTable from "../crypto/CryptoTable";
import NewsTable from "../news/NewsTable";
import NFTGrid from "../nft/NFTGrid";

const SearchScreen: React.FC =()=>{
   
    const {id} = useParams();

    const [cryptoCG, setCryptoCG] = React.useState([]);
    const [dataCMK, setDataCMK] = React.useState([]);
    
    const apiKey = {
        key: "9e658b04-67a7-4546-a1b3-88a63e10f838"
    }

    // const getDataCoingeko = async()=>{
    //     const res = await axios.get('');
    //     // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1
    //     setCryptoCG(res.data);
    // }

    // To get data of CoinMarketCap
    const getDataCMK = async()=>{
        const res = await axios.get('https://api.blockchain.com/v3/exchange')
        console.log(res)
    }

 
    React.useEffect(()=>{
        // getDataCoingeko();
        // getDataCMK();
    },[])

   
    return(
        <>  
 
            <div className="mainContainer">
                <Navbar />
                <Filters />
                <ResultadoBusqueda resultado={id}/> 
                {/* <CryptoTable coins={crypto} search={id}/>      */}
                {/* <NFTGrid search={id}/> */}
                <NewsTable search={id}/> 
            </div>
        </>
    )
}

export default SearchScreen;