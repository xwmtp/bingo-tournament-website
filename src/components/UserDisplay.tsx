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
  wideScreenOnlyAvatar?: boolean;
  wideScreenOnlyName?: boolean;
  className?: string;
}

export const UserDisplay: React.FC<Props> = ({
  user,
  size,
  wideScreenOnlyAvatar,
  wideScreenOnlyName,
  removeNamePadding,
  className,
}) => {
  const avatarSize = size === "big" ? 2.1 : 1.6;

  const AvatarWrapper = wideScreenOnlyAvatar ? WideScreenOnly : React.Fragment;
  const NameWrapper = wideScreenOnlyName ? WideScreenOnly : React.Fragment;
  const EmptySpaceWrapper =
    wideScreenOnlyAvatar || wideScreenOnlyName ? WideScreenOnly : React.Fragment;

  return (
    <UserStyled className={className}>
      <AvatarWrapper>
        <Avatar user={user} sizeRem={avatarSize} />
      </AvatarWrapper>

      <EmptySpaceWrapper>
        <EmptySpace $width={avatarSize * 0.375} />
      </EmptySpaceWrapper>

      <NameWrapper>
        <Name $removeNamePadding={removeNamePadding}>{truncateString(user.name, 20)}</Name>
      </NameWrapper>
    </UserStyled>
  );
};

const EmptySpace = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}rem;
`;

const UserStyled = styled(FlexDiv)`
  justify-content: start;
`;

const Name = styled.p<{ $removeNamePadding?: boolean }>`
  font-size: 1rem;
  min-width: ${({ $removeNamePadding }) => ($removeNamePadding ? "1rem" : "10rem")};
`;
