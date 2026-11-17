import React from "react";
import Logo from "../assets/logo.png";
import { navLinks } from "../data/navLinks";
import { NavLink } from "react-router-dom";
import { ContactDetails } from "../data/Contactdetails";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary  py-4 mt-5">
        <div className="flex justify-between items-center  px-10">
          <div>
            <img src={Logo} alt="Logo" className="h-50" />
            <h2 className="font-light text-white ">
              Learn today, lead tomorrow.
            </h2>
            <h2 className="font-light text-white ">
              IT training institute in Kathmandu.
            </h2>
          </div>
          <div>
            <h1 className="text-subheading font-medium">Pages</h1>
            <div>
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `font-light transition-colors duration-800 ${
                      isActive
                        ? "text-subheading"
                        : " text-white hover:text-subheading "
                    }`
                  }
                >
                  <h2>{item.name}</h2>
                </NavLink>
              ))}
            </div>
          </div>

          {/* contact section  */}

          <div>
            <h1 className="text-subheading font-medium uppercase text-center">
              Contacts
            </h1>
            <div className=" grid grid-cols-2 gap-4  ">
              {ContactDetails.map((item) => (
                <div className=" shadow shadow-accent w-60 text-center rounded-[10px] ">
                  <a href={`tel:${item.contactnbr}`} className='text-white font-bold text-[18px]' > {item.contactnbr}
                  </a>
                  <h2 className="font-light text-white ">{item.office}</h2>
                  <h2 className="font-light text-white ">{item.location}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className=" border-accent mx-10 mt-10 mb-10" />
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Digi Learn. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
