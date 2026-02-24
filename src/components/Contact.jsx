import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="min-h-screen w-full bg-[#0a0f2c] text-white px-6 sm:px-12 md:px-20 lg:px-40 flex flex-col "
    >
      {/* Heading */}
      <div className="mt-10">
        <div className="flex items-center gap-6 w-full ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap mb-2">
            / contact
          </h1>
          <div className="border-t  border-[#ccd6f6] w-5/6 "></div>
        </div>

        <p className="text-gray-400">
          Submit the form below to get in touch with me.
        </p>
      </div>

      {/* Form Container */}
      <div className="flex justify-center items-start flex-1 py-10">
        <form
          method="POST"
          className="w-full max-w-xl flex flex-col gap-6 border border-white p-8 rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border border-[#ccd6f6] bg-transparent rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border border-[#ccd6f6] bg-transparent rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
            required
          />
          <textarea
            name=""
            className="border border-[#ccd6f6] bg-transparent rounded-lg py-10 px-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
            id=""
            placeholder="Enter message here"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all py-2 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
