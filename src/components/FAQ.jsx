import { useState } from 'react';
import React from "react";
import { faqdata } from "../data/faqdata";

const FAQ = () => {
 const [openId, setOpenId] = useState(null);

 const handleToggle = (index) =>{
    setOpenId(openId === index ? null: index)
 }

  return (
    <>
      <main>
        <section className='py-20'>
          <div className="text-center py-10">
            <h2 className="text-center text-accent font-bold text-[13px]">FAQ</h2>
            <h2 className="font-extrabold text-4xl text-black">
              Common questions
            </h2>
          </div>

          {faqdata.map((item, index) => (
            <div onClick={()=>handleToggle (index)} key={index} className="bg-white m-4 p-4 rounded-[20px] flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-black">
                  {item.question}
                </h3>
                {openId === index && (
                    <p className="font-normal text-base text-muted">
                  {item.answer}
                </p>
                )}
              </div>
              <div className="bg-primary px-2 rounded-full ">
                <p onClick={()=>handleToggle(index)}  className=" cursor-pointer text-white  font-bold text-lg text-center ">{openId ===index ? " - ":" + "}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default FAQ;
