import React from "react";
import styled from "styled-components";

const ReadMore = () => {
  return (
    <ReadMoreContainer className="read-more">
      <Button>Read More</Button>
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
