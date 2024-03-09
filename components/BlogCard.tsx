import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  return (
    <Link
      href={`/articles/${blog.title}`}
      className="flex flex-col w-full rounded-md bg-whiter shadow-2xl p-3"
    >
      <Image
        src={blog.coverimage}
        alt={blog.title}
        height="300"
        width="300"
        className="flex rounded-md object-cover w-full"
      />
      <div className="flex items-center justify-between w-full py-3">
        <h5 className="text-sm font-semibold bg-meta-5 rounded-full p-3 text-whiten">
          {blog.category}
        </h5>
        <p className="text-sm font-semibold">{blog.estimated_read_time} read</p>
      </div>
      <h3 className="text-lg font-bold leading-[1.5] py-3">{blog.title}</h3>
      <p className="text-normal py-2">{blog.description}</p>
    </Link>
  );
};

export default BlogCard;
