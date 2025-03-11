"use client";
import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { CheckBox, PlusIcon, UploadIcon, UploadingIcon } from "@/utils/Icons";
import Image from "next/image";

const UploadeImg = () => {
  const [upload, setUpload] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const uploader = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLoading(true);
      const files = Array.from(e.target.files);
      const newImg: string[] = [];

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            newImg.push(reader.result);
            if (newImg.length === files.length) {
              setUpload(newImg);
              setLoading(false);
              localStorage.setItem("uploadedImages", JSON.stringify(newImg));
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setLoading(true);
      const files = Array.from(e.dataTransfer.files);
      const newImg: string[] = [];

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            newImg.push(reader.result);
            if (newImg.length === files.length) {
              setUpload(newImg);
              setLoading(false);
              localStorage.setItem("uploadedImages", JSON.stringify(newImg));
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
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

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen flex-col">
        <div className="w-full max-w-[768px] mx-auto">
          <h1 className="text-center py-9 text-[#0D0D0D] text-[32px] leading-[100%]">
            Read & process your files online
          </h1>
          <div className="bg-white w-full max-w-[786px] h-[358px] mx-auto shadow-[0px_16px_42.7px_0px_#00000014] rounded-xl p-4">
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              className={`border border-dashed ${
                loading ? "border-blue-500" : "border-[#ED1C24]"
              } rounded-lg w-full max-w-[754px] flex items-center justify-center flex-col h-[326px]`}
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center">
                  <UploadingIcon />
                  <p className="text-blue-500 mt-2">Uploading...</p>
                </div>
              ) : upload.length > 0 ? (
                <div className="w-full max-w-[754px] flex items-center justify-center flex-col h-[326px]">
                  <Image
                    src={upload[0]}
                    alt="uploaded image"
                    width={754}
                    height={326}
                    className="w-full max-w-[754px] h-[326px] object-cover"
                  />
                </div>
              ) : (
                <div
                  id="change-content"
                  className="w-full max-w-[754px] flex items-center justify-center flex-col h-[326px]"
                >
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
                      accept="image/* zip pdf"
                    />
                    <PlusIcon />
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mt-[48px] mb-[69px]">
            <p className="text-[#0D0D0D] font-normal text-sm leading-[150%] max-w-[355px]">
              Our accelerator allows you to upload, read, and process multiple
              file types (e.g., Python, JAR, ZIP), extracting key data like
              classes, methods, and structure for easy review.
            </p>
            <div className="flex flex-col">
              <p className="text-[#0D0D0D] text-sm leading-[150%] font-normal flex items-center gap-1 mt-2">
                <span>
                  <CheckBox />
                </span>
                Works on any device—without installation
              </p>
              <p className="text-[#0D0D0D] text-sm leading-[150%] font-normal flex items-center gap-1 mt-2">
                <span>
                  <CheckBox />
                </span>
                Supports more than 10 filetypes
              </p>
              <p className="text-[#0D0D0D] text-sm leading-[150%] font-normal flex items-center gap-1 mt-2">
                <span>
                  <CheckBox />
                </span>
                Start reading now—no registration needed
              </p>
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

      {/* Footer */}
      <div className="bg-black">
        <div className="max-w-[1440px] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UploadeImg;
