import React from "react";
import styled from "styled-components";

export const Page: React.FC = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

const StyledPage = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
  flex-grow: 1;
`;
