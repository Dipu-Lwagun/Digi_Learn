import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { colors } from '../constents/colors'
import logo from '../assets/logo.png'

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/', active: true },
        { name: 'About', path: '/about', active: false },   
        { name: 'Course', path: '/course', active: false },
        { name: 'Why Choose Us', path: '/why-choose-us', active: false },
        { name: 'Contact', path: '/contact', active: false },
        


    ]
  return (
    <>
        <nav style={{ backgroundColor: colors.white, paddingLeft:'20px', paddingRight:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <img 
            src={logo}
            alt='Digi learn Logo'
            className='h-20 w-auto'
            />
            <div className="flex gap-8">
                {navLinks.map((item)=>(
                    <NavLink 
                    key={item.name} 
                    to={item.path} 
                    end={item.path === '/'}
                    className={({ isActive }) => `text-base font-medium transition-colors duration-200 ${isActive ?
                        'text-body' : 'text-heaing hover:text-accent'
                    }`}
                    > 
                    {item.name}
                    
                    </NavLink>               ))}
            </div>
            <button style={{ backgroundColor: colors.button, color: colors.white, padding: '8px 16px', borderRadius:20, border: 'none', cursor: 'pointer' }}>Apply Now</button>
        </nav>
    </>
  )
}

export default Navbar
