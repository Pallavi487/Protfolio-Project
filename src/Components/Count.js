import React from "react";
import {
  FaSmile,
  FaClipboardList,
  FaHeadphones,
  FaUsers,
} from "react-icons/fa";

const Count = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10 my-20">
      <div className="flex ">
        <div>
          <FaSmile className="text-blue-500 text-5xl" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold items-center">232</h1>
          <p className="">
            <span className="font-semibold">Happy Clients</span>
            <br />
            consequuntur quae
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <FaClipboardList className="text-blue-500 text-5xl" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold items-center">521</h1>
          <p className="">
            <span className="font-semibold">Projects adipisci </span>
            <br />
            atque cum quia aut
          </p>
        </div>
      </div>

      <div className="flex">
        <div>
          <FaHeadphones className="text-blue-500 text-5xl" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold">1453</h1>
          <p className="">
            <span className="font-semibold">Hours Of Support</span> <br />
            consequuntur quae
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <FaUsers className="text-blue-500 text-5xl" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold">32</h1>
          <p className="">
            <span className="font-semibold">Hard Workers</span> <br />
            rerum asperiores dolor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Count;
