import React from "react";
import styled from "styled-components";
import { IconUrlButton } from "../IconButton";
import { MatchResult } from "../../../domain/Match";
import { IoLogoTwitch } from "react-icons/io";

interface Props {
  text?: string;
  matchResult: MatchResult;
  className?: string;
}

export const VodButton: React.FC<Props> = ({ text, matchResult, className }) => {
  let label =
    (matchResult.restreamChannel || "") +
    (matchResult.restreamer ? ` (hosted by ${matchResult.restreamer.name})` : "");

  if (label.trim() === "") {
    label = matchResult.vodUrl || "";
  }

  return (
    <IconUrlButton
      label={label}
      text={text ?? "Vod"}
      Icon={TwitchIcon}
      url={matchResult?.vodUrl}
      color={"coral"}
      className={className}
    />
  );
};

const TwitchIcon = styled(IoLogoTwitch)`
  transform: scale(1.2);
`;
