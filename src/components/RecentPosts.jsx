import React from "react";
import { recentPosts } from "../data/posts";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoLinkExternal } from "react-icons/go";

const RecentPosts = () => {
  return (
    <RecentPostContainer className="recent-posts">
      <RecentPostHeader className="section-header">
        <HeadingText className="heading-text">
          <h1>Most Recent</h1>
        </HeadingText>
        <HeadingLink className="view-all">
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#2596be",
            }}
          >
            View all
            <i style={{ marginLeft: "10px" }}>
              <GoLinkExternal />
            </i>
          </Link>
        </HeadingLink>
      </RecentPostHeader>
      <hr />
      <AllPostsContainer className="all-posts">
        {recentPosts.map((post) => {
          return (
            <>
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
              <hr />
            </>
          );
        })}
      </AllPostsContainer>
    </RecentPostContainer>
  );
};

export default RecentPosts;

const RecentPostContainer = styled.div`
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

const HeadingLink = styled.div`
  width: 20%;
  align-items: center;
  justify-content: center;
`;

const RecentPostHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const AllPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  hr {
    border: 1px solid #f0efeb;
    width: 90%;
  }
`;

const SinglePostContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0px;
`;

const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  p {
    width: 70%;
    font-size: 0.8rem;
    line-height: 2;
    margin-top: 20px;
  }

  div {
    display: flex;
    width: 50%;
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
  width: 30%;

  img {
    max-width: 100%;
    border-radius: 10px;
    height: 200px;
  }
`;
