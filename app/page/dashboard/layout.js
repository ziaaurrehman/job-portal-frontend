import React from "react";
import { Container } from "@/components/globals/Container";
import Sidebar from "@/components/globals/Sidebar";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="flex xl:flex-row flex-col xl:space-x-5 border-t border-black">
        <div className="xl:w-[25%] w-full">
          <Sidebar />
        </div>
        <div className="xl:w-[75%] mt-10 w-full">{children}</div>
      </div>
    </Container>
  );
}
