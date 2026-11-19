import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { courses } from "../data/courses";
import { Choose } from "../data/choose";
import { ContactDetails } from "../data/Contactdetails";

const Home = () => {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate("/course");
  };

  const handleDetails = (courseid) => {
    navigate(`/course/${courseid}`);
  };

  const handleApplyNow = () => {
    alert("can you apply?");
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="h-[627px] w-full bg-linear-to-r from-[#03210F] to-accent flex items-center justify-center">
        <div className="flex gap-8 items-center justify-between px-20">
          <div className="flex flex-col gap-4 w-[50%]">
            <p className="bg-secondary text-subheading px-4 w-68 rounded-lg">
              IT Training Institute | Kathmandu
            </p>
            <h1 className="font-extrabold leading-[1.2] text-6xl text-white">
              Learn today,
              <br />
              <span className="text-subheading">lead tomorrow</span>
            </h1>
            <p className="text-white text-[16px]">
              Practical IT courses in Digital Marketing, Design, Web,
              Cybersecurity, Video Editing and UI/UX - with expert mentors,
              certificate and job support.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleApplyNow}
                className="bg-subheading text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Apply Now
              </button>
              <button
                onClick={handlePress}
                className="bg-transparent border-white border-1 text-white px-4 py-2 rounded-lg inline-block"
              >
                View Courses
              </button>
            </div>
          </div>

          <div className="bg-primary rounded-3xl flex items-center justify-center border-accent border-1 p-4 w-[50%]">
            <img
              src={logo}
              alt="Digi Learn Info Tech - IT Training Institute in Kathmandu"
              className="h-90"
            />
          </div>
        </div>
      </section>

      {/* course section */}
      <section className="bg-[#CFE9D8] pt-20 ">
        <div className=" text-center ">
          <p className=" text-primary font-light text-sm">OUR COURSES</p>
          <h1 className="text-black font-extrabold text-2xl leading-[2]">
            Choose your career path{" "}
          </h1>
          <h1 className="text-muted font-light text-sm">
            Hands-on programs built to make you job-ready.{" "}
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-20 px-20 ">
          {courses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className=" bg-background-light p-4 rounded-lg shadow-xl relative h-100 "
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
              <hr className="absolute bottom-12 left-7 right-7 border-gray-300" />

              <button
                onClick={() => handleDetails(course.id)}
                className=" absolute right-1 bottom-1 bg-accent rounded-[10px] text-white p-1 "
              >
                More details
              </button>
            </div>
          ))}
        </div>
        <div className="py-10  text-center">
          <button
            onClick={handlePress}
            className=" bg-primary text-white rounded-full py-2 px-4 font-semibold cursor-pointer hover:px-5 hover:py-4 hover:font-extrabold "
          >
            View All Course
          </button>
        </div>
      </section>

      {/* WhyChooseUs section */}

      <section className="bg-heading py-20">
        <div className="text-center  ">
          <h2 className="text-subheading text-sm font-bold uppercase ">
            Why Choose Us
          </h2>
          <p className="text-white font-bold text-5xl mt-4">
            Learn with confidence
          </p>
        </div>
        <div className="flex justify-around mt-10 px-10">
          {Choose.map((item, index) => (
            <div
              key={index}
              className="bg-primary p-5  flex flex-col gap-2 rounded-[10px] w-[20%] "
            >
              <h2 className="bg-subheading  p-2 w-10 text-center justify-center items-center rounded-full font-bold text-primary">
                {item.id}
              </h2>
              <h2 className="text-white font-bold text-lg">{item.title}</h2>
              <article className="font-normal text-[#CFE9D8] text-base">
                {item.description}
              </article>
            </div>
          ))}
        </div>
      </section>
      {/* about */}
      <section className="mb-10">
        <div className="flex justify-around items-center bg-white mt-20 ">
          <div className="bg-primary h-80 w-130 rounded-[20px]"></div>
          <div className="w-150">
            <h2 className=" font-medium text-sm text-accent ">ABOUT US</h2>
            <h2 className="text-black font-bold text-5xl mt-4">
              Digi Learn Info Tech{" "}
            </h2>
            <article className="text-muted font-normal text-lg mt-4">
              We are an IT training institute in Kathmandu helping students
              build practical skills in digital marketing, design, web,
              security, video editing and UI/UX using AI tools, expert mentors
              and real projects.
            </article>
          </div>
        </div>
      </section>
      {/* contact */}
      <section className="mb-10">
        <div className=" bg-[#CFE9D8] py-20 ">
          <div className="text-center">
            <h2 className=" font-medium text-sm text-accent ">Contact</h2>
            <h2 className="text-black font-bold text-5xl mt-4">
              Visit us or call to enroll{" "}
            </h2>
            <div className=" flex justify-around mt-10 ">
              {ContactDetails.map((item) => (
                <div className="bg-white shadow m-4 p-4 rounded-[20px] w-[25%]  ">
                  <p className="text-accent font-light text-sm">
                    {item.office} Office
                  </p>
                  <h2 className="text-black font-bold text-base ">
                    {item.location}
                  </h2>
                  <a
                    href={`tel:${item.contactnbr}`}
                    className="text-accent font-bold text-[18px]"
                  >
                    {" "}
                    {item.contactnbr}
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

export default Home;
