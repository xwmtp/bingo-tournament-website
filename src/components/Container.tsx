import styled from "styled-components";
import React from "react";
import { Colors, Margins } from "../GlobalStyle";

interface Props {
  title?: string;
  size?: "normal" | "small";
  className?: string;
  width?: number;
}

export const Container: React.FC<Props> = ({
  title,
  size = "normal",
  width,
  className,
  children,
}) => {
  return (
    <StyledContainer className={className} width={width}>
      {title && (
        <StyledHeader>
          {size === "normal" ? <h2>{title}</h2> : <h3>{title}</h3>}
        </StyledHeader>
      )}

      <StyledContent title={title}>{children}</StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<Props>`
  width: ${({ width }) => width || 1000}px;
  max-width: 90vw;
  margin-bottom: ${Margins.container}px;
`;

const StyledHeader = styled.div`
  background-color: ${Colors.mediumGray};
  padding: 10px 20px;
  margin-bottom: 4px;
  border-radius: 10px 10px 0 0;
`;

const StyledContent = styled.div<Props>`
  background-color: ${Colors.mediumGray};
  padding: 20px;
  border-radius: ${({ title }) => (title ? "0 0" : "10px 10px")} 10px 10px;
`;
