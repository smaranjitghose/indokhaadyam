import React from "react";
import "./ContactUs.css";
import Footer from "../../components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/Navbar/mobilenavbar";
import GlobalStyle from "../../globalStyles";

const ContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: "700px" });
  return (
    <>
      <GlobalStyle />

      {!isMobile && <Navbar />}
      {isMobile && <MobileNavbar />}
      <div className="w-[95%] min-h-[75vh]   max-w-6xl m-auto ">
        <div className="flex my-28 flex-col   lg:flex-row">
          <div className="basis-1/2 py-6 lg:py-12 bg-white">
            <h1 className="text-center font-bold text-3xl  capitalize">
              Get In touch
            </h1>
            <p className="text-center text-md">
              We are here for you! How can we help ?
            </p>
            <form className="my-12  grid sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex  flex-col flex-start m-auto my-1 w-[80%]">
                <label className="capitalize text-sm block text-left">
                  name*
                </label>
                <input type="text" className=" p-5 border-slate-400" />
              </div>
              <div className="flex   flex-col flex-start m-auto  w-[80%]">
                <label className="capitalize text-sm block text-left">
                  middle name
                </label>
                <input type="text" className=" p-5 border-slate-400" />
              </div>
              <div className="flex flex-col flex-start m-auto  w-[80%]">
                <label className="capitalize text-sm block text-left">
                  last name*
                </label>
                <input type="text" className=" p-5 border-slate-400" />
              </div>
              <div className="flex flex-col flex-start m-auto  w-[80%]">
                <label className="capitalize text-sm block text-left">
                  Phone*
                </label>
                <input type="text" className=" p-5 border-slate-400" />
              </div>
              <div className="flex flex-col flex-start sm:col-span-2 m-auto  w-[80%] sm:w-[90%]">
                <label className="capitalize  text-sm block text-left">
                  Email*
                </label>
                <input type="text" className=" p-5 border-slate-400" />
              </div>
              <div className="flex flex-col flex-start sm:col-span-2 m-auto  w-[80%] sm:w-[90%]">
                <label className="capitalize  text-sm block text-left">
                  Message*
                </label>
                <textarea className="border border-slate-400 h-32"></textarea>
              </div>
            </form>
          </div>
          <div className="basis-1/2 py-6 lg:py-12  bg-orange-100  ">
            <div className="w-[90%] lg:w-[80%] my-6 m-auto">
              <h1 className="font-bold text-2xl">
                or checkout these resources
              </h1>
              <div className="grid my-3 sm:grid-cols-2 lg:grid-cols-1 gap-3 border lg:translate-y-32 ">
                <div className="bg-white  p-6 rounded-lg">
                  Join us on Social Media
                </div>
                <div className="bg-white p-6   rounded-lg">
                  Read our documentation
                </div>
                <div className="bg-white sm:col-span-2 lg:col-span-1    p-6 rounded-lg">
                  Email Us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactForm;
