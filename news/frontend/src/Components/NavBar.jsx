import React from 'react'
import Daily from '../Assets/Daily.png'

const NavBar = () => {
  return (
	<div>
			<div className='h-32 w-full'>
			<img src={ Daily } className="content-center" alt="Daily Blockchain Ph" />
			</div>
		<div className='bg-slate-100 border-2'>NavBar</div>
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button
</button>
	</div>
  )
}

export default NavBar