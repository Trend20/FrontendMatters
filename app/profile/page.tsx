"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data: session } = useSession();
  console.log(session);
  if (!session) {
    return <p>Loading...</p>;
  }

  if (!session.user) {
    return <p>No user data found.</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {session && (
        <div>
          <p>Welcome, {session.user?.name}!</p>
          <p>Email: {session.user?.email}</p>
          <p>Avatar:</p>
          <Image
            src={session?.user?.image!}
            alt="Avatar"
            width="100"
            height="100"
          />
        </div>
      )}
      {!session && <p>Please log in to view this page.</p>}
    </div>
  );
};

export default Profile;
