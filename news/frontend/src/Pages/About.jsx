import React from 'react'
import black from '../Assets/black.png'

const About = () => {
  return (
    <>  
        <div className='hidden md:block'>
            <div className='grid grid-cols-2'>
                    <div className='align-center items-center'>
                        <img src={ black } className='mx-auto' alt='thedailyblockchainph' />
                    </div>
                    <div className='mt-28 w-4/5 mx-4'>
                        <div className='text-[68px] text-center mb-4 font-bold'>
                            ABOUT
                        </div>
                    With a small team of like-minded individuals, The founders founded a company called The Daily Blockchain PH. Their mission was to provide news and updates about the latest developments in the world of blockchain, cryptocurrency, 
                    and decentralized finance. They aimed to be the go-to source of information for individuals and businesses who wanted to stay ahead of the game.
                    </div>
                </div>
                <div className='mx-44 mb-8 text-center'>
                    <div className='text-[60px] font-bold'>
                    Vission/Mission
                    </div>
                    <div className='text-start'>
                    Vision: To become the primary destination for comprehensive news, analysis, and education on the blockchain industry in the Philippines.
                <br />
                <br />
        Mission: Our mission is to provide an unparalleled news experience that covers the latest developments and trends in blockchain and cryptocurrency. We believe that accurate and reliable information is essential for our audience to make informed decisions, and we are committed to delivering it with the highest standards of journalistic excellence. We also recognize the importance of education in this rapidly evolving field, and we strive to provide in-depth resources and guides for blockchain enthusiasts, students, and professionals. Our goal is to become the most
        trusted and reputable source of blockchain and cryptocurrency news and education in the Philippines, and to foster the growth and adoption of this revolutionary technology.
                </div>
            </div>
        </div>
    </>
  )
}

export default About