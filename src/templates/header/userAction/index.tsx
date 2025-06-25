import React from "react";
import Avatar from "@/src/templates/header/userAction/Avatar";
import ThemeSwitch from "@/src/components/ThemeSwitch";

function UserAction() {
  return (
    <div className="flex gap-4 justify-center text-center items-center">
      <ThemeSwitch />
      <Avatar />
    </div>
  );
}

export default UserAction;
