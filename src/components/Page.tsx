import React from "react";
import styled from "styled-components";
import { FlexDiv } from "./divs/FlexDiv";
import { ScreenWidths } from "../GlobalStyle";

export const Page: React.FC = ({ children }) => {
  return <PageStyled>{children}</PageStyled>;
};

const PageStyled = styled(FlexDiv)`
  width: 1000px;
  flex-direction: column;
  max-width: 90vw;
  flex-flow: column;
  justify-content: start;
  flex-grow: 1;

  @media (max-width: ${ScreenWidths.phone}px) {
    max-width: 95vw;
  }
`;
