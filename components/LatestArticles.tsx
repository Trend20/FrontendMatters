import React from "react";
import fs from "fs";
import path from "path";
import BlogCard from "./BlogCard";

// fetch a list of blogs
async function getBlogs() {
  const filePath = path.join(process.cwd(), "data", "info.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  if (!data) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

const LatestArticles = async () => {
  const blogs = await getBlogs();
  const latestArticles = blogs.blogs.slice(1, 9);
  return (
    <div className="flex flex-col w-full px-36 py-20">
      <h3 className="text-2xl font-extrabold text-black-2 py-3">
        Latest Articles
      </h3>
      <div className="grid grid-cols-4 gap-10 w-full">
        {latestArticles.map((item: any) => (
          <BlogCard key={item.timestamp} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
