"use client";
import React from "react";

import { usePathname } from "next/navigation";
function Navigation() {
  const pathname = usePathname();

  return (
    <div className="tablet:hidden block">
      <ul className="flex justify-between gap-5 text-lg font-semibold text-gray-500 cursor-pointer">
        <li
          className={`hover:opacity-60 ${
            pathname === "/" ? "text-red-700" : ""
          }`}
        >
          <a href="/home">Trang Chủ</a>
        </li>
        <li
          className={`hover:opacity-60 ${
            pathname === "/contact" ? "text-red-700" : ""
          }`}
        >
          <a href="/contact">Liên hệ</a>
        </li>

        <li
          className={`hover:opacity-60 ${
            pathname === "/pricing" ? "text-red-700" : ""
          }`}
        >
          <a href="/pricing">Pricing</a>
        </li>
        <li
          className={`hover:opacity-60 ${
            pathname === "/postcard" ? "text-red-700" : ""
          }`}
        >
          <a href="/terms-of-service">Terms Of Service</a>
        </li>
        <li
          className={`hover:opacity-60 ${
            pathname === "/about-us" ? "text-red-700" : ""
          }`}
        >
          <a href="/about-us">Về chúng tôi</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
