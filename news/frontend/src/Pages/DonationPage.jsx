import React from 'react'
import dexgcash from '../Assets/dexgcash.jpg'

const DonationPage = () => {
  return (

    <div className='grid grid-cols-2'>As a non-profit news site dedicated to providing accurate and up-to-date information about blockchain technology, we rely on the generosity of our readers to keep us running.
         Your donation can help us continue to produce high-quality content that educates and informs people about the potential of blockchain, and its impact on various industries.
         With your support, we can cover the costs of web hosting, content creation, and other essential expenses, while also expanding our coverage and reach. Whether you are a blockchain 
         enthusiast or simply believe in supporting independent journalism, your contribution can make a difference in our ability to bring reliable and unbiased news to the wider
         community. Thank you for considering a donation to our news site, and for helping us promote transparency, innovation, and progress in the world of blockchain.
         <div>
            <div className='ml-24'>
            Gcash QR
            </div>
            <img src={ dexgcash } className='place-items-center' alt='gcash' />
         </div>
         {/* headache my god  feb 27 2023 */}
         {/* feel so tired and my gout is still here :( */}
         {/* march 1 2023 still so tired headache */}
         </div>
  )
}

export default DonationPage