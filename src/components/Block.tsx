import React from "react";
import styled from "styled-components";
import { FlexDiv } from "./divs/FlexDiv";
import { Colors, ScreenWidths } from "../GlobalStyle";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Block: React.FC<Props> = ({ children, className }) => {
  return <BlockStyled className={className}>{children}</BlockStyled>;
};

const BlockStyled = styled(FlexDiv)`
  justify-content: space-between;
  background-color: ${Colors.lightGrey};
  border-radius: 0.6rem;
  padding: 0.6rem 2rem;
  margin-top: 0.7rem;
  font-size: 1.1rem;

  @media (min-width: ${ScreenWidths.phone + 1}px) and (max-width: ${ScreenWidths.tablet}px) {
    padding: 0.6rem 1.2rem;
  }
`;
