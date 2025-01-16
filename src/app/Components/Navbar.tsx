import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[1440px] lg:h-[100px] p-4 ">
      <div className="flex flex-col lg:flex-row w-full lg:w-[430px] h-auto lg:h-[24px] items-center justify-between lg:mt-[38px] lg:ml-[430px] text-black">
        <Link href="/">
          <h1 className="w-auto lg:w-12 h-auto lg:h-6 text-[20px] lg:text-lg hover:text-yellow-300">
            Home
          </h1>
        </Link>
        <Link href="/shop">
          <h1 className="w-auto lg:w-[42px] h-auto lg:h-6 text-[20px] lg:text-lg hover:text-yellow-300">
            Shop
          </h1>
        </Link>
        <Link href="/blog">
          <h1 className="w-auto lg:w-[49px] h-auto lg:h-6 text-[20px] lg:text-lg hover:text-yellow-300">
            About
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="w-auto lg:w-[66px] h-auto lg:h-6 text-[20px] lg:text-lg hover:text-yellow-300">
            Contact
          </h1>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:w-[247px] h-auto lg:h-[28px] items-center justify-between lg:mt-9 lg:ml-[134px] mt-4 text-white">
        <Link href="/myaccount">
          <Image
            src="/mdi_account-alert-outline@2x.svg"
            width={28}
            height={28}
            alt="icon1"
            className="hover:scale-110 transition-transform"
          />
        </Link>
        <Image
          src="/akar-icons_search.svg"
          width={28}
          height={28}
          alt="icon2"
          className="hover:scale-110 transition-transform"
        />
        <Link href="/checkout">
          <Image
            src="/akar-icons_heart.svg"
            width={28}
            height={28}
            alt="icon3"
            className="hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="/cart">
          <Image
            src="/ant-design_shopping-cart-outlined.svg"
            width={28}
            height={28}
            alt="icon4"
            className="hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
