import styled from "styled-components";
import React from "react";
import { DesktopOnly } from "./DesktopOnly";

export const FlexDiv: React.FC<{
  className?: string;
}> = ({ className, children }) => {
  return <CenteredFlexDiv className={className}>{children}</CenteredFlexDiv>;
};

export const DesktopOnlyFlexDiv: React.FC<{
  className?: string;
}> = ({ className, children }) => {
  return (
    <CenteredFlexDesktopOnlyDiv className={className}>
      {children}
    </CenteredFlexDesktopOnlyDiv>
  );
};

const CenteredFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CenteredFlexDesktopOnlyDiv = styled(DesktopOnly)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
