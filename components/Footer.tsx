"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import InputField from "./InputField";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const containsLogin =
    pathname.includes("login") || pathname.includes("dashboard");
  const [email, setEmail] = useState<string>("");
  return (
    <>
      {!containsLogin && (
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
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEmail(e.target.value)}
              className="w-[600px]"
            />
            <button className="p-2.5 font-semibold bg-whiten text-lg text-meta-5 rounded-r-md outline-none w-40">
              Send
            </button>
          </form>

          <div className="flex w-3/4 justify-between items-center">
            <div className="flex justify-center">
              <Link href="/">FrontendMatters</Link>
            </div>
            <div className="justify-between w-1/4 flex items-center py-8">
              <Link href="/about">About</Link>
              <Link href="/features">Features</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/support">Support</Link>
            </div>
            <div className="flex justify-between w-40">
              <Link href="/github" className="flex bg-whiten p-3 rounded-full">
                <FiGithub fill="#259ae6" size={20} />
              </Link>
              <Link href="/twitter" className="flex bg-whiten p-3 rounded-full">
                <FaXTwitter fill="#259ae6" size={20} />
              </Link>
              <Link
                href="/linkedin"
                className="flex bg-whiten p-3 rounded-full"
              >
                <FiLinkedin fill="#259ae6" size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
