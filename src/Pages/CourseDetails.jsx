import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetails = () => {
  const { id } = useParams();

  const Course = courses.find((item) => item.id.toString() === id);

  if (!Course) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Oop Course not found!
        </h1>
      </div>
    );
  }

  const navigate = useNavigate();
  const handleApplyNow = () => {
    navigate("/Apply", {
      state: { course: Course },
    });
  };

  return (
    <>
      <div className="h-[299px] w-full bg-linear-to-r from-[#03210F] to-accent flex flex-col gap-4 p-20 justify-center  ">
        <Breadcrumb />
        <h1 className="font-extrabold leading-[1.2] text-6xl text-white">
          {Course.name}
        </h1>
        <p className="text-white font-light text-[16px]">
          {Course.description}
        </p>
      </div>

      <div className="grid grid-cols-3 p-5 gap-10  bg-[#F1FAF4] ">
        <div className=" col-span-2 ">
          <div className="gap-5 flex flex-col ">
            <div className="bg-white p-8  rounded-[20px] shadow">
              <h1 className=" text-black font-extrabold text-2xl leading-[2]">
                Course overview{" "}
              </h1>
              <p className="text-muted font-normal text-[17px] ">
                {Course.overview}{" "}
              </p>
            </div>
            <div className="bg-white p-8  rounded-[20px] shadow">
              <h1 className=" text-black font-extrabold text-2xl leading-[2]">
                What you will learn{" "}
              </h1>
              {Course.whatYouLearn.map((item, index) => (
                <div className="flex items-center gap-4  ">
                  <div className="bg-black h-3 w-3 rounded-full border-subheading border-3" />
                  <p key={index} className="text-black font-normal text-[17px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white p-8  rounded-[20px] shadow">
              <h1 className=" text-black font-extrabold text-2xl leading-[2]">
                Who is this course for?{" "}
              </h1>
              <p className="text-muted font-normal text-[17px] ">
                {Course.whoIsThisFor}{" "}
              </p>
            </div>
            <div className="bg-white p-8  rounded-[20px] shadow">
              <h1 className=" text-black font-extrabold text-2xl leading-[2]">
                Course features{" "}
              </h1>
              <div className="flex  gap-4">
                {Course.features.map((item, index) => (
                  <h2
                    key={index}
                    className="bg-[#E3F6E9] px-[18px] py-[10px] rounded-full text-primary font-bold  "
                  >
                    {item}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}

        <div className="bg-white p-8 h-fit  rounded-[20px] shadow">
          <p className="text-accent font-normal text-[17px] ">Course Fee </p>
          <h1 className=" text-accent font-extrabold text-2xl leading-[2]">
            RS. {Course.price}{" "}
          </h1>
          <div className="flex justify-between py-2">
            <p className="text-muted font-normal text-[17px] "> Duration </p>
            <p className="text-black font-semibold text-[17px] ">
              {" "}
              {Course.duration}{" "}
            </p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-muted font-normal text-[17px] "> Certificate </p>
            <p className="text-black font-semibold text-[17px] "> Provided </p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-muted font-normal text-[17px] "> Job support </p>
            <p className="text-black font-semibold text-[17px] "> 100% </p>
          </div>
          <hr className="  border-gray-300 mt-2" />

          <button
            onClick={handleApplyNow}
            className="mt-5 w-full bg-secondary text-white font-bold py-4 rounded-[10px] hover:bg-accent hover:text-black transition-all duration-300 "
          >
            Apply Now →
          </button>
          <button className="mt-5 w-full text-white font-bold py-4 border border-secondary rounded-[10px] hover:bg-accent hover:text-black transition-all duration-300 ">
            <a
              href="tel:+9779747540037"
              className="text-secondary font-semibold hover:underline"
            >
              call 9747540037
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
