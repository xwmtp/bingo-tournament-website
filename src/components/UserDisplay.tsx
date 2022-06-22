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
  removeNamePadding?: boolean;
  wideScreenOnlyName?: boolean;
  className?: string;
}

export const UserDisplay: React.FC<Props> = ({
  user,
  size,
  wideScreenOnlyName,
  removeNamePadding,
  className,
}) => {
  const avatarSize = size === "big" ? 2.1 : 1.6;

  const NameWrapper = wideScreenOnlyName ? WideScreenOnly : React.Fragment;

  return (
    <UserStyled className={className}>
      <Avatar user={user} $sizeRem={avatarSize} />
      <NameWrapper>
        <Name $marginLeft={avatarSize * 0.375} $removeNamePadding={removeNamePadding}>
          {truncateString(user.name, 20)}
        </Name>
      </NameWrapper>
    </UserStyled>
  );
};

const UserStyled = styled(FlexDiv)`
  justify-content: start;
`;

const Name = styled.p<{ $marginLeft: number; $removeNamePadding?: boolean }>`
  margin-left: ${({ $marginLeft }) => $marginLeft}rem;
  font-size: 1rem;
  min-width: ${({ $removeNamePadding }) => ($removeNamePadding ? "1rem" : "10rem")};
`;
