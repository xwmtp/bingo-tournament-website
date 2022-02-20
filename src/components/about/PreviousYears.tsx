import React from "react";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";
import { FlexDiv } from "../divs/FlexDiv";

export const PreviousYears: React.FC = () => {
  return <PreviousYearBlock />;
};

const PreviousYearBlock: React.FC = () => {
  return (
    <PreviousYear image="">
      <h2>2020</h2>
    </PreviousYear>
  );
};

const PreviousYear = styled(FlexDiv)<{ image: string }>`
  flex-grow: 1;
  aspect-ratio: 1.3;
  border: 2px solid ${Colors.lightGray};
  border-radius: 10px;
  box-shadow: 5px 5px 4px ${Colors.darkGrey};
  position: relative;
  &:before {
    content: "";
    background-image: url(${({ image }) => image});
    background-position: center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
