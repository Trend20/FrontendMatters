import Link from "next/link";
import React from "react";

interface LinkProps {
  url: string;
  linkName: string;
  className: any;
}

const LinkItem = ({ url, linkName, className }: LinkProps) => {
  return (
    <Link
      href={url}
      className={`${className} flex capitalize font-semibold justify-center items-center`}
    >
      {linkName}
    </Link>
  );
};

export default LinkItem;
