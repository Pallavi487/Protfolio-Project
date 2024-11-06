import React from "react";
import hero from "../asset/img/hero-bg.jpg";

const Home = () => {
  return (
    <div className=" relative -z-10">
      <img
        src={hero}
        alt="hero-bg-img"
        className="h-screen w-full object-cover  "
      />
      <h1 className="absolute top-64 left-5 text-white text-6xl font-bold">
        Alex Smith <br />{" "}
        <span className="text-2xl font-normal">I am a Developer</span>
      </h1>
    </div>
  );
};

export default Home;
