"use client";
import Image from "next/image";
import React from "react";
import LinkItem from "./LinkItem";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { MdRssFeed } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const navLinks = [
  {
    id: 1,
    name: "all articles",
    url: "/articles",
  },
  {
    id: 2,
    name: "about",
    url: "/about",
  },
  {
    id: 3,
    name: "categories",
    url: "/categories",
  },
];
const darkMode = false;

const Header = () => {
  const pathname = usePathname();
  const containsLogin =
    pathname.includes("login") || pathname.includes("dashboard");
  return (
    <>
      {!containsLogin && (
        <div className="flex w-full px-32 py-8 items-center justify-between">
          <div className="flex">
            <Link href="/">
              <Image
                src="logo.svg"
                alt="logo"
                height="200"
                width="200"
                className="flex w-32.5"
              />
            </Link>
          </div>

          <div className="flex justify-between w-auto items-center">
            {navLinks.map((item) => (
              <LinkItem
                key={item.id}
                url={item.url}
                linkName={item.name}
                className={`${pathname === item.url ? "active" : ""} px-8`}
              />
            ))}
          </div>

          <div className="flex w-1/4 justify-center items-center">
            <Link href={""} className="px-3">
              <i>
                <FaXTwitter size={30} />
              </i>
            </Link>
            <Link href={""} className="px-3">
              <i>
                <MdRssFeed size={30} />
              </i>
            </Link>
            <button className="flex items-center ml-3">
              {darkMode ? (
                <MdOutlineDarkMode size={30} />
              ) : (
                <MdDarkMode size={30} />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
