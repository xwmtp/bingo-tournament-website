import React from "react";
import styled from "styled-components";
import { FlexDiv } from "../divs/FlexDiv";
import { WideScreenOnly } from "../divs/WideScreenOnly";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <FlexDiv className={className}>
      <ImageStyled
        title="Bingo 2022"
        alt="Bombbag logo"
        src="https://github.com/xwmtp/bingo2022/blob/assets/images/logos/bombbag.png?raw=true"
      />
      <WideScreenOnly>
        <h3>Bingo 2022</h3>
      </WideScreenOnly>
    </FlexDiv>
  );
};

const ImageStyled = styled.img`
  height: 3rem;
  margin-right: 0.8rem;
`;
