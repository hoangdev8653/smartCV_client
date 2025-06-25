import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="">
      <a href="/home" className="flex items-center gap-2">
        <Image
          width={72}
          height={72}
          className="object-cover  h-12 w-12 tablet:w-[200px] "
          src="/images/logo.png"
          alt="logo"
        />
        <span className="text-2xl font-bold text-gray-600 dark:text-white justify-center items-center flex">
          BetterCV
        </span>
      </a>
    </div>
  );
}

export default Logo;
