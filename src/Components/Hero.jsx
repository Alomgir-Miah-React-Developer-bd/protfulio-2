import React from 'react'
import heroimage from '../assets/images/hero.jpg'
function Hero() {
  return (
    <div className=' bg-black text-white text-center py-16'>
        <img className=' mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' src={heroimage} alt="imge" />
        <h1 className=' text-4xl font-bold'>
            I'm {" "}
            <span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Alomgir Miah</span>,
            React developer
        </h1>
        <p className=' mt-4 text-lg text-gray-300'>I spacialize in bulding modern and responsive react applications</p> 
        <div className=' mt-8 space-x-4'>
            <button className='  bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button className='  bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>resume</button>
        </div>
    </div>
  )
}

export default Hero