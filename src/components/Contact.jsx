import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(e);
  };

  // Submit form and send email
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("submitee");

    emailjs
      .send(
        "service_6ooixeg", // 500 emails per dayy
        "template_pfr92f6",
        {
          name: form.name,
          email: form.email,
          description: form.description,
        },
        "3qeWHCyHZKRnPbY1J",
      )
      .then(
        (response) => {
          setTimeout(() => {
            toast.success("Message sent successfully");
            setForm({ name: "", email: "", description: "" });
            setLoading(false);
          }, 1000);
        },
        (error) => {
          toast.error("Failed to send message.");
          console.error(error);
          setLoading(false);
        },
      );
  };
  return (
    <div
      name="Contact"
      className="  max-h-screen w-full mt-25  bg-[#0a0f2c] text-white  px-6 sm:px-12 md:px-20 lg:px-40 flex flex-col "
    >
      <div>
        <div className="flex items-center gap-7 w-full ">
          <div>
            <ToastContainer position="top-center" autoClose={3000} />
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap mb-2">
            / contact
          </h1>
          <div className="border-t  border-[#ccd6f6] w-5/6 "></div>
        </div>
      </div>

      {/* Form Container */}
      <div className="flex flex-col justify-center items-center gap-6 mt-6">
        <p className="text-gray-400 text-center text-md font-bold mt-0">
          Kindly submit your details through the form to get in touch.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex bg-[#071836] flex-col gap-6 border shadow-xl shadow-[#10131b] border-[#203458] p-8 rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="border border-[#203458] bg-transparent rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="border border-[#203458] bg-transparent rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
            required
          />
          <textarea
            name="description"
            className="border border-[#203458] bg-transparent rounded-lg py-10 px-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
            id=""
            onChange={handleChange}
            value={form.description}
            placeholder="Enter message here"
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#0f254d]  hover:bg-[#0947bb] cursor-pointer  transition-all py-2 rounded-lg font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
