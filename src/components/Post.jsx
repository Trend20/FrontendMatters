import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Post = ({ img, author, date, title, description, id }) => {
  return (
    <SinglePostContainer>
      <PostTextContainer className="post-text">
        <Link
          to={`/post/:${id}`}
          style={{
            textTransform: "capitalize",
            fontSize: "1.2rem",
            color: "#2596be",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          {title}
        </Link>
        <p>{description}</p>
        <div>
          <p>{author}</p>
          <p style={{ marginLeft: "20px" }}>{date}</p>
        </div>
      </PostTextContainer>
      <PostImage className="post-img">
        <img src={img} loading="lazy" alt="" />
      </PostImage>
    </SinglePostContainer>
  );
};
const SinglePostContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px;
    flex-direction: column-reverse;
  }
`;

const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    width: 70%;
    font-size: 0.8rem;
    line-height: 2;
    margin-top: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  div {
    display: flex;
    width: 50%;
    margin-top: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }

    p {
      width: 100%;
      margin-top: 0px;
      color: #fff;
      background: #2596be;
      border-radius: 50px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
      width: 120px;
    }
  }
`;

const PostImage = styled.div`
  display: flex;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    height: 200px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

export default Post;
