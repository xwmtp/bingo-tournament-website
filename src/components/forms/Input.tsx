import React from "react";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";

export const Input: React.FC<React.ComponentProps<typeof InputStyled>> = (
  props
) => {
  return <InputStyled {...props} />;
};

const InputStyled = styled.input`
  padding: 14px;
  border-radius: 10px;
  border: 3px solid ${Colors.lightGray};
  background-color: white;
  box-shadow: none;
  font-size: 1.1rem;
  color: black;
  outline: none;

  :focus-visible {
    border-color: ${Colors.brightMossGreen};
  }
`;
