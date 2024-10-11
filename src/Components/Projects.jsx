import React from 'react'
import loginimage from '../assets/images/login.jpg'
import productimage from '../assets/images/product.jpg'
import productimage2 from '../assets/images/product2.jpg'



const products = [
    {
        id: 1,
        name: "login",
        technologies: "Frontend Development",
        image: loginimage,
        github: "https://github.com/Alomgir-Miah-react-developer",
    },
    {
        id: 2,
        name: "ecomarce",
        technologies: "Frontend Development",
        image: productimage,
        github: "https://github.com/Alomgir-Miah-react-developer",
    },
    {
        id: 3,
        name: "Product",
        technologies: "Frontend Development",
        image: productimage2,
        github: "https://github.com/Alomgir-Miah-react-developer",
    },
]

function Projects() {
  return (
    <div className=' bg-black text-white py-20' id='Projects'>
    <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className=' text-4xl font-bold text-center mb-12'>My Service</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
         {products.map(products =>(
          
             <div className=' bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105' key={products.id}>
                <img className=' rounded-lg mb-4 w-full h-48 object-cover' src={products.image} alt="image" />
                <h5 className=' text-2xl font-bold mb-2'>{products.name}</h5>
                <p className=' text-gray-400 mb-4'>{products.technologies}</p>
                <a className=' inline-block bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full' target="_blank" rel='noopener noreferre' href={Projects.github}>Github</a>
            </div>
          
         ))}
        </div>
        </div>
        </div>    
  )
}

export default Projects