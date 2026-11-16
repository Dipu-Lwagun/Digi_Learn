import React from "react";
import { courses } from "../data/courses";

const Coursecard = () => {
  return (
    <>
      <div className="px-16">
        <div className="grid grid-cols-3 gap-4 p-4 ">
          {courses.map((course) => (
            <div
              key={course.id}
              className=" bg-background-light p-4 rounded-lg shadow-xl "
            >
              <div className=" relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover rounded-[10px]"
                />
                <div className="w-full h-48 bg-linear-to-t from-primary to-accent-[0%] absolute top-0 left-0  ">
                  <h1 className="text-heading  bg-subheading p-2 rounded-full  font-bold absolute top-2 right-2">
                    {course.duration}
                  </h1>
                </div>

                <h1 className="text-xl font-bold text-primary mt-2 text-center">
                  {course.name}
                </h1>
                <div className="h-0.5 bg-gray-200 my-2 mx-5"></div>
                <p className="font-light text-muted">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Coursecard;
