import React from "react";
import { TwitchButton } from "./TwitchButton";

interface Props {
  restreamChannel?: string;
  className?: string;
}

export const RestreamButton: React.FC<Props> = ({ restreamChannel, className }) => {
  return (
    <TwitchButton
      label={restreamChannel}
      text="Restream"
      url={restreamChannel && `https://twitch.tv/${restreamChannel}`}
      className={className}
    />
  );
};
