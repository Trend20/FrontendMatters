"use client";
import AddBlogForm from "@/components/AddBlogForm";
import React, { useState } from "react";

const PublishedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <button onClick={handleOpen}>Add Blog</button>
      <AddBlogForm open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default PublishedBlogs;
