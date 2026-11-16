import React from 'react'
import logo from '../assets/logo.png'
import Breadcrumb from '../components/Breadcrumb'
import Coursecard from '../components/coursecard'

const Course = () => {
  return (
    <>
        <div>
           <div className='h-[299px] w-full bg-linear-to-r from-[#03210F] to-accent flex flex-col gap-4 p-20 justify-center  ' >
            <Breadcrumb />
            
                <h1 className='font-extrabold leading-[1.2] text-6xl text-white'>Our Courses</h1>
                <p className='text-white font-light text-[16px]'>Six practical programs with AI - from 35 days to 2 months.</p>

           </div>
          <div className='bg-[#F1FAF4] '>
            <Coursecard />
          </div>

        </div>
        </>
  )
}

export default Course
