import React from "react";
import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";

const Coursecard = () => {
const navigate =useNavigate();

  const handleDetails =(courseid) =>{
    navigate(`/course/${courseid}`)
    
  }

  return (
    <>
      <div className="px-16">
        <div className="grid grid-cols-3 gap-4 p-4 ">
          {courses.map((course) => (
            <div
              key={course.id}
              className=" group bg-background-light p-4 rounded-lg shadow-xl relative h-100 transition-all duration-300  hover:skew-y-1  hover:z-10 hover:shadow-2xl "
            >
              <div className=" relative overflow-hidden rounded-[10px]">
                <img
                  src={course.image}
                  alt={course.name}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-[10px] transition-transform duration-700 group-hover:scale-110"
                />
                <div className=" absolute inset-0  h-48 bg-linear-to-t from-primary to-accent/0 duration-700 group-hover:scale-110   " />
                  <h1 className="text-heading  bg-subheading p-2 rounded-full  font-bold absolute top-2 right-2">
                    {course.duration}
                  </h1>

                <h1 className="text-xl font-bold text-primary mt-2 text-center">
                  {course.name}
                </h1>
                <div className="h-0.5 bg-gray-200 my-2 mx-5"></div>
                <p className="font-light text-muted">{course.description}</p>
              </div>
                <hr className="absolute bottom-12 left-7 right-7 border-gray-300" />
              
              <button  onClick={()=> handleDetails(course.id)} className=" absolute right-1 bottom-1 bg-accent rounded-[10px] text-white p-1 " >More details</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Coursecard;
