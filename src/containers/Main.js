import React from "react";
import Header from "../components/header/Header";
import ImageSlider from '../components/imageSlider/ImageSlider';
// import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Courses from "./courses/Courses";
// import Blogs from "./blogs/Blogs";
// import Footer from "../components/footer/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
// import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
// import Profile from "./profile/Profile";
import Videos from '../components/videoShowcase/VideoShowcase'

import "./Main.scss";

const Main = () => {


  return (
    <div className="main">
      <Header />
      <ImageSlider />

      <div className="main-content">
        {/* <ImageSliders /> */}
        <Courses />

        <Projects />

        <Twitter />

        <Videos />
        {/*
        <Education />
        <WorkExperience />
       
        {/* <Blogs /> */}
        {/* <Talks />
       
        <Podcast />
        <Profile /> */}
        {/* <Footer /> */}
        {/* <Top /> */}
      </div>
    </div>
  );
};

export default Main;
