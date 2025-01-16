"use client";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Image from "next/image";

const page = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      companyName: formData.get("companyName"),
      country: formData.get("country"),
      streetAddress: formData.get("streetAddress"),
      townCity: formData.get("townCity"),
      province: formData.get("province"),
      zipCode: formData.get("zipCode"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      additionalInfo: formData.get("additionalInfo"),
    };
    alert(`Submitted Information: ${JSON.stringify(data)}`);
  };
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
              Checkout
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
              <p className="font-light text-[16px] leading-[24px]">Checkout</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-8 p-8">
          <div className="w-full sm:w-[50%] lg:ml-[130px] mt-[70px]">
            <h2 className="text-[36px] font-semibold leading-[54px] mb-7">
              Billing details
            </h2>
            <form className="space-y-[40px]" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[45%]">
                  <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="mt-1 w-full sm:w-[211px] h-[75px] border-[#9F9F9F] border-[1px] rounded-[10px]"
                  />
                </div>
                <div className="w-full sm:w-[45%] sm:ml-[25px]">
                  <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="mt-1 w-full sm:w-[211px] h-[75px] border-[#9F9F9F] border-[1px] rounded-[10px]"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="mt-1 block w-full sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]"
                />
              </div>
              <div>
                <div>
                  <label className="block font-medium leading-6 text-16 mb-5">
                    Country / Region
                  </label>
                  <select
                    name="country"
                    className="mt-1 block w-full sm:w-[453px] h-[75px] border border-gray-400 rounded-10 text-gray-500"
                    aria-label="Country / Region"
                    defaultValue="Pakistan"
                  >
                    <option value="Pakistan">Pakistan</option>
                    <option value="USA">USA</option>
                    <option value="China">China</option>
                    <option value="England">England</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                  Street address
                </label>
                <input
                  name="streetAddress"
                  type="text"
                  className="mt-1 block w-full sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]"
                />
              </div>
              <div>
                <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                  Town / City
                </label>
                <input
                  name="townCity"
                  type="text"
                  className="mt-1 block w-full sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]"
                />
              </div>
              <div>
                {" "}
                <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                  Province
                </label>{" "}
                <select
                  name="province"
                  className="mt-1 block w-full sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] text-[#9F9F9F]"
                  aria-label="Province"
                  defaultValue="Western Province"
                >
                  {" "}
                  <option value="Western Province">
                    Western Province
                  </option>{" "}
                  <option value="Eastern Province">Eastern Province</option>{" "}
                  <option value="Northern Province">Northern Province</option>{" "}
                  <option value="Southern Province">Southern Province</option>{" "}
                </select>
              </div>
              <div>
                <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                  ZIP code
                </label>
                <input
                  name="zipCode"
                  type="text"
                  className="mt-1 block w-full sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]"
                />
              </div>
              <div>
                <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="mt-1 block w-full sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]"
                />
              </div>
              <div>
                <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="mt-1 block w-full sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]"
                />
              </div>
              <div>
                <label className="block font-medium leading-[24px] text-[16px] mb-[20px]">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  className="mt-1 block w-full sm:w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] text-[#9F9F9F] ml-[25px] "
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-full sm:w-[50%] mt-[70px]">
            <div className="border p-8">
              <div className="mb-4">
                <p className="flex justify-between">
                  <span className="text-[24px] font-medium leading-[36px]">
                    Product
                  </span>
                  <span className="text-[24px] font-medium leading-[36px]">
                    Subtotal
                  </span>
                </p>
                <p className="flex justify-between mt-[25px]">
                  <span className="text-[16px] font-normal leading-[24px]">
                    <span className="text-[#9F9F9F]"> Asgaard sofa</span> × 1
                  </span>
                  <span className="font-light text-[16px] leading-[24px]">
                    Rs. 250,000.00
                  </span>
                </p>
              </div>
              <div className="mb-4">
                <p className="flex justify-between font-bold">
                  <span className="font-normal text-[16px] leading-[24px]">
                    Subtotal
                  </span>
                  <span className="font-light text-[16px] leading-[24px]">
                    Rs. 250,000.00
                  </span>
                </p>
                <p className="flex justify-between mt-[20px] ">
                  <span className="font-normal text-[16px] leading-[24px]">
                    Total
                  </span>
                  <span className="font-bold text-[24px] leading-[36px] text-[#B88E2F]">
                    Rs. 250,000.00
                  </span>
                </p>
              </div>
              <div className="mb-4 mt-[60px]">
                <div className="flex">
                  <span className="w-[14px] h-[14px] mt-[4px] mr-[20px] rounded-[50px] bg-black"></span>
                  <span className="block mb-2 text-gray-700">
                    Direct Bank Transfer
                  </span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-light leading-[24px]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>

                <div className="flex mt-[15px]">
                  <span className="w-[14px] h-[14px] mt-[4px] border-[1px] border-[#9F9F9F] mr-[20px] rounded-[50px]"></span>
                  <span className="block mb-2 text-gray-700">
                    Direct Bank Transfer
                  </span>
                </div>
                <div className="flex mt-[10px]">
                  <span className="w-[14px] border-[1px] border-[#9F9F9F] h-[14px] mt-[4px] mr-[20px] rounded-[50px]"></span>
                  <span className="block mb-4 text-gray-700">
                    Cash On Delivery
                  </span>
                </div>
                <p className="block font-light leading-[24px] text-[16px] mb-[20px]">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our <b>privacy policy.</b>
                </p>
                <button className="w-full sm:w-[453px] h-[75px] bg-[#B88E2F] rounded-[10px] text-white text-[16px] font-semibold leading-[24px]">
                  Place order
                </button>
              </div>
            </div>
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
