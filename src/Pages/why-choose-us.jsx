import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Logo from "../assets/logo.png";
import { Choose } from "../data/choose";
import FAQ from "../components/FAQ";
import { workpath } from "../data/workpath";

const WhyChooseUs = () => {
  return (
    <>
      <main>
        <section className="h-[299px] w-full bg-linear-to-r from-[#03210F] to-accent flex flex-col gap-4 p-20 justify-center">
          <Breadcrumb />

          <h1 className="font-extrabold leading-[1.2] text-6xl text-white">
            Why choose Digi Learn?{" "}
          </h1>
          <p className="text-white font-light text-[16px]">
            Practical learning, expert mentors, a certificate and job support -
            all in one place.
          </p>
        </section>
        <section className="py-20">
          {Choose.map((Choose, index) => (
            <div
              key={index.id}
              className={`flex justify-around items-center py-5 mx-20 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className=" bg-primary w-[40%] h-65  rounded-[10px] flex justify-center items-center">
                <img
                  src={Choose.image}
                  alt=""
                  className=" rounded-[10px] h-65 w-full "
                />
              </div>
              <div className="w-[50%] ">
                <p className="bg-subheading p-2 w-10 text-center justify-center items-center rounded-full font-bold">
                  {Choose.id}
                </p>
                <h2 className="text-black font-bold text-lg leading-[2]">
                  {Choose.title}
                </h2>
                <p className="text-primary font-medium text-[14px] uppercase ">
                  {Choose.description}
                </p>
              </div>
            </div>
          ))}
        </section>
        <section className="bg-heading py-20">
          <div className="text-center  ">
            <h2 className="text-subheading text-sm font-bold ">HOW IT WORKS</h2>
            <p className="text-white font-bold text-5xl mt-4">
              Your path in 4 steps
            </p>
          </div>
          <div className="flex justify-around mt-10 px-10" >
            {workpath.map((item, index) => (
              <div key={index} className="bg-primary p-5  flex flex-col gap-2 rounded-[10px] w-[20%] ">
                <h2 className=" text-subheading text-3xl font-extrabold">{item.id}</h2>
                <h2 className="text-white font-bold text-lg">
                  {item.title}
                </h2>
                <article className="font-normal text-[#CFE9D8] text-base">
                  {item.discription}
                </article>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#CFE9D8]">
          <FAQ />
        </section>
      </main>
    </>
  );
};

export default WhyChooseUs;
