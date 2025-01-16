import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative lg:w-[1440px] w-full h-[316px]">
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
            My Account
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
            <p className="font-light text-[16px] leading-[24px]">My account</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-[150px] px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="form-container w-full lg:w-1/2 px-4">
            <h2 className="text-[36px] font-semibold leading-[54px] mt-[100px] mb-[36px] text-center lg:text-left">
              Log In
            </h2>
            <form>
              <p className="block mb-[20px] font-medium text-[16px] leading-[24px]">
                Username or email address
              </p>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full sm:w-[380px] h-[70px] p-2 mb-[25px] border-[#9F9F9F] border-[1px] rounded-[10px]"
              />
              <p className="block font-medium text-[16px] leading-[24px] mb-[20px]">
                Password
              </p>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full sm:w-[380px] h-[70px] p-2 mb-4 border-[1px] border-[#9F9F9F] rounded-[10px]"
              />
              <div className="flex items-center mt-[30px] mb-4">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2"
                />
                <p className="font-normal text-[16px] leading-[24px]">
                  Remember me
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between mt-[30px]">
                <button className="w-full sm:w-[180px] h-[60px] border-[black] border-[2px] py-2 rounded-[15px] text-center cursor-pointer">
                  Log In
                </button>
                <div className="mt-4 sm:mt-0 sm:ml-[50px] text-center leading-[24px] font-light text-[16px] cursor-pointer">
                  Lost Your Password?
                </div>
              </div>
            </form>
          </div>

          <div className="form-container w-full lg:w-1/2 px-4">
            <h2 className="text-[36px] font-semibold leading-[54px] mt-[100px] mb-[36px] text-center lg:text-left">
              Register
            </h2>
            <form>
              <p className="block mb-[20px] font-medium text-[16px] leading-[24px]">
                Email address
              </p>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full sm:w-[380px] h-[70px] p-2 mb-[25px] border-[#9F9F9F] border-[1px] rounded-[15px]"
              />
              <p className="mb-4 w-full sm:w-[380px] font-light">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="mb-4 w-full sm:w-[380px] font-light">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
                <span className="font-medium"> privacy policy</span>.
              </p>
              <button className="w-full sm:w-[180px] h-[60px] border-[black] border-[2px] py-2 rounded-[15px] mt-[37px] text-center cursor-pointer">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row lg:flex-row justify-around w-full p-8 mt-[100px] lg:mb-[280px] gap-[50px]">
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

      <Footer />
    </div>
  );
};

export default page;
