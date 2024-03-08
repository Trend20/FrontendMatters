"use client";
import Image from "next/image";
import React from "react";
import LinkItem from "./LinkItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full px-32 py-8 items-center justify-between">
      <div className="flex">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height="100" width="100" />
        </Link>
      </div>

      <div className="flex justify-between w-[580px] items-center">
        {navLinks.map((item) => (
          <LinkItem
            key={item.id}
            url={item.url}
            linkName={item.name}
            className={`${pathname === item.url ? "active" : ""}`}
          />
        ))}
        <LinkItem
          url="/login"
          linkName="Get Started"
          className="rounded-md outline-none p-2.5 w-36 bg-meta-5 text-whiten"
        />
      </div>
    </div>
  );
};

export default Header;
