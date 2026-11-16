import React from 'react'
import logo from '../assets/logo.png'

const Home = () => {

  const handleApplyNow = () => {
    alert("can you apply?");
  }
  return (
    <>
    <div>
       <div className='h-[627px] w-full bg-linear-to-r from-[#03210F] to-accent flex items-center justify-center  ' >
        <div className='flex gap-8 items-center  justify-between px-20'>
           <div className='flex flex-col gap-4 w-[50%]'>
              <h1 className=' bg-secondary text-subheading px-4  w-68 rounded-lg'>IT Training Institute  |  Kathmandu</h1>
              <h1 className='font-extrabold leading-[1.2] text-6xl text-white '>Learn today,<br/><span className='text-subheading'>lead tomorrow</span></h1>
              <p className='text-white text-[16px]'>Practical IT courses in Digital Marketing, Design, Web, Cybersecurity, 
                Video Editing and UI/UX - with expert mentors, certificate and job support.</p>
                <div className='flex gap-4'>
                    <button onClick={handleApplyNow} className='bg-subheading text-white px-4 py-2 rounded-lg cursor-pointer'>Apply Now</button> 
                    <button className='bg-transparent border-white border-1  text-white px-4 py-2 rounded-lg'>View Courses</button>
                </div>
           </div>
           <div className='bg-primary rounded-3xl flex items-center justify-center border-accent border-1  p-4 w-[50%]' >
              <img src={logo} alt="Digi Learn Logo"className='h-90' />
           </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Home
