import React from "react";
import { posts } from "../data/posts";
import Post from "../components/Post";

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            img={post.img}
            author={post.author}
            date={post.date}
            title={post.title}
            description={post.description}
          />
        );
      })}
    </div>
  );
};

export default Posts;
