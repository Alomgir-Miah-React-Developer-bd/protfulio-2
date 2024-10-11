import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMapMarkedAlt } from 'react-icons/fa'

function Contact() {
  return (
    <div className=' bg-black text-white py-20' id='Contact'>
    <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className=' text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className=' flex flex-col md:flex-row items-center md:space-x-12'>
          
           
            <div className=' flex-1'>
           
          <h4 className=' text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h4>
          <p>i'm open to discussing Frontend Development projects or partnership opportunities.</p>
          <div className=' mb-4 mt-8'>
            <FaEnvelope className=' inline-block text-green-400 mr-2'></FaEnvelope>
            <a href=" mailto:mdalomgir2156@gmail.com" className=' hover:underline'>
                mdalomgir2156@gmail.com
            </a>

          </div>
          <div className=' mb-4'>
            <FaPhone className=' inline-block text-green-400 mr-2'></FaPhone>
             <span>+01516581296</span>

          </div>
          <div className=' mb-4'>
            <FaMapMarkedAlt className=' inline-block text-green-400 mr-2'></FaMapMarkedAlt>
           <span>Sylhet,Habiganj,Bangladesh,Country</span>

          </div>

           </div>
            <div className=' flex-1 w-full'>
            <form className=' space-y-4'>
                <div>
                    <label className=' block mb-2' htmlFor="name">Your Name</label>
                    <input className=' w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' type="text" placeholder=' Enter Your Name' />
                </div>
                <div>
                    <label className=' block mb-2' htmlFor="email">Your Email</label>
                    <input className=' w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' type="text" placeholder=' Enter Your Email' />
                </div>
                <div>
                    <label className=' block mb-2' htmlFor="message">message</label>
                    <textarea className=' w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' rows="5" type="text" placeholder=' Enter Your massage' />
                </div>
                <button className=' bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                
            </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact