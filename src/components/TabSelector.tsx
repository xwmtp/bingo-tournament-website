import styled from "styled-components";
import React from "react";
import { FlexDiv } from "./divs/FlexDiv";
import { Colors, ScreenWidths } from "../GlobalStyle";

interface Props {
  activeTab: string;
  setActiveTab: (tabOption: string) => void;
  tabOptions: string[];
  width?: string;
  fontSize?: string;
  className?: string;
}

export const TabSelector: React.FC<Props> = ({
  tabOptions,
  activeTab,
  setActiveTab,
  width,
  fontSize,
  className,
}) => {
  return (
    <Selector className={className} $width={width}>
      {tabOptions.map((option) => {
        return (
          <TabOptionDiv
            key={option}
            $isActive={option === activeTab}
            $fontSize={fontSize}
            onClick={() => setActiveTab(option)}
          >
            {option}
          </TabOptionDiv>
        );
      })}
    </Selector>
  );
};

const TabOptionDiv = styled.div<{
  $isActive: boolean;
  $fontSize?: string;
}>`
  background-color: ${({ $isActive }) =>
    $isActive ? Colors.brightMossGreen : "none"};
  padding: 0.6rem;
  font-size: ${({ $fontSize }) => $fontSize ?? "1.3rem"};
  display: flex;
  justify-content: center;
  border-radius: 0.6rem;
  flex-grow: 1;
  cursor: pointer;
`;

export const Selector = styled(FlexDiv)<{
  $width?: string;
  className?: string;
}>`
  justify-content: space-around;
  width: ${({ $width }) => $width || "100%"};
  max-width: 90vw;
  background-color: ${Colors.mediumGrey};
  padding: 0.3rem;
  border-radius: 0.6rem;
  box-shadow: 0.3rem 0.3rem 0.3rem ${Colors.boxShadowGrey};
  @media (max-width: ${ScreenWidths.phone}px) {
    max-width: 95vw;
  }
`;
