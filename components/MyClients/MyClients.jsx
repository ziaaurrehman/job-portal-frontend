import React from "react";
import { Container } from "../globals/Container";
import Image from "next/image";

export const MyClients = () => {
  const data = [
    {
      id: 1,
      img: "/client1.svg",
    },
    {
      id: 2,
      img: "/client2.svg",
    },
    {
      id: 3,
      img: "/client3.svg",
    },
    {
      id: 4,
      img: "/client4.svg",
    },
    {
      id: 5,
      img: "/client5.svg",
    },
    {
      id: 6,
      img: "/client6.svg",
    },
    {
      id: 7,
      img: "/client7.svg",
    },
    {
      id: 8,
      img: "/client8.svg",
    },
    {
      id: 9,
      img: "/client9.svg",
    },
  ];
  return (
    <Container>
      <div>
        <h1 className="xl:text-[40px] capitalize w-full text-2xl font-medium tracking-[-0.5px] xl:leading-[50px]  ">
          My Clients
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center xl:gap-28 lg:gap-16 gap-5 md:mt-20 mt-10 lg:py-24 py-10 h-auto w-full px-10 p-3 rounded-[10px] border-[#5E3D6E] border-[5px]">
          {data.map((obj, _) => (
            <div
              key={obj.id}
              className="border-[#5E3D6E] border-[5px] rounded-[10px]"
            >
              <Image
                key={obj.id}
                height={0}
                width={0}
                sizes="100vw"
                src={obj.img}
                alt="search"
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
