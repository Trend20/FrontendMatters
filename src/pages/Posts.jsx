import React from "react";
import { posts } from "../data/posts";
import Post from "../components/Post";

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
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
