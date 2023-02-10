import React, { useState } from 'react'
import Daily from '../Assets/Daily.png'
import white from '../Assets/white.png'
import DailyWhite from '../Assets/DailyWhite.png'
import { AiOutlineClose, AiOutlineMenu, AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'


let now = new Date();
let months = 
["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const NavBar = () => {

	const [nav, setNav] = useState(false);
	//toggler if md
	const handleNav = () => {
		setNav(!nav);
	};


  return (
	<div className='bg-[#FAF9F6]'>
	<div className='hidden sm:block'>
			<div className='flex border-b-2 border-gray-300'>
				<Link to={"/"} className="mx-auto">
					<img src={ Daily } className="h-24" alt="Daily Blockchain Ph" />
				</Link>
			</div>
		<div className='relative border-double border-b-4 bg-[#F4F0DB] border-black font-bold'>
			<div className='flex absolute right-8'>
				<Link to={"/articles"} className='mr-4 mt-2 hover:bg-gray-200 rounded-md'>
					Articles
				</Link>
				<Link to={"/liveprice"} className='mr-10 mt-2 hover:bg-gray-200 rounded-md'>
					Live Prices
				</Link>
			</div>
			<div className='font-bold p-2'>
				<div className='pl-10'>
				{dayNames[now.getDay()]},{months[now.getMonth()]} {now.getDate()}, {now.getFullYear()}
				</div>
			</div>
		</div>
	</div>
	{/* mobile device */}

	<div className='border-b-2 border-gray-300 block sm:hidden'>
					<Link to={"/"}>
						<img src={ Daily } className=" mx-auto h-16" alt="Daily Blockchain Ph" />
					</Link>
			</div>
			<div className='relative'>
			<div className='font-bold bg-[#F4F0DB] sm:hidden pt-2 border-double border-b-4 border-black flex'>
	
				<div className='pl-2 mb-2'>
					{months[now.getMonth()]} {now.getDate()}, {now.getFullYear()}
				</div>
				<div className='pl-2 mb-2'>
					{dayNames[now.getDay()]}
				</div>
						<div onClick={handleNav} className="block sm:hidden absolute right-2">
								{nav ? "" : <AiOutlineMenu size={25} />}
						</div>
					</div>
			</div>
			{/* NAV transition */}
		<div className={ nav ? "absolute right-0 sm:right-0 text-black top-0 w-full h-screen bg-gray-500 ease-in-out duration-500 z-50"
							: "ease-in-out duration-500 top-0 h-screen absolute right-[-500%] bg-gray-500"}>

				<div onClick={handleNav} className='mt-2 ml-2' size={25}>
						{" "}
						<AiOutlineClose size={20} />{" "}
					</div>

					{/* {Mobile} */}
			<div>
				<div onClick={handleNav} className='hover:bg-gray-200 mt-14 ml-8 font-bold rounded-md'>
					ARTICLES
				</div>
				<div onClick={handleNav} className='hover:bg-gray-200 ml-8 mt-1 font-bold rounded-md'>
					LIVE PRICES
				</div>
				<div className='mt-20'>
					<img src={ white } alt="Daily Blockchain" />
				<	img src={ DailyWhite } className="pr-2" alt="Daily Blockchain" />
				<div className='flex justify-center font-bold'>
				<AiOutlineCopyrightCircle size={30}/> 2023
				</div>
				</div>
			</div>
			
		</div>
</div>

  )
}

export default NavBar