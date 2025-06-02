"use client";

import type React from "react";
import { useState } from "react";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
<div className="h-full bg-gray-100 flex items-center justify-center p-4">
  <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-12">
    <div className="space-y-8">
      <div className="">
        <h1 className="text-[2.7rem] text-black">Contact Us</h1>
        <p className="text-gray-900 text-sm">
          Feel free to contact us any time. We will get back to you as soon as we can!
        </p>
      </div>

      <form onSubmit={handleSubmit} >

        {/* Name Input */}
        <div className="relative w-full md:w-[60%] lg:w-[60%]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="peer w-full h-8  bg-transparent text-sm placeholder:text-gray-600 border-0 border-b border-gray-600 focus:outline-none focus:ring-0"
          />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-600 peer-focus:h-[2px] peer-focus:bg-black"></div>
        </div>

        {/* Email Input */}
        <div className="relative w-full md:w-[60%] lg:w-[60%]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="peer w-full h-10 px-0 bg-transparent text-sm placeholder:text-gray-600 border-0 border-b border-gray-600 focus:outline-none focus:ring-0"
          />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-600 peer-focus:h-[2px] peer-focus:bg-black"></div>
        </div>

        {/* Message Input */}
        <div className="relative w-full md:w-[60%] lg:w-[60%]">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="peer w-full h-13 px-0 bg-transparent text-sm placeholder:text-gray-600 border-0   focus:outline-none focus:ring-0"
          />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-600 peer-focus:h-[2px] peer-focus:bg-black"></div>
        </div>

        {/* Submit Button */}
        <div className="pt-8 w-full md:w-[60%] lg:w-[60%]">
          <button
            type="submit"
            className="w-full h-10 bg-orange-600 hover:bg-orange-500 text-white text-sm rounded-full transition-colors"
          >
            Send
          </button>
        </div>

      </form>
    </div>
  </div>
</div>

  );
}
