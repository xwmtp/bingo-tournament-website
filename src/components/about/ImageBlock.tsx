import React from "react";
import styled from "styled-components";
import { FlexDiv } from "../divs/FlexDiv";
import { Colors } from "../../GlobalStyle";

interface Props {
  url: string;
  image: string;
  text: string;
  className?: string;
}

export const ImageBlock: React.FC<Props> = ({
  url,
  image,
  text,
  className,
}) => {
  return (
    <a href={url} target={"_blank"} rel="noreferrer">
      <PreviousYearDiv image={image} className={className}>
        <h2>{text}</h2>
      </PreviousYearDiv>
    </a>
  );
};

const PreviousYearDiv = styled(FlexDiv)<{ image: string }>`
  flex-grow: 1;
  aspect-ratio: 1.3;
  border: 2px solid ${Colors.lightGray};
  border-radius: 10px;
  box-shadow: 5px 5px 4px ${Colors.darkGrey};
  position: relative;
  background-image: url(${({ image }) => image});
  background-position: center;
`;
