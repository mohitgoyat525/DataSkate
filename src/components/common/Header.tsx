"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/utils/Icons";

const Header = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedProfileImage = localStorage.getItem("profileImage");

    setUser({
      firstName: storedFirstName || "John",
      lastName: storedLastName || "Doe",
    });
  }, []);

  return (
    <div className="flex items-center justify-between mx-w-[1440px] mx-auto max-sm:flex-wrap">
      <div className="flex items-center gap-[10px]">
        <Link href="/">
          <Image
            src="/assets/images/png/logo.png"
            alt="logo"
            width={144}
            height={33}
            className="w-full max-w-[144px]"
          />
        </Link>
        <p className="border-[1.5px] h-[19px] border-solid border-black"></p>
        <p className="text-base font-medium text-black leading-[100%]">
          TMM Accelerator
        </p>
      </div>
      {/* profile */}
      <div className="flex items-center gap-[9px] max-sm:mt-5">
        <Image
          src="/assets/images/png/jhon-doe-img.png"
          alt="user"
          width={40}
          height={40}
          className="w-full max-w-[40px] rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-base font-medium text-black leading-[100%] font-syne">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs font-normal text-black opacity-70 leading-[100%]">
            Admin
          </p>
        </div>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Header;
