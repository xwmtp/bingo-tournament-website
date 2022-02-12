import styled from "styled-components";
import React from "react";
import { ScreenWidths } from "../../GlobalStyle";

export const DesktopOnly: React.FC<{
  className?: string;
}> = ({ className, children }) => {
  return <DesktopOnlySpan className={className}>{children}</DesktopOnlySpan>;
};

const DesktopOnlySpan = styled.span`
  @media (max-width: ${ScreenWidths["tablet"]}px) {
    display: none;
  }
`;
