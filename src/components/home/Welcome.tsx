"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Welcome = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    const authentication = localStorage.getItem("authenticationComplete");
    if (authentication === "true") {
      router.push("/uploader");
    }
  }, [router]);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { name: "", lastname: "", email: "" };

    if (!form.name) newErrors.name = "First name is required";
    if (!form.lastname) newErrors.lastname = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.lastname && !newErrors.email) {
      localStorage.setItem("authenticationComplete", "true");
      router.push("/uploader");
    }
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Header />
      </div>
      <div className="flex items-center justify-center min-h-screen flex-col">
        <h1 className="text-4xl text-center italic font-medium py-5">
          Welcome
        </h1>
        <form className="w-full max-w-[555px] mx-auto p-5 rounded-4xl">
          <label htmlFor="name">First Name</label>
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            type="text"
            id="name"
            className="border-2 border-gray-300 rounded-md p-2 w-full my-2"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}

          <label htmlFor="lastname">Last Name</label>
          <input
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
            value={form.lastname}
            type="text"
            id="lastname"
            className="border-2 border-gray-300 rounded-md p-2 w-full my-2"
            placeholder="Enter your last name"
          />
          {errors.lastname && <p className="text-red-600">{errors.lastname}</p>}

          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            type="email"
            id="email"
            className="border-2 border-gray-300 rounded-md p-2 w-full my-2"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}

          <button
            onClick={formHandler}
            type="submit"
            className="bg-black text-white py-2 px-5 rounded-md w-full border border-solid border-gray-700 transition-all ease-linear duration-300 hover:bg-white hover:text-black mt-4"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-black">
        <div className="max-w-[1440px] mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Welcome;
