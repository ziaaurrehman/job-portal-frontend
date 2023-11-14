// import { Container } from "@/components/globals/Container";
import React from "react";

export default function Notification() {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];
  return (
    // <Container>
    <div className="space-y-5 w-full">
      {data.map((obj, _) => (
        <div
          key={obj.id}
          className="border-[5px] md:py-16 py-10 md:px-20 px-5 md:space-y-5 space-y-3 rounded-[10px] border-[#735681]"
        >
          <h1 className="md:text-[31px] text-2xl font-normal">Messages</h1>
          <p className="md:text-lg text-base font-normal">25 days ago</p>
          <p className="md:text-[22px] text-base font-normal">
            Have not heard back?
          </p>
          <p className="md:text-[22px] text-base font-normal">
            You are more likely to hear back on your application if you follow
            up with a message.
          </p>
          <p className="md:text-[22px] text-base font-normal underline">
            Interns
          </p>
          <p className="md:text-[28px] text-lg font-normal underline">
            Xeosol Private Limited
          </p>
          <p className="md:text-[28px] text-lg font-normal">Lahore, PPB</p>
          <p className="md:text-[28px] text-lg font-normal underline">
            Send Message
          </p>
        </div>
      ))}
    </div>
    // </Container>
  );
}
