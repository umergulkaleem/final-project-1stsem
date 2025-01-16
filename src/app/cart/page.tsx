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
        <div className="relative lg:w-[1440px] w-full h-[316px] bg-gray-100">
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
              Cart
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
              <p className="font-light text-[16px] leading-[24px]">Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-[480px] flex flex-col lg:flex-row justify-between p-8">
          <div className="lg:w-2/3 w-full">
            <div className="flex justify-between p-4 mt-[35px]">
              <span className="lg:ml-[200px] ml-[100px] font-medium text-[16px] leading-[24px]">
                Product
              </span>
              <span className="ml-[100px] font-medium text-[16px] leading-[24px]">
                Price
              </span>
              <span className=" ml-[40px] font-medium text-[16px] leading-[24px]">
                Quantity
              </span>
              <span className=" mr-[130px] font-medium text-[16px] leading-[24px]">
                Subtotal
              </span>
            </div>
            <div className="flex justify-between mt-[30px] ml-[50px] items-center p-4 border-b">
              <div className="flex items-center">
                <Image
                  src="Asgaard sofa 1.svg"
                  alt="Asgaard sofa"
                  width={112.99}
                  height={92.02}
                />
                <span className="ml-[30px] text-[16-px] font-normal leading-[24px] text-[#9F9F9F]">
                  Asgaard sofa
                </span>
              </div>
              <span className="ml-[30px] text-[16-px] font-normal leading-[24px] text-[#9F9F9F]">
                Rs. 250,000.00
              </span>
              <p className="w-[32px] h-[32px] border-[1px] border-[#9F9F9F] text-justify ">
                <p className="ml-[12px] mt-[4px]"> 1</p>
              </p>
              <span className="font-normal text-[16px] leading-[24px]">
                Rs. 250,000.00
              </span>
              <Image src="trash.svg" width={28} height={28} alt="garbage can" />
            </div>
          </div>
          <div className="lg:w-1/3 w-full p-8 lg:ml-[120px] mt-4 lg:mt-0">
            <h2 className="text-[32px] font-semibold leading-[48px] ml-[50px] mb-4">
              Cart Totals
            </h2>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-[16px] mt-[50px] mb-[30px] leading-[24px]">
                Subtotal
              </span>
              <span className="font-normal text-[#9F9F9F] text-[16px] mt-[50px] mr-[90px] leading-[24px]">
                Rs. 250,000.00
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-medium text-[16px] leading-[24px]">
                Total
              </span>
              <span className=" text-[#B88E2F] font-normal text-[20px] mr-[90px] leading-[30px]">
                Rs. 250,000.00
              </span>
            </div>
            <button className="border-black w-[222px] h-[58.95px] border-[1px] mt-[20px] ml-[10px] rounded-[15px]">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-around w-full p-8 mt-[200px] lg:mb-[280px] gap-[50px]">
          <div className="text-center">
            <h2 className="font-medium text-[40px]">Free Delivery</h2>
            <p className="font-light text-[#9f9f9f] w-[250px] mx-auto">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-[40px]">90 Days Return</h2>
            <p className="font-light text-[#9f9f9f] w-[250px] mx-auto">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
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
