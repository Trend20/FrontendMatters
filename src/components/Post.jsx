import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Post = ({ author, date, title, description, id}) => {
  return (
      <PostTextContainer className="post-text">
        <Link className='post-link'
          to={`/post/:${id}`}
        >
          {title}
        </Link>
        <p>{description}</p>
          <Link to={`/post/:${id}`} className='post-link'>Read More -></Link>
        <div>
          <p>{author}</p>
          <p style={{ marginLeft: "20px" }}>{date}</p>
        </div>
      </PostTextContainer>
  );
};

const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    width: 100%;
    font-size: 0.8rem;
    line-height: 2;
    margin-top: 20px;
    height: 100px !important;
    overflow: hidden;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  div {
    display: flex;
    width: 70%;
    margin-top: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }

    p {
      width: 70% !important;
      color: #fff;
      background: #2596be;
      border-radius: 50px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      height: auto !important;
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
