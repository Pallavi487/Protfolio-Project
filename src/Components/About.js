import React from "react";
import profile from "../asset/img/my-profile-img.jpg";

const About = () => {
  return (
    <div className="mx-2 my-5">
      <div className="">
        <h1 className="font-extrabold text-2xl  underline underline-offset-2 decoration-blue-500">
          {" "}
          About{" "}
        </h1>
        <p className="my-5">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className=" md:flex my-2">
        <div className="w-full m-auto md:w-4/12 wwww">
          <img src={profile} alt="about-image" className="w-80" />
        </div>
        <div className=" w-full md:w-7/12 px-2">
          <h1 className="font-bold  text-2xl">
            UI/UX Designer & Web Developer.
          </h1>
          <p className="my-2 italic size-">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">▶Birthday:</span> 1 May 1995
            </p>
            <p>
              <span className="font-semibold">▶Age: </span>30
            </p>
            <p>
              {" "}
              <span className="font-semibold">▶Website:</span> www.example.com
            </p>
            <p>
              {" "}
              <span className="font-semibold">▶Degree:</span> Master
            </p>
            <p>
              {" "}
              <span className="font-semibold">▶Phone:</span> +123 456 7890
            </p>
            <p>
              {" "}
              <span className="font-semibold">▶Email:</span> email@example.com
            </p>
            <p>
              {" "}
              <span className="font-semibold">▶City:</span> New York, USA
            </p>
            <p>
              {" "}
              <span className="font-semibold">▶Freelance:</span> Available
            </p>
          </div>
          <div className=" my-5  lg:my-10">
            <p className="text-sm">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
