import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ReadMore = () => {
  return (
    <ReadMoreContainer className="read-more">
      <Link
        to={"/articles"}
        style={{
          textDecoration: "none",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button>Read More</Button>
      </Link>
    </ReadMoreContainer>
  );
};

export default ReadMore;

// styles
const ReadMoreContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  display: flex;
  padding: 15px;
  border: none;
  outline: none;
  width: 10%;
  justify-content: center;
  align-items: center;
  background: #2596be;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40%;
  }
`;
