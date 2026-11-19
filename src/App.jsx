import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Course from "./Pages/Course";
import WhyChooseUs from "./Pages/why-choose-us";
import Contact from "./Pages/Contact";
import CourseDetails from "./Pages/CourseDetails";
import CTA from "./components/CTA";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course/:id" element={<CourseDetails />} />
          </Routes>
        </main>
        <CTA />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
