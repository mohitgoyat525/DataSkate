import React from 'react'
import Header from '../common/Header'
import { ComplexityIcon, ParsIcon, ParsIconTwo, RightArrowIcon } from '@/utils/Icons';
import { DETAIL_LIST } from '@/utils/helper';
import Image from 'next/image';
import Footer from '../common/Footer';
const ImgName = () => {
  return (
    <>
      <div className="bg-[#F6F6F6] px-4">
        <div className="max-w-[1140px] mx-auto">
          <Header />
        </div>
        {/* main-content */}
        <div className="max-w-[1140px] mx-auto pb-[46px] max-md:pb-5 flex items-center justify-center flex-col min-h-screen relative">
          <div className="flex items-center justify-between mt-5 w-full">
            <h3 className="img-name font-syne text-2xl font-semibold leading-[100%]">
              file123.zip
            </h3>
            <button className="flex font-syne items-center justify-center border border-solid border-[#0D0D0D80] rounded-lg min-w-[193px] h-[49px]">
              Upload more files
            </button>
          </div>
          <div className="flex items-center justify-between max-lg:flex-wrap mt-6 gap-5 max-lg:justify-center">
            <div className="w-full justify-between items-center min-w-[558px] flex rounded-xl bg-white py-[19px] px-4">
              <div className="flex items-center gap-3">
                <ComplexityIcon />
                <p className="font-syne font-medium text-xl leading-[110%] ">
                  Complexity of the code
                </p>
              </div>
              <button className="transition-all ease-linear duration-300 hover:bg-amber-600 hover:text-[#fff1f2]  bg-[#FFF1F2] font-syne min-w-[69px] h-[33px] flex items-center justify-center rounded-full border border-solid border-[#ED1C24]">
                high
              </button>
            </div>
            <div className="flex items-center gap-6 max-sm:flex-wrap">
              <div className="w-full min-w-[267px] flex items-center gap-4 rounded-xl bg-white py-[19px] px-4">
                <ParsIcon />
                <div className="flex flex-col">
                  <p>-</p>
                  <p>No of Machines</p>
                </div>
              </div>
              <div className="w-full min-w-[267px] flex rounded-xl items-center gap-4 bg-white py-[19px] px-4">
                <ParsIconTwo />
                <div className="flex flex-col">
                  <p>-</p>
                  <p>No of Pars</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center !justify-start max-w-[300px] mr-auto">
            <h4 className="font-semibold !text-start font-syne text-2xl my-6 leading-[150%] text-[#0D0D0D]">
              Detailed metrices
            </h4>
          </div>
          <div className="flex items-center gap-6 max-lg:flex-wrap max-lg:justify-center w-full">
            <div className="w-full max-w-[558px]">
              {DETAIL_LIST.map((obj, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between mt-3 bg-white rounded-xl py-[19px] px-4 ${
                    i === 0 ? "border border-solid border-[#ED1C24] !mt-0" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex font-syne text-2xl font-medium leading-[100%] items-center justify-center bg-[#FFF1F2] min-w-10 h-10 rounded-full">
                      {obj.number}
                    </div>
                    <p className="font-normal text-base leading-[100%]">
                      {obj.title}
                    </p>
                  </div>
                  <RightArrowIcon />
                </div>
              ))}
            </div>
            <div className="w-full max-w-[558px]">
              <Image
                src="/assets/images/webp/graph-img.webp"
                alt="graph"
                width={558}
                height={464}
                className="w-full max-w-[558px] pointer-events-none h-[529px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="max-w-[1140px] mx-auto px-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ImgName