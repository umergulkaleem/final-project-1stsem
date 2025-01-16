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
          <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-10">
            <Image
              className="mt-[-10px]"
              src="Meubel House_Logos-05.svg"
              width={77}
              height={77}
              alt="logo"
            />
            <p className="text-center font-medium text-[36px] sm:text-[48px] leading-[48px] sm:leading-[72px] mt-[-10px]">
              Blog
            </p>
            <div className="flex items-center mt-2">
              <p className="font-medium text-[14px] sm:text-[16px] leading-[24px]">
                Home
              </p>
              <Image
                className="mx-2"
                src="dashicons_arrow-down-alt2.svg"
                width={20}
                height={20}
                alt="arrow head"
              />
              <p className="font-light text-[14px] sm:text-[16px] leading-[24px]">
                Blog
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-auto lg:mt-[-350px] px-4 sm:px-6 lg:px-10">
          <div className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="sm:ml-[80px] w-full sm:w-auto">
                <Image
                  src="Rectangle 68.svg"
                  alt="Blog1"
                  width={750}
                  height={500}
                  className="w-full sm:w-[750px]"
                />
                <div className="flex items-center mt-[20px] space-x-2">
                  <Image
                    src="Vector (6).svg"
                    width={14.48}
                    height={16.15}
                    alt="account"
                  />
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#9F9F9F]">
                    Admin
                  </p>
                  <Image
                    src="Vector (8).svg"
                    width={16}
                    height={16}
                    alt="calendar"
                  />
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#9F9F9F]">
                    16 Oct 2022
                  </p>
                  <Image
                    src="Vector (7).svg"
                    width={18}
                    height={18}
                    alt="tag"
                  />
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#9F9F9F]">
                    Wood
                  </p>
                </div>
                <p className="text-[20px] sm:text-[30px] font-medium leading-[30px] sm:leading-[45px] mt-[20px]">
                  Going all-in with millennial design
                </p>
                <p className="text-[#9F9F9F] mt-[10px] font-normal text-[14px] sm:text-[15px] leading-[22.5px] w-full sm:w-[780px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>
                <p className="font-normal mt-[50px] text-[14px] sm:text-[16px] leading-[24px]">
                  Read more
                </p>
                <p className="w-[77px] border-[1px] ml-[4px] mt-[10px] border-black"></p>
              </div>
              <div className="sm:mt-[450px] sm:mr-[100px] w-full sm:w-auto">
                <div className="w-full sm:w-[311px] h-[58px] border-[1px] rounded-[10px] border-[#9F9F9F] relative">
                  <Image
                    className="absolute right-[16px] top-[50%] transform -translate-y-1/2"
                    src="akar-icons_search (1).svg"
                    width={24}
                    height={24}
                    alt="search"
                  />
                </div>
                <div className="ml-[35px] mt-[50px]">
                  <p className="text-[24px] sm:text-[28px] leading-[36px] font-medium mt-4">
                    Categories
                  </p>
                  <p className="text-[14px] sm:text-[16px] mt-[30px] leading-[24px] font-normal text-[#9F9F9F]">
                    Crafts (2)
                  </p>
                  <p className="text-[14px] sm:text-[16px] mt-[30px] leading-[24px] font-normal text-[#9F9F9F]">
                    Design (8)
                  </p>
                  <p className="text-[14px] sm:text-[16px] mt-[30px] leading-[24px] font-normal text-[#9F9F9F]">
                    Handmade (7)
                  </p>
                  <p className="text-[14px] sm:text-[16px] mt-[30px] leading-[24px] font-normal text-[#9F9F9F]">
                    Interior (1)
                  </p>
                  <p className="text-[14px] sm:text-[16px] mt-[30px] leading-[24px] font-normal text-[#9F9F9F]">
                    Wood (6)
                  </p>
                </div>
                <div className="mt-[240px] w-[250px] sm:w-full">
                  <p className="text-[24px] sm:text-[28px] mb-[30px] leading-[36px] font-medium">
                    Recent Posts
                  </p>
                  <div className="flex items-start mt-4 space-x-2">
                    <Image
                      src="Rectangle 69.svg"
                      width={80}
                      height={80}
                      alt="blog image"
                    />
                    <div>
                      <p className="text-[14px] sm:text-[16px] mt-[10px] ml-[10px] font-normal leading-[21px]">
                        Going all-in with millennial design
                      </p>
                      <p className="text-[12px] sm:text-[14px] ml-[10px] font-normal leading-[18px] text-[#9F9F9F]">
                        03 Aug 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mt-4 space-x-2">
                    <Image
                      src="Rectangle 69 (1).svg"
                      width={80}
                      height={80}
                      alt="blog image"
                    />
                    <div>
                      <p className="text-[14px] sm:text-[16px] mt-[10px] ml-[10px] font-normal leading-[21px]">
                        Exploring new ways of decorating
                      </p>
                      <p className="text-[12px] sm:text-[14px] ml-[10px] font-normal leading-[18px] text-[#9F9F9F]">
                        03 Aug 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mt-4 space-x-2">
                    <Image
                      src="Rectangle 69 (2).svg"
                      width={80}
                      height={80}
                      alt="blog image"
                    />
                    <div>
                      <p className="text-[14px] sm:text-[16px] mt-[10px] ml-[10px] font-normal leading-[21px]">
                        Handmade pieces that took time to make
                      </p>
                      <p className="text-[12px] sm:text-[14px] ml-[10px] font-normal leading-[18px] text-[#9F9F9F]">
                        03 Aug 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[80px] sm:ml-0 mt-[50px] sm:mt-[20px] ">
              <Image
                src="Rectangle 68 (1).svg"
                alt="Blog1"
                width={750}
                height={500}
                className="w-full sm:w-[750px]"
              />
              <div className="flex items-center mt-[20px] space-x-2">
                <Image
                  src="Vector (6).svg"
                  width={14.48}
                  height={16.15}
                  alt="account"
                />
                <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#9F9F9F]">
                  Admin
                </p>
                <Image
                  src="Vector (8).svg"
                  width={16}
                  height={16}
                  alt="calendar"
                />
                <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#9F9F9F]">
                  16 Oct 2022
                </p>
                <Image src="Vector (7).svg" width={18} height={18} alt="tag" />
                <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#9F9F9F]">
                  Wood
                </p>
              </div>
              <p className="text-[20px] sm:text-[30px] font-medium leading-[30px] sm:leading-[45px] mt-[20px]">
                Exploring new ways of decorating
              </p>
              <p className="text-[#9F9F9F] mt-[10px] font-normal text-[14px] sm:text-[15px] leading-[22.5px] w-full sm:w-[780px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <p className="font-normal mt-[50px] text-[14px] sm:text-[16px] leading-[24px]">
                Read more
              </p>
              <p className="w-[77px] border-[1px] ml-[4px] mt-[10px] border-black"></p>
            </div>

            <div className="ml-[80px] sm:ml-0 mt-[50px] sm:mt-[20px]">
              <Image
                src="Rectangle 68 (2).svg"
                alt="Blog1"
                width={750}
                height={500}
              />
              <div className="flex items-center mt-[20px] space-x-2">
                <Image
                  src="Vector (6).svg"
                  width={14.48}
                  height={16.15}
                  alt="account"
                />
                <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">
                  Admin
                </p>
                <Image
                  src="Vector (8).svg"
                  width={16}
                  height={16}
                  alt="calendar"
                />
                <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">
                  16 Oct 2022
                </p>
                <Image src="Vector (7).svg" width={18} height={18} alt="tag" />
                <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">
                  Wood
                </p>
              </div>
              <p className="text-[20px] sm:text-[30px] font-medium leading-[30px] sm:leading-[45px] mt-[20px]">
                Handmade pieces that took time to make
              </p>
              <p className=" text-[#9F9F9F] mt-[10px] font-normal text-[14px] sm:text-[15px] leading-[22.5px] w-full sm:w-[780px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua....
              </p>
              <p className="font-normal mt-[50px] text-[16px] leading-[24px]">
                Read more
              </p>
              <p className="w-[77px] border-[1px] ml-[4px] mt-[10px] border-black"></p>
            </div>
            <div className="flex space-x-4 mb-4 mt-[80px] lg:ml-[500px] ml-[100px]">
              <p className="bg-yellow-200 px-8 py-5 rounded-xl">1</p>
              <p className="bg-gray-200 px-8 py-5 rounded-xl">2</p>
              <p className="bg-gray-200 px-8 py-5 rounded-xl">3</p>
              <p className="bg-gray-200 px-8 py-5 rounded-xl">Next</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-[400px]">
        <div className="flex flex-col sm:flex-row justify-around w-full p-8 mt-[100px] lg:mb-[280px] gap-[50px]">
          <div className="text-center">
            <h2 className="font-medium text-[24px] sm:text-[40px]">
              Free Delivery
            </h2>
            <p className="font-light text-[#9f9f9f] w-full sm:w-[250px]">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[24px] sm:text-[40px]">
              90 Days Return
            </h2>
            <p className="font-light text-[#9f9f9f] w-full sm:w-[250px]">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[24px] sm:text-[40px]">
              Secure Payment
            </h2>
            <p className="font-light text-[#9f9f9f] w-full sm:w-[250px]">
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
