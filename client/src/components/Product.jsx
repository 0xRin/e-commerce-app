import React from "react";
import styled from "styled-components";
import {
  ShoppingBagRounded,
  SearchOutlined,
  FavoriteBorderRounded,
} from "@mui/icons-material";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image
        src={
          item.img ??
          "https://source.unsplash.com/random/?clothes%20white%20background"
        }
      />
      <Info>
        <Icon>
          <ShoppingBagRounded id="bag" />
        </Icon>
        <Icon>
          <SearchOutlined id="search" />
        </Icon>
        <Icon>
          <FavoriteBorderRounded id="heart" />
        </Icon>
      </Info>
    </Container>
  );
};

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  min-width: 75%;
  object-fit: cover;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  & #heart,
  #search,
  #bag {
    transition: all ease-in 0.3s;
  }

  &:hover #heart {
    color: red;
  }
  &:hover #search {
    color: #73bcbc;
  }
  &:hover #bag {
    color: #693232;
  }
`;

export default Product;
