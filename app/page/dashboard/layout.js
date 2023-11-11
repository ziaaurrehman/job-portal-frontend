import React from "react";
import { Container } from "@/components/globals/Container";
import Sidebar from "@/components/globals/Sidebar";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="flex space-x-5 border-t border-black">
        <div className="md:w-[25%] md:block hidden w-full">
          <Sidebar />
        </div>
        <div className="md:w-[75%] mt-10 w-full">{children}</div>
      </div>
    </Container>
  );
}
