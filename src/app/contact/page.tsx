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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black">Contact Us</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Feel Free to contact us any time. We will get back to you as soon
              as we can!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-14 px-0 border-0 border-b border-gray-200 rounded-none bg-transparent text-lg placeholder:text-gray-400 focus:border-gray-400 focus:ring-0 focus-visible:ring-0"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-14 px-0 border-0 border-b border-gray-200 rounded-none bg-transparent text-lg placeholder:text-gray-400 focus:border-gray-400 focus:ring-0 focus-visible:ring-0"
              />
            </div>

            <div>
              <input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full h-14 px-0 border-0 border-b border-gray-200 rounded-none bg-transparent text-lg placeholder:text-gray-400 focus:border-gray-400 focus:ring-0 focus-visible:ring-0"
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full h-14 bg-red-500 hover:bg-red-600 text-white text-lg font-medium rounded-full transition-colors"
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
