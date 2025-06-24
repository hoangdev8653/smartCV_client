import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href="/home">
        <Image
          width={72}
          height={72}
          className="object-cover py-2 h-12 w-12 tablet:w-[200px] "
          src="/images/logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
