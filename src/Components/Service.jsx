import React from 'react'



const Services= [
    {
        id: 1,
        title: "web design",
        description: "Creating visually appealing and user-friendly web designs.",
    },
    {
     
        id: 2,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",

    },
    {

        id: 3,
        title: "Backend Development",
        description: "Developing robust server-side logic and databases.",

    }
]

function Service() {
  return (
    <div className=' bg-black text-white py-20' id='Service'>
        <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className=' text-4xl font-bold text-center mb-12'>My Service</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {Services.map(Service =>(
                    <div className=' bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105' key={Service.id}>
                     
                     <div className=' text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                      {Service.id}
                     </div>
                     <h4 className=' mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        {Service.title}
                     </h4>
                     <p className=' mt-2 text-gray-300'>{Service.description}</p>
                     <a className=' mt-4 inline-block text-green-400 hover:text-blue-500' href="#">Read More</a>
                    </div>
                ))}
            </div>
            </div>
            </div>
  )
}

export default Service