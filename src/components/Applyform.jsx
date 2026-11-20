import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { ContactDetails } from "../data/Contactdetails";
import { useLocation } from "react-router-dom";
import { courses } from "../data/courses";

const Applyform = () => {
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const selectedCourse = location.state?.course?.id || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <main className="flex justify-around px-20">
        <section className="w-[60%]">
          <div className="bg-white rounded-[20px]">
            <h2 className="text-center font-bold text-2xl">
              apply for admission
            </h2>

            <form
              // onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 p-10"
            >
              {/* Full Name */}
              <div>
                <label className="text-black font-semibold">Full Name</label>

                <input
                  type="text"
                  className="w-full rounded-[10px] p-2 bg-[#CFE9D8] shadow"
                  placeholder="Your full name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-black font-semibold">Email</label>

                <input
                  type="email"
                  className="w-full rounded-[10px] p-2 bg-[#CFE9D8] shadow"
                  placeholder="youremail@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-black font-semibold">Phone Number</label>

                <input
                  type="tel"
                  maxLength={10}
                  className="w-full rounded-[10px] p-2 bg-[#CFE9D8] shadow"
                  placeholder="9800000000"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* select course*/}
              <div>
                <label className="text-black font-semibold">Course</label>

                <select
                  className="w-full rounded-[10px] p-2  bg-[#CFE9D8] shadow"
                  defaultValue={selectedCourse}
                  {...register("course", {
                    required: "Please select a course",
                  })}
                  name="Course"
                  id=""
                >
                  <option>Choose Course</option>
                  {courses.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                  {errors.course && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.course.message}
                    </p>
                  )}
                </select>
              </div>

              {/* Branch select */}

              <div>
                <label>Preferred branch</label>

                <div className="grid grid-cols-2">
                  {ContactDetails.map((item) => (
                    <label>
                      <input
                        type="redio"
                        value={item.office}
                        className="peer hidden"
                        {...register("office", {
                          required: "Please select a branch",
                        })}
                      />

                      <div
                        key={item.office}
                        className="bg-[#CFE9D8] m-4 p-4 rounded-[10px]"
                      >
                        <div className="flex justify-between">
                          <div>
                            <p className="text-accent font-medium text-base">
                              {item.office} Office
                            </p>

                            <h2 className="text-black font-medium text-base">
                              {item.location}
                            </h2>
                          </div>
                          <div>
                            <div className=" border-2 border-primary h-5 w-5 rounded-full flex justify-center items-center ">
                              <div className="  bg-primary h-3 w-3 rounded-full opacity-0 peer-checked:opacity-100 " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* Success Message */}
              {success && (
                <p className="text-green-600 text-sm">
                  Form submitted successfully!
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary text-white py-2 rounded-[20px] mt-4 text-base font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Contact Details */}
        <section>
          <div>
            {ContactDetails.map((item) => (
              <div
                key={item.office}
                className="bg-white m-4 p-4 rounded-[20px]"
              >
                <p className="text-accent font-light text-sm">
                  {item.office} Office
                </p>

                <h2 className="text-black font-bold text-base">
                  {item.location}
                </h2>

                <a
                  href={`tel:${item.contactnbr}`}
                  className="text-accent font-bold text-[18px]"
                >
                  {item.contactnbr}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Applyform;
