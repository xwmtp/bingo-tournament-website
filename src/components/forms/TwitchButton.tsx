import React from "react";
import { UrlButton } from "./UrlButton";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";
import styled from "styled-components";
import { IoLogoTwitch } from "react-icons/io";

interface Props {
  text?: string;
  url?: string;
  className?: string;
}

export const TwitchButton: React.FC<Props> = ({ text, url, className }) => {
  return (
    <UrlButton color={"twitchPurple"} url={url} className={className}>
      <FlexDiv>
        <TwitchIcon />
      </FlexDiv>
      <TextDiv>{text}</TextDiv>
    </UrlButton>
  );
};

const TextDiv = styled(DesktopOnlyFlexDiv)`
  margin-left: 5px;
`;

const TwitchIcon = styled(IoLogoTwitch)`
  transform: scale(1.2);
`;
