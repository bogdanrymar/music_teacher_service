import React, { Fragment } from "react";
import HeroSection from "../Hero-Section/HeroSection";
import CompanySection from "../Company-section/Company";

import AboutUs from "../About-us/AboutUs";
import Courses from "../Courses-section/Courses";
import ChooseUs from "../Choose-us/ChooseUs";
import Features from "../Feature-section/Features";
import FreeCourse from "../Free-course-section/FreeCourse";

import Testimonials from "../Testimonial/Testimonials";

import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const uniteComponents = () => {
  return (
    <Fragment>
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default uniteComponents;
