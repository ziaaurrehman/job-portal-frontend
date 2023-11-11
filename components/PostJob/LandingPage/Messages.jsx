import React from "react";
import { Container } from "@/components/globals/Container";
import AllMessages from "@/components/globals/AllMessages";
import MessageBox from "@/components/globals/MessageBox";
import Info from "./Info";

export default function Messages() {
  return (
    <Container>
      <div className="lg:flex lg:space-x-3">
        <div className="lg:w-[30%] w-full">
          <AllMessages />
        </div>
        <div className="lg:w-[40%] w-full">
          <MessageBox />
        </div>
        <div className="lg:w-[30%] w-full">
          <Info />
        </div>
      </div>
    </Container>
  );
}
