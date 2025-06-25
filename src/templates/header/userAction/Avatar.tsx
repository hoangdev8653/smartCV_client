import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";
import Image from "next/image";

function Avatar() {
  return (
    <HoverCard>
      <HoverCardTrigger className="flex items-center justify-center  rounded-full bg-gray-200 dark:bg-gray-700">
        <Image
          width={48}
          height={48}
          src="/images/avatar_default.jpg"
          alt="User Avatar"
          className="w-12 h-12  rounded-full object-cover"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-48 p-4 bg-gray-800 dark:bg-gray-800 shadow-lg rounded-lg">
        <a href="/profile">
          <p className="text-white font-semibold hover:bg-gray-400 cursor-pointer m-1 text-lg">
            Trang cá nhân
          </p>
        </a>
        <a href="/post">
          <p className="text-white font-semibold cursor-pointer border-b border-gray-400 hover:bg-gray-400 text-lg m-1">
            Đăng bài viết
          </p>
        </a>
        <div>
          <p
            // onClick={handleLogout}
            className="text-white font-semibold hover:bg-gray-400 cursor-pointer m-1 text-lg"
          >
            Sign Out
          </p>
        </div>
        {/* </div> */}
      </HoverCardContent>
    </HoverCard>
  );
}

export default Avatar;
