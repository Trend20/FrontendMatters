"use client";
import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ContentManagement = () => {
  const session = useSession();

  console.log("Session: ", session);

  if (session) {
    return redirect("/dashboard");
  } else {
    console.log("not found");
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-1/2 flex items-center flex-col justify-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center w-full">
            <Image
              className=""
              src="logo.svg"
              alt="Your Company"
              height="200"
              width="200"
            />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="flex flex-col w-full mt-5 justify-center items-center">
            <button
              onClick={() => signIn("github")}
              className="flex items-center w-full border border-grey rounded-md p-2.5 font-semibold justify-center"
            >
              <i className="mr-5">
                <FiGithub />
              </i>
              Login With GitHub
            </button>
            <button
              onClick={() => signIn("google")}
              className="flex items-center w-full mt-5 border border-grey rounded-md p-2.5 font-semibold justify-center"
            >
              <i className="mr-5">
                <FcGoogle />
              </i>
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentManagement;
