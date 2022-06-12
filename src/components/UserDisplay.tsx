import React from "react";
import { User } from "../domain/User";
import styled from "styled-components";
import { Avatar } from "./Avatar";
import { truncateString } from "../lib/stringHelpers";
import { FlexDiv } from "./divs/FlexDiv";
import { WideScreenOnly } from "./divs/WideScreenOnly";

interface Props {
  user: User;
  size?: "big" | "normal";
  wideScreenOnlyName?: boolean;
  className?: string;
}

export const UserDisplay: React.FC<Props> = ({ user, size, wideScreenOnlyName, className }) => {
  const avatarSize = size === "big" ? 2.1 : 1.6;

  const NameWrapper = wideScreenOnlyName ? WideScreenOnly : React.Fragment;

  return (
    <UserStyled className={className}>
      <Avatar src={user.avatar} $sizeRem={avatarSize} />
      <NameWrapper>
        <Name $marginLeft={avatarSize * 0.375}>{truncateString(user.name, 20)}</Name>
      </NameWrapper>
    </UserStyled>
  );
};

const UserStyled = styled(FlexDiv)`
  justify-content: start;
`;

const Name = styled.p<{ $marginLeft: number }>`
  margin-left: ${({ $marginLeft }) => $marginLeft}rem;
  font-size: 1rem;
  min-width: 10rem;
`;
