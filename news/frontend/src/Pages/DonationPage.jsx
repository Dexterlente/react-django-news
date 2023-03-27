import React from 'react'
import dexgcash from '../Assets/dexgcash.jpg'

const DonationPage = () => {
  return (
  <div>
     <div className='hidden md:block'>
            <div className='text-center font-bold mt-6 text-[62px]'>
              Donate To Us
            </div>
            <div className='grid grid-cols-2 mb-64'>
                <div className='text-left my-12 md:w-7/12 mx-auto'>
                As a non-profit news site dedicated to providing accurate and up-to-date information about blockchain technology, we rely on the generosity of our readers to keep us running.
                  Your donation can help us continue to produce high-quality content that educates and informs people about the potential of blockchain, and its impact on various industries.
                  With your support, we can cover the costs of web hosting, content creation, and other essential expenses, while also expanding our coverage and reach. Whether you are a blockchain 
                  enthusiast or simply believe in supporting independent journalism, your contribution can make a difference in our ability to bring reliable and unbiased news to the wider
                  community. Thank you for considering a donation to our news site, and for helping us promote transparency, innovation, and progress in the world of blockchain.
                </div>
            <div className='my-12'>
                <div className='flex justify-center items-center text-[38px]'>
                Gcash QR
                </div>
                <img src={ dexgcash } className='mx-auto h-48 w-48' alt='gcash' />
            </div>
            {/* headache my god  feb 27 2023 */}
            {/* feel so tired and my gout is still here :( */}
            {/* march 1 2023 still so tired headache */}
            </div>
        </div>
        {/* mobile device and below */}
        <div className='block md:hidden'>
           <div className='text-center'>
             <p className='font-bold mt-8 text-[34px]'> Donate To Us </p>
            </div>
            <div className='text-center mx-10 my-12'>
                As a non-profit news site dedicated to providing accurate and up-to-date information about blockchain technology, we rely on the generosity of our readers to keep us running.
                  Your donation can help us continue to produce high-quality content that educates and informs people about the potential of blockchain, and its impact on various industries.
                  With your support, we can cover the costs of web hosting, content creation, and other essential expenses, while also expanding our coverage and reach. Whether you are a blockchain 
                  enthusiast or simply believe in supporting independent journalism, your contribution can make a difference in our ability to bring reliable and unbiased news to the wider
                  community. Thank you for considering a donation to our news site, and for helping us promote transparency, innovation, and progress in the world of blockchain.
            </div>
            <div className='content-center text-center items-center mb-12'>
                <p className='text-[24px] mb-3'>Gcash QR</p>
                <img src={ dexgcash } className='mx-auto h-48 w-48' alt='gcash' />
            </div>


        </div>
    </div>
  )
}

export default DonationPage