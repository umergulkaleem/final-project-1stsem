import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer";
import Link from "next/link";

const Shop = () => {
  return (
    <div>
      {/* sm responisveness error */}
      <div>
        <Navbar />
      </div>
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
          <p className="text-center font-medium text-[32px] sm:text-[48px] leading-[72px] mt-[-10px]">
            Shop
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
              Shop
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:w-[1440px] h-[100px] flex items-center justify-between px-8 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image
              src="/Vector (3).svg"
              width={19.05}
              height={16.67}
              alt="Filter icon"
            />
            <p className="text-gray-700 ml-1 text-[18px] sm:text-[22px]">
              Filter
            </p>
          </div>
          <Image
            src="/ci_grid-big-round.svg"
            width={28}
            height={28}
            alt="Grid icon"
          />
          <Image
            src="/bi_view-list.svg"
            width={24}
            height={24}
            alt="List icon"
          />
          <div className="flex items-center border-l-2 border-[#9F9F9F] pl-4">
            <p className="text-gray-700 text-[18px] sm:text-[22px]">
              Showing 1–16 of 32 results
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <p className="text-gray-700 text-[18px] sm:text-[22px] mr-10">
              Show
            </p>
            <p className="text-gray-700 font-bold text-[18px] sm:text-[22px] mr-12">
              16
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-gray-700 text-[18px] sm:text-[22px] mr-12">
              Sort by
            </p>
            <p className="text-gray-400 text-[18px] sm:text-[22px] mr-[200px]">
              Default
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link href="/singleProduct">
          <div className="flex flex-wrap mt-[60px] lg:ml-0 ml-[140px]  justify-center sm:justify-start sm:gap-4">
            <div className=" w-[287px] h-[373px] sm:w-[250px] mt-[50px]">
              <Image
                src="Trenton modular sofa_3 1.svg"
                width={750}
                height={384.46}
                alt="For You"
              />
              <div className="w-[287px] h-[287px] sm:w-[250px]">
                <p className="mt-[110px] lg:ml-[30px] w-[194px] h-[24px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Trenton modular sofa_3
                </p>
                <p className="mt-[9px] lg:ml-[30px] w-auto h-[36px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,000.00
                </p>
              </div>
            </div>

            <div className="ml-[30px] w-[287px] h-[373px] sm:w-[250px] mt-[50px]">
              <Image
                className="h-[287px]"
                src="Granite dining table with dining chair 1.svg"
                width={255}
                height={185}
                alt="For You2"
              />
              <div className="w-full h-auto mt-[20px] lg:mt-[50px] text-center lg:text-left">
                <p className="w-auto h-[24px] text-[16px] font-normal leading-[24px]">
                  Granite dining table with dining chair
                </p>
                <p className="mt-[19px] w-auto h-[36px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,000.00
                </p>
              </div>
            </div>

            <div className="ml-[30px] w-[287px] h-[373px] sm:w-[250px] mt-[50px]">
              <Image
                className="h-[287px]"
                src="Outdoor bar table and stool 1.svg"
                width={250}
                height={376}
                alt="For You3"
              />
              <div className="w-full h-auto mt-[20px] lg:mt-[50px] text-center lg:text-left">
                <p className="w-auto h-[24px] text-[16px] font-normal leading-[24px]">
                  Outdoor bar table and stool
                </p>
                <p className="mt-[9px] w-auto h-[36px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,000.00
                </p>
              </div>
            </div>

            <div className="ml-[30px] w-[287px] h-[373px] sm:w-[250px] mt-[50px]">
              <Image
                className="h-[287px]"
                src="Plain console with teak mirror 1.svg"
                width={240}
                height={174}
                alt="For You4"
              />
              <div className="w-full h-auto mt-[20px] lg:mt-[50px] text-center lg:text-left">
                <p className="w-auto h-[24px] text-[16px] font-normal leading-[24px]">
                  Plain console with teak mirror
                </p>
                <p className="mt-[9px] w-auto h-[36px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,000.00
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-[60px] lg:ml-0 ml-[140px] gap-8 justify-center sm:justify-start sm:gap-4">
            <div className="w-[287px] h-[373px] sm:w-[250px] mt-[50px]">
              <Image
                src="Grain coffee table 1.svg"
                width={750}
                height={384.46}
                alt="For You"
              />
              <div className="w-[287px] h-[287px] sm:w-[250px]">
                <p className="mt-[130px] lg:ml-[30px] w-[194px] h-[24px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Grain coffee table
                </p>
                <p className="mt-[30px] lg:ml-[30px] w-[158px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 15,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ml-[30px]">
              <Image
                className="h-[287px]"
                src="Kent coffee table 1.svg"
                width={255}
                height={185}
                alt="For You2"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Kent coffee table
                </p>
                <p className="mt-[9px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 225,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ml-[30px]">
              <Image
                className="h-[287px]"
                src="Round coffee table_color 2 1.svg"
                width={250}
                height={376}
                alt="For You3"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Round coffee table_color 2
                </p>
                <p className="mt-[9px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 251,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ml-[30px]">
              <Image
                className="h-[287px]"
                src="Reclaimed teak coffee table 1.svg"
                width={240}
                height={174}
                alt="For You4"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Reclaimed teak coffee table{" "}
                </p>
                <p className="mt-[9px] w-[158px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 25,200.00
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-[60px] gap-8 justify-center sm:justify-start sm:gap-4">
            <div className="w-[287px] h-[373px] sm:w-[250px]  mt-[70px]">
              <Image
                src="Plain console_ 1.svg"
                width={750}
                height={384.46}
                alt="For You"
              />
              <div className="w-[287px] h-[287px] sm:w-[250px]">
                <p className="mt-[140px] lg:ml-[30px] w-[194px] h-[24px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Plain console_
                </p>
                <p className="mt-[30px] lg:ml-[30px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 258,200.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ">
              <Image
                className="h-[287px]"
                src="Reclaimed teak Sideboard 1.svg"
                width={255}
                height={185}
                alt="For You2"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Reclaimed teak Sideboard
                </p>
                <p className="mt-[9px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 20,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ">
              <Image
                className="h-[287px]"
                src="SJP_0825  1.svg"
                width={250}
                height={376}
                alt="For You3"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  SJP_0825 1
                </p>
                <p className="mt-[9px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 200,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ">
              <Image
                className="h-[287px]"
                src="Bella chair and table 1.svg"
                width={240}
                height={174}
                alt="For You4"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Bella chair and table{" "}
                </p>
                <p className="mt-[9px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 100,000.00
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-[60px] gap-8 justify-center sm:justify-start sm:gap-4">
            <div className="w-[287px] h-[373px] sm:w-[250px]  mt-[0px]">
              <Image
                src="Granite square side table 2.svg"
                width={750}
                height={384.46}
                alt="For You"
              />
              <div className="w-[287px] h-[287px] sm:w-[250px]">
                <p className="mt-[90px] lg:ml-[30px] w-[210px] h-[24px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Granite square side table
                </p>
                <p className="mt-[30px] lg:ml-[30px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 258,800.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ml-[30px]">
              <Image
                className="h-[287px]"
                src="Asgaard sofa 2.svg"
                width={255}
                height={185}
                alt="For You2"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Asgaard sofa
                </p>
                <p className="mt-[9px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 250,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ml-[30px]">
              <Image
                className="h-[287px]"
                src="Maya sofa three seater 1.svg"
                width={250}
                height={376}
                alt="For You3"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Maya sofa three seater
                </p>
                <p className="mt-[9px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 250,000.00
                </p>
              </div>
            </div>
            <div className="w-[287px] h-[397px] sm:w-[250px] ml-[30px]">
              <Image
                className="h-[287px]"
                src="Outdoor sofa set 1.svg"
                width={240}
                height={174}
                alt="For You4"
              />
              <div className="w-[212px] h-[96px]">
                <p className="lg:ml-[30px] mt-[50px] w-[212px] h-[48px] ml-[0px] text-[16px] font-normal leading-[24px]">
                  Outdoor sofa set{" "}
                </p>
                <p className="mt-[9px] w-[200px] h-[36px] ml-[0px] text-[24px] font-medium leading-[36px]">
                  Rs. 300,000.00
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center w-full h-[450px]">
        <div className="flex space-x-2 mb-4 mt-[80px]">
          <p className="bg-yellow-200 px-8 py-5 rounded-xl">1</p>
          <p className="bg-gray-200 px-8 py-5 rounded-xl">2</p>
          <p className="bg-gray-200 px-8 py-5 rounded-xl">3</p>
          <p className="bg-gray-200 px-8 py-5 rounded-xl">Next</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-around w-full p-8 mt-[100px] mb-[120px] gap-8 lg:gap-[50px]">
          <div className="text-center">
            <h2 className="font-medium text-[40px]">Free Delivery</h2>
            <p className="font-light text-[#9f9f9f] w-[200px] mx-auto">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[40px]">90 Days Return</h2>
            <p className="font-light text-[#9f9f9f] w-[200px] mx-auto">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[40px]">Secure Payment</h2>
            <p className="font-light text-[#9f9f9f] w-[200px] mx-auto">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Shop;
