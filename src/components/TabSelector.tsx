import styled from "styled-components";
import React from "react";
import { FlexDiv } from "./divs/FlexDiv";
import { Colors } from "../GlobalStyle";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
  tabOptions: TabOption[];
  $width?: number;
  className?: string;
}

interface TabOption {
  title: string;
  to: string;
}

export const TabSelector: React.FC<Props> = ({
  tabOptions,
  $width,
  className,
}) => {
  return (
    <Selector className={className} $width={$width}>
      {tabOptions.map((option) => {
        return (
          <TabOptionDiv key={option.title} to={option.to}>
            {option.title}
          </TabOptionDiv>
        );
      })}
    </Selector>
  );
};

const TabOptionDiv: React.FC<{ to: string }> = ({ to, children }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledTabOption to={to} $isActive={!!match}>
      {children}
    </StyledTabOption>
  );
};

const StyledTabOption = styled(NavLink)<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) =>
    $isActive ? Colors.brightMossGreen : "none"};
  padding: 10px 10px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex-grow: 1;
`;

const Selector = styled(FlexDiv)<{
  $width?: number;
  className?: string;
}>`
  justify-content: space-around;
  width: ${({ $width }) => $width || 1000}px;
  max-width: 90vw;
  background-color: ${Colors.mediumGrey};
  padding: 5px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px ${Colors.boxShadowGrey};
`;
