import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material/";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleNavScrollChange = () => {
      if (window.scrollY === 0) setIsAtTop(true);
      if (window.scrollY !== 0) setIsAtTop(false);
    };

    window.addEventListener("scroll", handleNavScrollChange);

    return () => {
      window.removeEventListener("scroll", handleNavScrollChange);
    };
  }, []);

  return (
    <Container isAtTop={isAtTop}>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  width: 100%;
  position: ${(props) => (props.isAtTop ? "" : "sticky")};
  top: ${(props) => (props.isAtTop ? "" : "0")};
  z-index: 10;
  background-color: ${(props) =>
    props.isAtTop ? "white" : "rgba(255, 255, 255, 0.3)"};
  backdrop-filter: blur(${(props) => (props.isAtTop ? "0" : "5")}px);
  transition: blur ease 2s;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Language = styled.span`
  font-size 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 36px;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12x", marginLeft: "10px" })}
`;
