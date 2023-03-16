import React from "react";

const Post = ({ img, author, date, title, description }) => {
  return (
    <div>
      <img src={img} alt="" />
      <span>
        <p>{author}</p>
        <p>{date}</p>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Post;
