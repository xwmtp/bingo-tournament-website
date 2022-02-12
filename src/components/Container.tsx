import styled from "styled-components";
import { Colors } from "../GlobalStyle";
import React from "react";

interface Props {
  title?: string;
  $width?: number;
}

export const Container: React.FC<Props> = ({ title, children }) => {
  return (
    <StyledContainer>
      {title && (
        <StyledHeader>
          <h2>{title}</h2>
        </StyledHeader>
      )}

      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<Props>`
  width: ${({ $width }) => $width || 1000}px;
  max-width: 90vw;
`;

const StyledHeader = styled.div`
  background-color: ${Colors.mediumGray};
  padding: 10px 20px;
  margin-bottom: 4px;
  border-radius: 10px 10px 0 0;
`;

const StyledContent = styled.div`
  background-color: ${Colors.mediumGray};
  padding: 20px;
  border-radius: 0 0 10px 10px;
`;
