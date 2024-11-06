import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const ContactDisplay = ({ icon, heading, description }) => {
  return (
    <div className="flex p-5 ">
      <div className="text-2xl text-blue-400 border rounded-full my-1 p-4 bg-slate-300 hover:bg-blue-400 hover:text-white">
        {icon}
      </div>
      <div className="my-1 ml-3">
        <h1 className="font-bold">{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const ContactDetails = [
    {
      icon: <SlLocationPin />,
      heading: "Address",
      description: "A108 Adam Street, New York, NY 535022",
    },
    {
      icon: <IoCallOutline />,
      heading: "Call Us",
      description: "+1 5589 55488 55",
    },
    {
      icon: <TfiEmail />,
      heading: "Email Us",
      description: "info@example.com",
    },
  ];
  return (
    <div className="mx-2">
      <h1 className="text-2xl font-extrabold underline decoration-blue-400 ">
        {" "}
        Contact
      </h1>
      <p className="my-5">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="lg:flex">
        <div className="shadow-2xl shadow-slate-500 mx-4 my-4 p-3">
          {ContactDetails.map((contact, index) => (
            <div>
              <ContactDisplay
                key={index}
                icon={contact.icon}
                heading={contact.heading}
                description={contact.description}
              />
            </div>
          ))}
        </div>
        <div className="shadow-2xl shadow-slate-500 mx-4 my-4 p-3">
          <div className="flex ">
            <div className="mx-2">
              <label className="font-semibold">Your Name</label>
              <br />
              <input type="text" className="border-2 p-2" />
            </div>
            <div className="mx-2">
              <label className="font-semibold">YourEmail</label> <br />
              <input type="text" className="border-2 p-2" />
            </div>
          </div>
          <div className="mt-2 mx-2">
            <label className=" font-semibold">Subject</label>
            <br />
            <input type="text" className="border-2 p-2 w-full" />
          </div>
          <div className="mt-2 mx-2">
            <label className=" font-semibold">Message</label>
            <br />
            <textarea className="border-2 p-2 w-full " rows={5}></textarea>
          </div>
          <div className="">
            <button className="bg-blue-400 border  rounded-full text-white p-2 text-center">
              Send Message{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
