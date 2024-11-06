import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Count from "./Count";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <div className=" flex h-96 lg:h-full overflow-y-auto">
      <div className="w-0 lg:w-3/12">
        <Sidebar />
      </div>
      <div className="w-full  ml-1 ">
        <Home />
        <About />
        <Count />
        <Skills />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
