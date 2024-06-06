"use client";
import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import ReactMarkdown from "react-markdown";
import { FaRegWindowClose } from "react-icons/fa";

const AddBlogForm = ({ open, handleOpen }: any) => {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [markdown, setMarkdown] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMarkdown(e.target.value);
  };

  // handle add blog
  const handleAddBlog = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("blog added");
  };

  return (
    <>
      <Dialog placeholder={""}
        open={open}
        size="lg"
        className="p-8"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-extrabold text-xl">Add Post</h1>
          <i onClick={handleOpen}>
            <FaRegWindowClose size={30} />
          </i>
        </div>
        <form className="space-y-6 w-full" onSubmit={handleAddBlog}>
          <div className="flex justify-between w-full">
            <div className="w-1/2 pr-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-1/2 pl-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Topic
              </label>
              <div className="mt-2">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="text"
                  placeholder="Write your Markdown here..."
                  value={markdown}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* <div id="preview">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div> */}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold bg-meta-5 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Post
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default AddBlogForm;
