import React from "react";
import styled from "styled-components";
import { FlexDiv } from "./divs/FlexDiv";

export const Content: React.FC = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

const StyledPage = styled(FlexDiv)`
  width: 100%;
  flex-flow: column;
  justify-content: start;
  padding: 20px;
  flex-grow: 1;
`;
