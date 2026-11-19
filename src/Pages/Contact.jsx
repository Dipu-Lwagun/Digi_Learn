import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Contactform from '../components/Contactform'
import Map from '../components/map'

const Contact = () => {
  return (
    <>
      <main>
        <section className="h-[299px] w-full bg-linear-to-r from-[#03210F] to-accent flex flex-col gap-4 p-20 justify-center">
        <Breadcrumb />

        <h1 className="font-extrabold leading-[1.2] text-6xl text-white">
        Contact
        </h1>
        <p className="text-white font-light text-[16px]">
          Visit our office, call us, or send a message - we will help you choose the right course.
        </p>
      </section>
  
      <section  className='py-10 bg-[#CFE9D8]'>
        <Contactform />
        <Map />
      </section>
        
      </main>
    </>
  )
}

export default Contact
