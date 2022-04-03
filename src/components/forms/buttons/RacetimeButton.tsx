import React from "react";
import { UrlButton } from "../UrlButton";
import { ReactComponent as LogoRacetimeSvg } from "../../../assets/racetimeGG-favicon.svg";
import styled from "styled-components";

interface Props {
  text?: string;
  url?: string;
  className?: string;
}

export const RacetimeButton: React.FC<Props> = ({ text, url, className }) => {
  return (
    <UrlButton color={"racetimeDarkGrey"} url={url} className={className}>
      <RacetimeLogo />
      {text && <DesktopOnlyButtonText>{text}</DesktopOnlyButtonText>}
    </UrlButton>
  );
};

const DesktopOnlyButtonText = styled.p`
  font-family: Roboto Slab, sans-serif;
  color: white;
  margin-left: 5px;
`;

const RacetimeLogo = styled(LogoRacetimeSvg)`
  height: 1rem;
  fill: white;
`;
