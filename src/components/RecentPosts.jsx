import React from "react";
import { recentPosts } from "../data/posts";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoLinkExternal } from "react-icons/go";
import Post from "./Post";

const RecentPosts = () => {
  return (
    <RecentPostContainer className="recent-posts">
      <RecentPostHeader className="section-header">
        <HeadingText className="heading-text">
          <h1>Most Recent</h1>
        </HeadingText>
        <HeadingLink className="view-all">
          <Link
            to={"/articles"}
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
              <Post
                id={post.id}
                img={post.img}
                title={post.title}
                author={post.author}
                description={post.description}
                date={post.date}
                key={post.id}
              />
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
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const HeadingText = styled.div`
  width: 50%;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const HeadingLink = styled.div`
  width: 30%;
  align-items: center;
  justify-content: center;
`;

const RecentPostHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AllPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  hr {
    border: 1px solid #f0efeb;
    width: 90%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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
