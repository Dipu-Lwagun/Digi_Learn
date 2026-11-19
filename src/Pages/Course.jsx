import React from "react";
import logo from "../assets/logo.png";
import Breadcrumb from "../components/Breadcrumb";
import Coursecard from "../components/coursecard";
import { useNavigate } from "react-router-dom";

const Course = () => {
const navigate =useNavigate ();

const handlePress = ()=>{
  navigate("/Contact")
}

  return (
    <>
      <main>
        <section className="h-[299px] w-full bg-linear-to-r from-[#03210F] to-accent flex flex-col gap-4 p-20 justify-center  ">
          <Breadcrumb />

          <h1 className="font-extrabold leading-[1.2] text-6xl text-white">
            Our Courses
          </h1>
          <p className="text-white font-light text-[16px]">
            Six practical programs with AI - from 35 days to 2 months.
          </p>
        </section>
        <section className="bg-[#F1FAF4] ">
          <Coursecard />
          <section className="mx-20 my-10">
            <div className="w-full bg-linear-to-r from-[#03210F] to-accent py-4 px-10 rounded-[20px] flex justify-between items-center  ">
              <div>
                <h1 className="font-extrabold leading-[1.2] text-2xl text-white">
                  Not sure which course is right for you?
                </h1>
                <p className="text-muted font-medium text-sm mt-2  ">
                  Call us: 9747540037 (Head Office) | 9747962585 (Branch
                  Office){" "}
                </p>
              </div>
              <div>
                <button onClick={handlePress} className="text-base font-bold bg-subheading px-4 py-2 rounded-[30px]">Talk to Us</button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Course;
