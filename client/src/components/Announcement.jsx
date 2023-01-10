import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return <Container>
    Super Deal! Free Shipping on Orders over $30
  </Container>;
};

export default Announcement;

const Container = styled.div`
  height: 30px;
  background-color: #10a1a1;
  color: white;
  padding: 0.2em;
  text-align: center;
  font-size: 14px;
`;
