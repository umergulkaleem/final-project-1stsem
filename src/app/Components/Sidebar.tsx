"use client";

import React, { useState, useContext, createContext, ReactNode } from "react";
import Image from "next/image";
interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div
      className={`fixed top-0 right-0 w-[400px] bg-white shadow-lg transform ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 w-[417px] h-[746px]">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-600"
        >
          &times;
        </button>
        <div className="mt-[50px]">
          <div className="flex justify-between items-center w-[350px] ">
            <p>
              <Image
                className="bg-[#FBEBB5]"
                src="Asgaard sofa 1.svg"
                width={108}
                height={105}
                alt="sofa image"
              />
            </p>
            <div className="flex">
              <p className="mr-[50px] ml-[50px]">1 x Rs. 250,000.00</p>
              <p className="mt-[15px]">
                <Image src="Vector (5).svg" width={20} height={20} alt="X" />
              </p>
            </div>
          </div>

          <div className="mt-[90%] flex justify-between items-center font-semibold">
            <span className="ml-[15px]">Subtotal</span>
            <span className="text-[#ffd95b] mr-[10px]">Rs. 250,000.00</span>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-[#c7c4c4] px-4 py-2 rounded-3xl">
              View Cart
            </button>
            <button className="border-[1px] border-black  px-4 py-2 mr-[5px] rounded-3xl">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
