import { stringify } from "querystring";
import React from "react";
import { Coin } from "./types";

interface Props{
    coins: Coin[],
    search: string | undefined
}
const CryptoTable: React.FC<Props> = ({coins, search }) => {

    const filteredCoins = coins.filter((coin) => 
        coin.name.toLowerCase().includes(String(search).toLowerCase()) 
    )

    return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
            <th scope="col">Precio actual</th>
            <th scope="col">Variacion utimas 24hs</th>
          </tr>
        </thead>
        <tbody>
            {filteredCoins.map((coin, index)=>(
                <tr key={index + 1}>        
                    <th scope="row">{coin.market_cap_rank}</th>
                    <td>{coin.name}</td>
                    <td><img src={coin.image} alt={coin.id}/></td>
                    <td>{coin.current_price}</td>
                    <td>{coin.price_change_percentage_24h}</td>
                </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
/*
<tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
*/