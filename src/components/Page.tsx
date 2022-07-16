import React from "react";
import styled from "styled-components";
import { FlexDiv } from "./divs/FlexDiv";
import { ScreenWidths } from "../GlobalStyle";

interface Props {
  width?: number;
}

export const Page: React.FC<Props> = ({ width, children }) => {
  return <PageStyled $width={width || 1000}>{children}</PageStyled>;
};

const PageStyled = styled(FlexDiv)<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
  max-width: 90vw;
  flex-direction: column;
  justify-content: start;
  flex-grow: 1;

  @media (max-width: ${ScreenWidths.phone}px) {
    max-width: 95vw;
  }
`;
