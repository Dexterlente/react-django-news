import React, { useState, useEffect} from 'react'


const LivePrice = () => {
// make new toggle func
  
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

 const now = new Date();
 let months = 
 ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <>
    {loading ? (
          <p>Loading...</p>
              ) : (
      <div className="grid items-center justify-center my-5"> 
      <div className="border-solid border-4 border-gray-700">
        <div className='text-center text-[36px] font-bold text-white bg-black'>
          DAILY PRICE UPDATE
        </div>
        <p className='text-center text-[14px] bg-black text-white'>via coingecko</p>
        <div className='text-right bg-black text-white font-bold pr-4 pb-2'>
            <div>
                {months[now.getMonth()]} {now.getDate()}, {now.getFullYear()}
            </div>
            <div>
                {now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
        </div>
        <div className='max-w-sm grid grid-cols-4 items-center text-center bg-black text-white border-solid border-b-2 border-gray-400'>
        <p className='justify-self-center px-1'></p>
        <p className='justify-self-center px-1'>CRYPTOCURRENCY</p>
        <p className='justify-self-center px-1'>PRICE</p>
        <p className='justify-self-center px-1'>24hr CHANGE</p>
        </div>
      {crypto.map((cryptos, index) => (
        <div key={cryptos.id} className={`max-w-sm grid grid-cols-4 border-solid border-b-2 bg-black text-white border-gray-400 items-center p-2 ${
                index >= crypto.length - 1 ? 'border-b-0' : ''
              }`}>
                <img src={cryptos.image} className='h-[35px] w-[35px] justify-self-center'/>
                <p className='justify-self-center px-1'>{cryptos.name}</p>
                <p className='justify-self-center px-1'>₱{cryptos.current_price.toLocaleString("en-US")}</p>
                <p className={`justify-self-center px-1 ${cryptos.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {cryptos.price_change_percentage_24h.toFixed(2)} %</p>
              </div>
            ))}
        </div>
      </div> 
      )}
    </>
  )
}

export default LivePrice