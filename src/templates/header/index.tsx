import Logo from "@/src/templates/header/logoSection/Logo";
import Navigation from "@/src/templates/header/navigation/Navigation";
import React from "react";
import UserAction from "@/src/templates/header/userAction/index";

function Header() {
  return (
    <div className="flex items-center justify-between w-full gap-4  px-20 py-3 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <Logo />
      <Navigation />
      <UserAction />
    </div>
  );
}

export default Header;
