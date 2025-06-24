import React from "react";
import Header from "@/src/templates/header/index";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout">
      <Header />
      <div style={{ color: "red" }} className="text-red-800">
        huy hoàng
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
