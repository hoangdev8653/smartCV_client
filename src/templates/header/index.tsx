import Logo from "@/src/templates/header/logoSection/Logo";
import ThemeSwitch from "@/components/ThemeSwitch";

import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between w-full gap-4">
      <Logo />

      <ThemeSwitch />
    </div>
  );
}

export default Header;
