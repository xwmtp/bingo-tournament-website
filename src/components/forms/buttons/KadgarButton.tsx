import React from "react";
import styled from "styled-components";
import { MdOutlineLiveTv } from "react-icons/md";
import { IconUrlButton } from "../IconButton";

interface Props {
  text?: string;
  url?: string;
  className?: string;
}

export const KadgarButton: React.FC<Props> = ({ text, url, className }) => {
  return (
    <IconUrlButton
      text={text ?? "Kadgar"}
      Icon={KadgarIcon}
      url={url}
      color={"jeansBlue"}
      className={className}
    />
  );
};

const KadgarIcon = styled(MdOutlineLiveTv)`
  transform: scale(1.2);
`;
