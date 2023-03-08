import React, { useState, useEffect} from 'react'


const LivePrice = () => {

  
const [crypto, setCrypto] = useState([]);
const [loading, setLoading] = useState(true);
const [token, setToken] = useState([]);
const [loadingt, setLoadingt] = useState(true);

const crypto_api ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=bitcoin%2Cethereum%2Cbinancecoin%2Cripple%2Ccardano%2Csolana%2Cdogecoin%2Cpolkadot%2Cmatic-network%2Cavalanche-2%2Cuniswap%2Ctron%2Clitecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false'
useEffect(() => {
  fetch(crypto_api)
    .then((res) => res.json())
    .then((data) => {
      setCrypto(data);
      setLoading(false);
    });
}, []);

const token_api ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=smooth-love-potion%2Caxie-infinity%2Cthe-sandbox%2Cdecentraland%2Cwax%2Cguild-of-guardians%2Cmobox%2Cyield-guild-games%2Cgala%2Cilluvium%2Csplinterlands%2Cgods-unchained%2Cpegaxy-stone&order=market_cap_desc&per_page=100&page=1&sparkline=false'
useEffect(() => {
  fetch(token_api)
    .then((res) => res.json())
    .then((data) => {
      setToken(data);
      setLoadingt(false);
    });
}, []);


  return (
    <>
    {loading ? (
          <p>Loading...</p>
              ) : (
      <div>LivePrice</div> 
      )}
    </>
  )
}

export default LivePrice