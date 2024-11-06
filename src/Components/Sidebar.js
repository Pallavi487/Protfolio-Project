import React from "react";
import { Link } from "react-router-dom";
import profile from "../asset/img/my-profile-img.jpg";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaCogs,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaSkype, // Importing the Skype icon
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className=" hidden lg:block  fixed   h-screen text-white text-center overflow-y-scroll"
      style={{ backgroundColor: "#040b14" }}
    >
      <div className="mx-8">
        <img
          src={profile}
          alt="Hero-image"
          className="rounded-full w-48 mx-auto p-5"
        />
        <h3 className=" my-1 font-extrabold text-2xl">Alex Smith</h3>
        <div className="flex space-x-4  justify-center mx-auto my-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-400 rounded-xl p-1"
          >
            <FaFacebookF className="size-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-400 rounded-xl p-1"
          >
            <FaLinkedinIn className="size-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-400 rounded-xl p-1"
          >
            <FaGithub className="size-5" />
          </a>
          {/* Adding Skype link and icon */}
          <a
            href="https://skype.com"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-400 rounded-xl p-1"
          >
            <FaSkype className="size-5" />
          </a>
        </div>
      </div>
      <nav className="w-full flex flex-col text-left space-y-4 ml-8 my-5">
        <Link className="flex items-center space-x-2 text-lg  hover:text-blue-300">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link className="flex items-center space-x-2 text-lg  hover:text-blue-300">
          <FaUser />
          <span>About</span>
        </Link>
        <Link className="flex items-center space-x-2 text-lg  hover:text-blue-300">
          <FaFileAlt />
          <span>Resume</span>
        </Link>
        <Link className="flex items-center space-x-2 text-lg  hover:text-blue-300">
          <FaBriefcase />
          <span>Portfolio</span>
        </Link>
        <Link className="flex items-center space-x-2 text-lg  hover:text-blue-300">
          <FaCogs />
          <span>Services</span>
        </Link>
        <Link className="flex items-center space-x-2 text-lg  hover:text-blue-300">
          <span>Dropdown</span>
        </Link>
        <Link className="flex items-center space-x-2 text-lg  hover:text-blue-300">
          <FaEnvelope />
          <span>Contact</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
