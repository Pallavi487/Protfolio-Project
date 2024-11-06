import React from "react";
import { MdForwardToInbox } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { MdBarChart, MdLightMode } from "react-icons/md";
import { PiBriefcaseMetalBold } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="service-item flex my-10">
      <div className="text-2xl p-6 md:p-5 md:text-4xl lg:p-5 lg:2xl border border-blue-500 rounded-full cursor-pointer bg-blue-500 text-white hover:bg-white hover:text-blue-500 focus:bg-white focus:text-blue-500 transition-colors duration-300">
        {icon}
      </div>
      <div className="ml-2">
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: <MdForwardToInbox />,
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias",
    },
    {
      icon: <BiSpreadsheet />,
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias",
    },
    {
      icon: <MdBarChart />,
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias",
    },
    {
      icon: <CiCalendar />,
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias",
    },
    {
      icon: <MdLightMode />,
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias",
    },
    {
      icon: <PiBriefcaseMetalBold />,
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias",
    },
  ];

  return (
    <div className="mx-2">
      <h1 className="font-extrabold text-3xl underline decoration-blue-500">
        Services
      </h1>
      <p className="my-5">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="services-container grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
