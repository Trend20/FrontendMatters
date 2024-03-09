import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full px-32 py-20">
      <div className="flex flex-col w-1/2 items-start justify-start">
        <h3 className="text-7xl font-extrabold text-black-2 leading-[1.1]">
          Frontend is changing. Stay Informed.
        </h3>
        <p className="text-2xl leading-10 mt-8 w-3/4">
          Discover articles and news on everything happening in the Frontend
          World!
        </p>
        <button className="flex justify-center items-center outline-none text-lg bg-meta-5 text-whiten mt-8 w-36 p-2.5 rounded-md">
          Start Reading
        </button>
      </div>
      <div className="flex w-1/2 justify-end">
        <div className="flex">
          <Image
            src="/images/hero4.jpg"
            alt="hero1"
            height="300"
            width="300"
            className="rounded-br-full rounded-tl-full"
          />
        </div>
        <div className="flex flex-col ml-3">
          <Image
            src="/images/hero2.jpg"
            alt="hero1"
            height="200"
            width="200"
            className="rounded-bl-full rounded-tr-full"
          />
          <Image
            src="/images/hero3.jpg"
            alt="hero1"
            height="200"
            width="200"
            className="rounded-br-full rounded-tl-full mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
