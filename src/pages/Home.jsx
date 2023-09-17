import React from "react";
import Hero from "../components/Hero";
import RecentPosts from "../components/RecentPosts";
import PopularPosts from "../components/PopularPosts";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import Posts from "./Posts";

const Home = () => {
  return (
    <div>
      <Hero />
        <Posts />
      {/*<RecentPosts />*/}
      {/*<PopularPosts />*/}
      <ReadMore />
      <Footer />
    </div>
  );
};

export default Home;
