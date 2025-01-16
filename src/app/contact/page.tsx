import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="relative w-full lg:w-[1440px] h-[316px] bg-gray-100">
          <Image
            src="Rectangle 1.svg"
            layout="fill"
            objectFit="cover"
            alt="background"
            className="absolute inset-0"
          />
          <div className="relative flex flex-col items-center justify-center h-full">
            <Image
              className="mt-[-10px]"
              src="Meubel House_Logos-05.svg"
              width={77}
              height={77}
              alt="logo"
            />
            <p className="text-center font-medium text-[48px] leading-[72px] mt-[-10px]">
              Contact
            </p>
            <div className="flex items-center mt-2">
              <p className="font-medium text-[16px] leading-[24px]">Home</p>
              <Image
                className="mx-2"
                src="dashicons_arrow-down-alt2.svg"
                width={20}
                height={20}
                alt="arrow head"
              />
              <p className="font-light text-[16px] leading-[24px]">Contact</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full mt-[100px] h-auto px-4 sm:px-8">
          <div className="bg-white w-full">
            <div className="text-[36px] font-semibold mb-4 leading-[54px] text-center">
              Get In Touch With Us
            </div>
            <p className="text-center font-normal text-[16px] mx-auto w-full sm:w-[650px] leading-[24px] text-[#9F9F9F] mb-8">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
            <div className="flex flex-col sm:flex-row mt-[150px] gap-[20px] sm:gap-[200px] justify-center">
              <div className="w-full sm:w-auto">
                <div className="mb-8">
                  <span className="inline-flex items-center">
                    <Image
                      src="map-pin.svg"
                      width={22}
                      height={28.18}
                      alt="location icon"
                    />
                  </span>
                  <span className="text-[24px] font-medium leading-[36px] inline-block ml-2">
                    Address
                  </span>
                  <p className="font-normal ml-[35px] text-[16px] leading-[24px]">
                    236 5th SE Avenue, New
                    <p className="font-normal text-[16px] leading-[24px]">
                      York NY10000, United
                    </p>
                    <p className="font-normal text-[16px] leading-[24px]">
                      States
                    </p>
                  </p>
                </div>
                <div className="mb-8">
                  <span className="inline-flex items-center">
                    <Image
                      src="phone.svg"
                      width={22}
                      height={28.18}
                      alt="location icon"
                    />
                  </span>
                  <span className="text-[24px] font-medium leading-[36px] inline-block ml-2">
                    Phone
                  </span>
                  <p className="font-normal ml-[35px] text-[16px] leading-[24px]">
                    Mobile: (+84) 546-6789
                  </p>
                  <p className="font-normal ml-[35px] text-[16px] leading-[24px]">
                    Hotline: (+84) 456-6789
                  </p>
                </div>
                <div className="mb-8">
                  <span className="inline-flex items-center">
                    <Image
                      src="clock-1.svg"
                      width={22}
                      height={28.18}
                      alt="location icon"
                    />
                  </span>
                  <span className="text-[24px] font-medium leading-[36px] inline-block ml-2">
                    Working Time
                  </span>
                  <p className="font-normal ml-[35px] text-[16px] leading-[24px]">
                    Monday-Friday: 9:00 - 22:00
                  </p>
                  <p className="font-normal ml-[35px] text-[16px] leading-[24px]">
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
              <form className="w-full sm:w-auto">
                <div className="mb-4">
                  <div className="font-medium text-[16px] leading-[24px]">
                    Your name
                  </div>
                  <input
                    className="w-full sm:w-[528.75px] h-[75px] text-[#9F9F9F] border-[#9F9F9F] border-[1px] p-2 rounded-[10px] mt-[20px] mb-[30px]"
                    placeholder="Umergul"
                  />
                  {/* <p className="mt-[16px] ml-[15px]">Alice</p> */}
                </div>
                <div className="mb-4">
                  <div className="font-medium text-[16px] leading-[24px]">
                    Email address
                  </div>
                  <input
                    className="w-full sm:w-[528.75px] h-[75px] text-[#9F9F9F] border-[#9F9F9F] border-[1px] p-2 rounded-[10px] mt-[20px] mb-[30px]"
                    placeholder="umergulkaleem+hack2@gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <div className="font-medium text-[16px] leading-[24px]">
                    Subject
                  </div>
                  <input
                    className="w-full sm:w-[528.75px] h-[75px] text-[#9F9F9F] border-[#9F9F9F] border-[1px] p-2 rounded-[10px] mt-[20px] mb-[30px]"
                    placeholder="This is optional"
                  />
                </div>
                <div className="mb-4">
                  <div className="font-medium text-[16px] leading-[24px]">
                    Message
                  </div>
                  <input
                    className="w-full sm:w-[528.75px] h-[75px] text-[#9F9F9F] border-[#9F9F9F] border-[1px] p-2 rounded-[10px] mt-[20px] mb-[30px]"
                    placeholder="Id like to talk about..."
                  />
                </div>
                <button className="w-full sm:w-[237px] mt-[50px] mr-[10px] h-[48px] border-[1px] border-black p-2 rounded-[15px]">
                  <p className="ml-[0px] mt-[5px]"> Submit </p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-around w-full p-8 lg:mb-[280px] gap-[50px]">
          <div className="text-center w-full sm:w-auto">
            <h2 className="font-medium text-[40px]">Free Delivery</h2>
            <p className="font-light text-[#9f9f9f] w-[250px] mx-auto">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center w-full sm:w-auto">
            <h2 className="font-medium text-[40px]">90 Days Return</h2>
            <p className="font-light text-[#9f9f9f] w-[250px] mx-auto">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center w-full sm:w-auto">
            <h2 className="font-medium text-[40px]">Secure Payment</h2>
            <p className="font-light text-[#9f9f9f] w-[250px] mx-auto">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
