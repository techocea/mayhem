import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="flex max-sm:flex-col max-sm:gap-4 max-sm:text-center items-center justify-between p-5 border-b border-gray-500 ">
      <div className="flex gap-8">
        <Link href="https://web.facebook.com/profile.php?id=61550819112955">
          <BsFacebook className="hover:text-accent duration-75" />
        </Link>
        <BsTwitter className="hover:text-accent duration-75" />
        <BsInstagram className="hover:text-accent duration-75" />
        <BsLinkedin className="hover:text-accent duration-75" />
      </div>
      <div>
        <h1 className="text-gray-500 max-sm:text-sm">
          <b>FREE SHIPPING</b>THIS WEEK ORDER OVER -$55
        </h1>
      </div>
      <div className="flex gap-4">
        <select
          name="currency"
          id="currency"
          className="text-gray-500 cursor-pointer"
        >
          <option value="USD">USD</option>
          <option value="LKR">LKR</option>
        </select>
        <select
          name="language"
          id="language"
          className="text-gray-500 cursor-pointer"
        >
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderTop;
