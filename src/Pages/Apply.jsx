import { useLocation } from 'react-router-dom';
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Applyform from '../components/Applyform';

const Apply = () => {
    const location = useLocation();

    const course =location.state?.course;
  return (
    <>
      <main>
        <section className="h-[299px] w-full bg-linear-to-r from-[#03210F] to-accent flex flex-col gap-4 p-20 justify-center  ">
          <Breadcrumb />

          <h1 className="font-extrabold leading-[1.2] text-6xl text-white">
            Apply
          </h1>
          <p className="text-white font-light text-[16px]">
            Fill in the form and our team will contact you to confirm your
            admission.{" "}
          </p>
          <h1 className="font-extrabold leading-[1.2] text-6xl text-white">
            {course?.name}
          </h1>
        </section>
        <section className='py-10 bg-[#CFE9D8]'>
            <Applyform />
        </section>
      </main>
    </>
  );
};

export default Apply;
