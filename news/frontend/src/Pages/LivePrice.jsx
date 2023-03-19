import React, { useState, useEffect} from 'react'
import LOGO from '../Assets/LOGO.png'
import Loading from '../Components/Loading'

const LivePrice = () => {
// make new toggle func
  
const [crypto, setCrypto] = useState([]);
const [loading, setLoading] = useState(true);
const [token, setToken] = useState([]);
const [loadingt, setLoadingt] = useState(true);
// toggle div
const [showDiv1, setShowDiv1] = useState(true);
const [showDiv2, setShowDiv2] = useState(false);

const toggleDiv1 = () => {
  setShowDiv1(true);
  setShowDiv2(false);
};

const toggleDiv2 = () => {
  setShowDiv1(false);
  setShowDiv2(true);
};

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
      <div className='flex items-center justify-center mt-5'>
      <button className='border-sold border-2 rounded-full text-[#FFD700] bg-black border-col border-gray-400 p-2 hover:opacity-60 font-bold mr-2' onClick={toggleDiv1}>Cryptocurrencies</button>
      <button className='border-sold border-2 rounded-full text-[#FFD700] bg-black border-col border-gray-400 p-2 hover:opacity-60 font-bold ml-2' onClick={toggleDiv2}>Gaming Tokens</button>
      </div>
      {showDiv1 && (
        <div>
            {loading ? (
                  <Loading />
                      ) : (
                        <div className='relative'>

              <div className="grid items-center justify-center my-5"> 
              <div className="border-solid border-4 border-gray-700">
                <div className='text-center text-[36px] font-bold text-white bg-black'>
                  DAILY PRICE UPDATE
                </div>
                <p className='text-center text-[14px] bg-black text-white'>via coingecko</p>
                <div className='relative bg-black'>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={ LOGO } className='ml-4 h-[40px] w-[40px]' /> 
                </div>      
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
                <div key={cryptos.id} className={`max-w-md grid grid-cols-4 border-solid border-b-2 bg-black text-white border-gray-400 items-center p-2 ${
                        index >= crypto.length - 1 ? 'border-b-0' : ''
                      }`}>
                         {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img src={cryptos.image} className='h-[35px] w-[35px] justify-self-center'/>
                        <p className='justify-self-center px-1'>{cryptos.name}</p>
                        <p className='justify-self-center px-1'>₱{cryptos.current_price.toLocaleString("en-US")}</p>
                        <p className={`justify-self-center px-1 ${cryptos.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                          {cryptos.price_change_percentage_24h.toFixed(2)} %</p>
                      </div>
                    ))}
                </div>
              </div> 
              </div>
              )}
      </div>
      )}
      {showDiv2 && (
      <div>
        {loadingt ? (
                  <Loading />
                      ) : (
              <div className="grid items-center justify-center my-5"> 
              <div className="border-solid border-4 border-gray-700">
                <div className='text-center text-[36px] font-bold text-white bg-black'>
                  DAILY PRICE UPDATE
                </div>
                <p className='text-center text-[14px] bg-black text-white'>via coingecko</p>
                <div className='relative bg-black'>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={ LOGO } className='ml-4 h-[40px] w-[40px] ' />
                </div>    
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
                <p className='justify-self-center px-1'>Gaming Token</p>
                <p className='justify-self-center px-1'>PRICE</p>
                <p className='justify-self-center px-1'>24hr CHANGE</p>
                </div>
              {token.map((cryptos, index) => (
                <div key={cryptos.id} className={`max-w-sm grid grid-cols-4 border-solid border-b-2 bg-black text-white border-gray-400 items-center p-2 ${
                        index >= crypto.length - 1 ? 'border-b-0' : ''
                      }`}>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img src={cryptos.image} className='h-[35px] w-[35px] justify-self-center bg-white'/>
                        <p className='justify-self-center px-1'>{cryptos.name}</p>
                        <p className='justify-self-center px-1'>₱{cryptos.current_price.toLocaleString("en-US")}</p>
                        <p className={`justify-self-center px-1 ${cryptos.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                          {cryptos.price_change_percentage_24h.toFixed(2)} %</p>
                      </div>
                    ))}
                </div>
              </div> 
              )}
      </div>

      )}
    </>
  )
}

export default LivePrice