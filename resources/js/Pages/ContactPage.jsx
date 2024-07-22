import InfoComponent from "@/Components/About/InfoComponent";
import InputComponent from "@/Components/InputComponent";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPage = ({ title, auth }) => {
  const contactInfo = [
    {
      icon: <MdEmail />,
      title: "Email",
      description: "beritaterkini@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      description: "+62 812 3456 7890",
    },
    {
      icon: <FaLocationDot />,
      title: "Address",
      description: "Jl. Jendral Sudirman No. 1, Jakarta, Indonesia",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Head title={title} />
      <Navbar title={title} auth={auth}>
        <h1 className="mt-10 text-center text-xl font-bold">
          Any question or comment? Please contact us
        </h1>
        <div className="mx-auto mt-5 max-w-md">
          <form>
            <div className="flex space-x-2">
              <div className="w-full">
                <InputComponent
                  id="email"
                  label="Email"
                  type="email"
                  required
                />
              </div>
              <div className="w-full">
                <InputComponent id="name" label="Name" type="text" required />
              </div>
            </div>
            <button className="mt-3 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Send
            </button>
          </form>
        </div>

        <div className="md:mt-30 mt-24 flex flex-col items-center justify-around space-y-5 bg-gray-800 p-4 md:flex-row md:space-y-0 md:pb-10 lg:mt-44">
          {contactInfo.map((info, index) => (
            <InfoComponent
              key={index}
              icon={info.icon}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
      </Navbar>
      <div className="absolute bottom-0 -z-10 h-72 w-full bg-blue-500 md:h-32 lg:h-80"></div>
    </div>
  );
};

export default ContactPage;
