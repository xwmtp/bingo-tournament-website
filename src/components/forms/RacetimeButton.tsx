import React from "react";
import { UrlButton } from "./UrlButton";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";
import { ReactComponent as LogoRacetimeSvg } from "../../assets/racetimeGG-favicon.svg";
import styled from "styled-components";

interface Props {
  text?: string;
  url?: string;
  className?: string;
}

export const RacetimeButton: React.FC<Props> = ({ text, url, className }) => {
  return (
    <UrlButton color={"racetimeDarkGrey"} url={url} className={className}>
      <FlexDiv>
        <RacetimeLogo />
      </FlexDiv>
      <ButtonTextDiv>
        <ButtonText>{text}</ButtonText>
      </ButtonTextDiv>
    </UrlButton>
  );
};

const ButtonTextDiv = styled(DesktopOnlyFlexDiv)`
  margin-left: 5px;
`;

const ButtonText = styled.p`
  font-family: Roboto Slab, sans-serif;
  color: white;
`;

const RacetimeLogo = styled(LogoRacetimeSvg)`
  height: 1rem;
  fill: white;
`;
