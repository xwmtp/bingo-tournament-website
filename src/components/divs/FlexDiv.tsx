import styled from "styled-components";
import React from "react";

export const FlexDiv: React.FC<{
  className?: string;
}> = ({ className, children }) => {
  return <CenteredFlexDiv className={className}>{children}</CenteredFlexDiv>;
};

const CenteredFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
