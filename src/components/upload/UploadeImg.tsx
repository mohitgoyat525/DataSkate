"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { CheckBox, PlusIcon, UploadIcon, UploadingIcon } from "@/utils/Icons";
import Image from "next/image";

const UploadeImg = () => {
  const [loading, setLoading] = useState(0);
  const [fileName, setFileName] = useState("");
  const router = useRouter();

  const uploader = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const name = files[0].name;
      setFileName(name);
      localStorage.setItem("uploadedFileName", name);
      setLoading(10);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setLoading(100);
          setTimeout(() => {
            router.push("/imgdata");
          }, 500);
        };

        reader.readAsDataURL(file);
        simulateProgress();
      });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      const name = files[0].name;
      setFileName(name);
      localStorage.setItem("uploadedFileName", name);
      setLoading(10);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setLoading(100);
          setTimeout(() => {
            router.push("/imgdata");
          }, 500);
        };

        reader.readAsDataURL(file);
        simulateProgress();
      });
    }
  };

  const simulateProgress = () => {
    let progress = 10;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 90) {
        clearInterval(interval);
      } else {
        setLoading(progress);
      }
    }, 200);
  };

  return (
    <div className="relative">
      <Image
        src="/assets/images/webp/top-left-ring.webp"
        alt="ring"
        width={169}
        height={211}
        className="top-[65px] w-full max-w-[169px] left-0 absolute pointer-events-none"
      />
      <div className="max-w-[1440px] mx-auto px-4 mt-4">
        <Header />
      </div>
      <div className="flex items-center justify-center min-h-screen flex-col">
        <div className="w-full max-w-[768px] mx-auto">
          <h1 className="text-center font-syne font-bold py-9 text-[#0D0D0D] text-[32px] leading-[100%]">
            Read & process your files online
          </h1>
          <div className="bg-white w-full max-w-[786px] h-[358px] mx-auto shadow-[0px_16px_42.7px_0px_#00000014] rounded-xl p-4">
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              className="border border-dashed border-[#ED1C24] rounded-lg w-full max-w-[754px] flex items-center justify-center flex-col h-[326px]"
            >
              {loading > 0 ? (
                <div className="w-full px-4 max-w-[370px] mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <UploadingIcon />
                      <p className="text-[#0D0D0D] text-base font-normal mt-2 text-center">
                        Uploading
                        <span className="font-bold">{fileName}...</span>
                      </p>
                    </div>
                    <p>{loading}%</p>
                  </div>
                  <div className="w-full bg-[#E7EAEE] rounded-full h-[3px] mt-2">
                    <div
                      className="bg-[#ED1C24] h-[3px] rounded-full"
                      style={{ width: `${loading}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-[754px] flex items-center justify-center flex-col h-[326px]">
                  <UploadIcon />
                  <p className="text-[#0D0D0D] text-base font-normal leading-[150%] pt-4 text-center">
                    Paste or drag and drop files here
                  </p>
                  <p className="font-normal text-[#0D0D0D] opacity-70 leading-[150%] text-center text-xs">
                    WAR, ZIP or EAR, file size no more than 10MB
                  </p>
                  <label
                    htmlFor="file"
                    className="min-w-[32px] h-[32px] flex items-center rounded-sm transition-all ease-linear duration-300 hover:bg-black justify-center text-white bg-[#ED1C24] mt-4"
                  >
                    <input
                      type="file"
                      hidden
                      id="file"
                      onChange={uploader}
                      className="w-full"
                      accept="image/*"
                    />
                    <PlusIcon />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/webp/bottom-right-ring.webp"
        alt="ring"
        width={169}
        height={211}
        className="bottom-[95px] w-full max-w-[169px] right-0 absolute pointer-events-none"
      />
      <div className="bg-black">
        <div className="max-w-[1440px] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UploadeImg;
