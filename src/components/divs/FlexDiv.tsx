import styled from "styled-components";
import React from "react";
import { WideScreenOnly } from "./WideScreenOnly";

export const FlexDiv: React.FC<{
  className?: string;
}> = ({ className, children }) => {
  return <CenteredFlexDiv className={className}>{children}</CenteredFlexDiv>;
};

export const WideScreenOnlyFlexDiv: React.FC<{
  className?: string;
}> = ({ className, children }) => {
  return (
    <CenteredWideScreenOnlyDiv className={className}>
      {children}
    </CenteredWideScreenOnlyDiv>
  );
};

const CenteredFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CenteredWideScreenOnlyDiv = styled(WideScreenOnly)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
