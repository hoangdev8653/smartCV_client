"use client";
import Home from "@/src/app/(main)/home/page";
import Header from "@/src/templates/header/index";
// import { useSession } from "next-auth/react";

export default function Index() {
  // const { data: session } = useSession();

  // if (!session) return <p>Not signed in</p>;

  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
