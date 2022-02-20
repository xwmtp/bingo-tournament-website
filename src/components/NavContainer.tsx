import styled from "styled-components";
import React from "react";
import { FlexDiv } from "./divs/FlexDiv";
import { Colors } from "../GlobalStyle";

interface Props {
  title?: string;
  size?: "normal" | "small";
  $width?: number;
  className?: string;
}

export const NavContainer: React.FC<Props> = ({
  $width,
  className,
  children,
}) => {
  return (
    <StyledContainer className={className} $width={$width}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled(FlexDiv)<Props>`
  justify-content: space-evenly;
  width: ${({ $width }) => $width || 1000}px;
  max-width: 90vw;
  background-color: ${Colors.mediumGray};
  padding: 14px 20px;
  border-radius: 10px;
`;
