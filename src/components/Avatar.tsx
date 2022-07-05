import React from "react";
import styled from "styled-components";
import { User } from "../domain/User";
import { FlexDiv } from "./divs/FlexDiv";

interface Props {
  user: User;
  sizeRem?: number;
  className?: string;
}

export const Avatar: React.FC<Props> = ({ user, className, sizeRem }) => {
  return (
    <AvatarDiv $size={sizeRem || 1.6} $backgroundUrl={user.avatar}>
      <AvatarImg
        title={user.name}
        alt={`${user.name}'s avatar`}
        src={user.avatar}
        className={className}
      />
    </AvatarDiv>
  );
};

const AvatarDiv = styled(FlexDiv)<{ $size: number; $backgroundUrl: string }>`
  --size: ${({ $size }) => $size}rem;
  width: var(--size);
  height: var(--size);
  overflow: hidden;
  border-radius: 10rem;
  background-size: cover;
  background: url(${({ $backgroundUrl }) => $backgroundUrl}) no-repeat center center;
`;

const AvatarImg = styled.img`
  min-height: 100%;
  min-width: 100%;
`;
