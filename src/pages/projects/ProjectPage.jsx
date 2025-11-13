import React from 'react'
import { allProjects } from './projectList'
import homeImage from '../../assets/image/bytebite/home.png';
import menuImage from '../../assets/image/bytebite/menu.png';


// function ProjectCard({ title, description, img, link }) {

//   return (
//     <div className='bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105' >
//       <img src={img} alt={title}  className='w-full h-48 object-cover rounded-t-xl'/>
//       <div className='p-6'>
//       <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>
//       <p className='text-gray-600 mt-2'>{description}</p>
//       <a href={link} className='mt-4 inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all  duration-300 focus:ring-indigo-300'>View Project</a>
//       </div>
//     </div>
//   )
// }

export default function ProjectPage(){
  return(
    <div className=''>
      

      <h2 className='text-4xl font-bold text-center text-gray-900 mb-8 mt-20 bg-gradient-to-r-red bg-gradient-'>My projects</h2>
      <section className='bg-[#fcf9f6] py-16 px-4'>
        
        {allProjects.map((item)=>{
          return <div 
          key={item.id}
          className=''>

            <div className='max-w-7xl grid mx-auto md:grid-cols-2 gap-8 items-center space-y-20'>
                <div className='grid grid-cols-2 gap-4 mt-10'>
                  <img height={120} width={100} src={item.img1} alt={`${item.name}`} 
                  className='rounded-lg object-cover shadow-md'/>

                  <img src={item.img2} alt={`${item.name}`} 
                  className='rounded-lg object-cover shadow-md'/>
              </div>

              <div className='bg-orange-300'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>{item.name}</h2>

                <p className='text bg-gray-600 mb-6'>{item.description}</p>

                <div className='space-y-2'>
                  <h3 className='font-semibold text-lg text-gray-800'>Tech Stack:</h3>
                  <ul className='list-disc pl-6'>
                    {item.tech.map((tech, index)=>{
                      <li key={index} className='text-gray-700'>{tech}</li>
                    })}

                  </ul>
                  {item.tech}
                </div>

              </div>

            </div>
            
          </div>
          
        })}
          
      </section>
      

    </div>
  )
}
