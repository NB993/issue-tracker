import styled from "styled-components";

interface InputProps {
  size: string;
}

function Input({ size }) {
  return (
    <InputWrapper>
      <Title>아이디</Title>
      <TextInput placeholder={size === "large" ? "아이디" : "제목"} />;
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  width: 340px;
  height: 64px;
  background: #fefefe;
  border: 1px solid #14142b;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 24px;
`;

const Title = styled.div`
  width: 292px;
  height: 28px;
`;

const TextInput = styled.input`
  width: 290px;
  height: 28px;
`;

export default Input;