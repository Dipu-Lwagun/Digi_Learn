import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Logo from "../assets/logo.png";
import { courses } from "../data/courses";
import { ContactDetails } from "../data/Contactdetails";

const About = () => {
  return (
    <main>
      <section className="h-[299px] w-full bg-linear-to-r from-[#03210F] to-accent flex flex-col gap-4 p-20 justify-center">
        <Breadcrumb />

        <h1 className="font-extrabold leading-[1.2] text-6xl text-white">
          About Digi Learn Info Tech
        </h1>
        <p className="text-white font-light text-[16px]">
          An IT training institute in Kathmandu helping learners build
          practical, job-ready skills.
        </p>
      </section>

      <section className="grid grid-cols-2 px-30 py-10 gap-4">
        <div>
          <p className="text-primary font-medium">WHO WE ARE</p>
          <h2 className="text-black font-extrabold text-2xl leading-[2]">
            Learn today, lead tomorrow
          </h2>
          <p className="text-primary font-normal text-[15px]">
            Digi Learn Info Tech offers practical courses in Digital Marketing,
            Graphic Design, Website Development, Cybersecurity + App
            Development, Video Editing and UI/UX Design - all taught with the
            help of AI tools.
            <br />
            <br />
            Our students learn by doing: real projects, expert mentors, a
            certificate on completion and job support to help start their
            career.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={Logo}
            alt="office photo"
            className="h-70 rounded-[20px] border border-accent"
          />
        </div>
      </section>
      {/* mission and vision section */}

      <section className="bg-[#F1FAF4] h-100 ">
        <div className=" flex justify-between gap-8 px-20  py-10">
          <div className="bg-white space-y-2 p-8 rounded-[20px] shadow ">
            <p className="bg-subheading p-2 w-10 text-center justify-center items-center rounded-full font-bold">
              1
            </p>
            <h1 className="text-primary font-medium text-[14px] uppercase">
              Our Mission
            </h1>
            <p className="text-black font-bold text-lg">
              To give every learner practical IT skills they can use to start
              and grow a career.
            </p>
          </div>
          <div className="bg-white space-y-2 p-8 rounded-[20px] shadow ">
            <p className="bg-subheading p-2 w-10 text-center justify-center items-center rounded-full font-bold">
              2
            </p>
            <h1 className="text-primary font-medium text-[14px] uppercase">
              Our Vision
            </h1>
            <p className="text-black font-bold text-lg">
              To be a trusted place where students learn today and lead
              tomorrow.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-primary py-10">
        <div className="flex justify-around">
          <div className="text-center">
            <h1 className="text-subheading font-extrabold text-4xl ">
              {courses.length}
            </h1>
            <p className="text-white font-medium text-base">Industry courses</p>
          </div>
          <div className="text-center">
            <h1 className="text-subheading font-extrabold text-4xl ">
              {ContactDetails.length}
            </h1>
            <p className="text-white font-medium text-base">Our Offices</p>
          </div>
          <div className="text-center">
            <h1 className="text-subheading font-extrabold text-4xl ">100%</h1>
            <p className="text-white font-medium text-base">Job support</p>
          </div>
          <div className="text-center">
            <h1 className="text-subheading font-extrabold text-4xl ">
              Certified
            </h1>
            <p className="text-white font-medium text-base">Training</p>
          </div>
        </div>
      </section>
      <section className="bg-white  mt-4 ">
        <div className=" text-center ">
          <p className=" text-accent font-medium text-sm">HOW WE TEACH</p>
          <h1 className="text-black font-extrabold text-2xl leading-[2]">
            Learn. Practice. Get job-ready.
          </h1>
        </div>
        <div>
          {/* 3 cards */}
          <div className=" grid grid-cols-3  justify-items-center  py-10 gap-8 px-20">
            <div className="bg-[#CFE9D8] space-y-1 p-4 rounded-[20px] shadow ">
              <p className="bg-linear-to-l from-[#03210F] to-accent g p-2 w-10 text-center justify-center items-center rounded-full font-bold text-white">
                1
              </p>

              <h1 className="text-black font-bold text-lg">Learn</h1>
              <h1 className="text-muted font-light text-sm">
                Clear lessons from expert mentors, supported by AI tools.
              </h1>
            </div>
            <div className="bg-[#CFE9D8] space-y-1 p-4 rounded-[20px] shadow ">
              <p className="bg-linear-to-l from-[#03210F] to-accent g p-2 w-10 text-center justify-center items-center rounded-full font-bold text-white">
                2
              </p>

              <h1 className="text-black font-bold text-lg">Practice</h1>
              <h1 className="text-muted font-light text-sm">
                Hands-on, practical projects in every course.{" "}
              </h1>
            </div>
            <div className="bg-[#CFE9D8] space-y-1 p-4 rounded-[20px] shadow ">
              <p className="bg-linear-to-l from-[#03210F] to-accent g p-2 w-10 text-center justify-center items-center rounded-full font-bold text-white">
                3
              </p>

              <h1 className="text-black font-bold text-lg">Get job-ready</h1>
              <h1 className="text-muted font-light text-sm">
                Certificate on completion and job support.{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* office section */}
      <section className="bg-[#CFE9D8]">
        <div className="py-10 px-20">
          <div className="text-center">
            <p className="text-secondary font-medium text-sm">OUR OFFICES</p>
            <h1 className="text-black font-extrabold text-2xl leading-[2] capitalize">
              We have multiple branches across Nepal
            </h1>
           
            <div className="flex justify-around gap-4 mt-10 ">
              {ContactDetails.map((item, index) =>(
                <div key={index}  className="border-muted border rounded-[10px] shadow  w-[25%] px-5">
                  <h1 className="text-secondary font-medium text-sm" >{item.office}{" "} Office</h1>
                  <h1 className=" text-black font-bold text-lg">{item.location}</h1>
                  <a href={`tel:${item.contactnbr}`} className='text-secondary font-bold text-[18px]' > {item.contactnbr}
                  </a>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default About;
