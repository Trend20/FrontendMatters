"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import InputField from "./InputField";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="px-32 flex flex-col justify-center items-center py-10 bg-meta-5 text-whiten">
      <div className="mt-5">
        <Heading
          headingText="Subscribe to our newsletter"
          className="text-5xl text-center w-[500px] m-auto leading-[1.05]"
        />
      </div>
      <form className=" py-8 w-full m-auto justify-center items-center flex">
        <InputField
          type="email"
          value={email}
          placeholder="Enter email..."
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
          className="w-[600px]"
        />
      </form>
    </div>
  );
};

export default Footer;
