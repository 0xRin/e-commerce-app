import styled from "styled-components";
import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  height: 100%;
  outline: none;
  padding-left: 10px;
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border-radius: 0%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: inherit;
`;
