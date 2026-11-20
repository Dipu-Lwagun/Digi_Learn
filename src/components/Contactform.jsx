import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactDetails } from "../data/Contactdetails";
import { supabase } from "../lib/supabase";

const Contactform = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setSuccess (false);

      const{error}= await supabase
      .from("contacts")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      if (error){
    throw error;
      }
      setSuccess (true);
      alert("Your message has been submitted successfully! ");
      reset();
    } catch (error){
      console.error ("supabase insert error: ", error.message)
      alert("Failed to send message. Please try again later.");
    }
    
    
  };

  return (
    <>
      <main className="flex justify-around px-20">
        <section className="w-[60%]">
          <div className="bg-white rounded-[20px]">
            <h2 className="text-center font-bold text-2xl">
              Send us a message
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 p-10"
            >
              {/* Full Name */}
              <div>
                <label className="text-black font-semibold">
                  Full Name
                </label>

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
                <label className="text-black font-semibold">
                  Email
                </label>

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
                <label className="text-black font-semibold">
                  Phone Number
                </label>

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

              {/* Message */}
              <div>
                <label className="text-black font-semibold">
                  Message
                </label>

                <textarea
                  placeholder="How can we help you?"
                  rows={5}
                  className="w-full rounded-[10px] p-2 bg-[#CFE9D8] shadow"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
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

export default Contactform;