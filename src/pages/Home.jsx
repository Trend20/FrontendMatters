import React from "react";
import Hero from "../components/Hero";
import RecentPosts from "../components/RecentPosts";
import PopularPosts from "../components/PopularPosts";
import ReadMore from "../components/ReadMore";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecentPosts />
      <PopularPosts />
      <ReadMore />
    </div>
  );
};

export default Home;
