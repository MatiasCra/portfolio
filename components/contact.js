import React from "react";
import contactStyles from "./contact.module.css";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 w-11/12">
      <div className="w-11/12 lg:w-3/5 mx-auto" id="contact">
        <h1 className="uppercase text-6xl w-full text-center font-mono">
          Contact Me
        </h1>
        <form className="lg:mt-8 mt-3">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-5/12 lg:w-1/2">
              <label className="flex flex-col lg:flex-row lg:items-center w-full">
                <div className="lg:inline">
                  Name<span className="ml-1">*</span>
                </div>
                <input
                  type="text"
                  className="w-full lg:ml-2 lg:w-5/6 p-2 rounded-md bg-zinc-900 border-2 border-zinc-400 transition-all ease-in-out focus-visible:outline-0 duration-300 focus:outline-none focus:shadow-[0_0_0_1px_ghostwhite]"
                />
              </label>
            </div>
            <div className="w-full md:w-5/12 lg:w-1/2 lg:text-right">
              <label className="flex flex-col lg:flex-row items-start lg:items-center w-full">
                <div className="lg:inline lg:ml-auto">
                  Email<span className="ml-1">*</span>
                </div>
                <input
                  type="email"
                  className="w-full lg:ml-2 lg:w-5/6 p-2 rounded-md bg-zinc-900 border-2 border-zinc-400 transition-all ease-in-out focus-visible:outline-0 duration-300 focus:outline-none focus:shadow-[0_0_0_1px_ghostwhite]"
                />
              </label>
            </div>
          </div>

          <label className="block mt-2">
            Subject<span className="ml-1">*</span>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded-md bg-zinc-900 border-2 border-zinc-400 transition-all ease-in-out focus-visible:outline-0 duration-300 focus:outline-none focus:shadow-[0_0_0_1px_ghostwhite]"
            />
          </label>

          <label className="block mt-2">
            Message<span className="ml-1">*</span>
            <textarea
              rows="10"
              columns="50"
              className="w-full mt-1 p-2 rounded-md bg-zinc-900 border-2 border-zinc-400 transition-all ease-in-out focus-visible:outline-0 duration-300 focus:outline-none focus:shadow-[0_0_0_1px_ghostwhite]"
            ></textarea>
          </label>

          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            //className={contactStyles.send}
            className="px-3 py-4 mt-2 rounded-full bg-zinc-300 text-zinc-900 font-bold box-border"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
