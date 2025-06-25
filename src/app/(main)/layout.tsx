import React from "react";
import Header from "@/src/templates/header/index";
import Footer from "@/src/templates/footer/index";
import BackToTop from "@/src/components/BackToTop";
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="max-w-7xl mx-auto my-4">{children}</main>
      <BackToTop />

      <Footer />
    </div>
  );
}

export default MainLayout;
