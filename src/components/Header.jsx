import React from 'react'

export default function Header() {
  return (
    <div className='p-4 space-x-5 hover:text-orange-1000 bg-amber-300 flex flex-wrap items-center justify-between'>
      <div className=''>
        <h1 className='text-white font-semibold text-2xl cursor-pointer hover:text-red-400'>My Receipe App</h1>
      </div>
      

      <div className='text-white ease-in hover:text-orange-1000'>
        <a href="/about-us"
        className='text-white text-lg hover:text-orange-600 transition-colors duration-300'>About Us</a>
        {/* <a href="">Login</a> */}
      </div>
    </div>
  )
}
