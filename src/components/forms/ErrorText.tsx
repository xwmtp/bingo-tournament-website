import React from "react";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";

interface Props {
  text: string;
}

export const ErrorText: React.FC<Props> = ({ text }) => {
  return <ErrorStyled>{text}</ErrorStyled>;
};

const ErrorStyled = styled.p`
  color: ${Colors.brightCoral};
  margin: 0.3rem 0;
`;
