import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { popularPosts } from "../data/posts";

const PopularPosts = () => {
  return (
    <PopularPostContainer className="popular-posts">
      <PopularPostHeader className="section-header">
        <HeadingText className="heading-text">
          <h1>Most popular</h1>
        </HeadingText>
      </PopularPostHeader>
      <hr />
      <AllPostsContainer className="all-posts">
        {popularPosts.map((post) => {
          return (
            <SinglePostContainer className="single-post">
              <PostTextContainer className="post-text">
                <Link
                  style={{
                    textTransform: "capitalize",
                    fontSize: "1.2rem",
                    color: "#2596be",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  {post.title}
                </Link>
                <p>{post.description}</p>
                <div>
                  <p>{post.author}</p>
                  <p style={{ marginLeft: "20px" }}>{post.date}</p>
                </div>
              </PostTextContainer>
              <PostImage className="post-img">
                <img src={post.img} alt="" />
              </PostImage>
            </SinglePostContainer>
          );
        })}
      </AllPostsContainer>
    </PopularPostContainer>
  );
};

export default PopularPosts;

const PopularPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const HeadingText = styled.div`
  width: 50%;
  align-items: center;
  justify-content: flex-start;
`;

const PopularPostHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const AllPostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const SinglePostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 30px 0px;
`;

const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    width: 100%;
    font-size: 0.8rem;
    line-height: 2;
    margin-top: 20px;
  }

  div {
    display: flex;
    width: 100%;
    margin-top: 20px;

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
  width: 100%;
  margin-top: 20px;

  img {
    max-width: 100%;
    border-radius: 10px;
    height: 200px;
  }
`;
