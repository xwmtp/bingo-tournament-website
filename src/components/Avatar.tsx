import React from "react";
import styled from "styled-components";

interface Props {
  src?: string;
  $sizeRem?: number;
}

export const Avatar: React.FC<Props> = ({ src, $sizeRem }) => {
  return <AvatarStyled src={src} $size={$sizeRem || 1.6} />;
};

const AvatarStyled = styled.img<{ $size: number }>`
  --size: ${({ $size }) => $size}rem;
  width: var(--size);
  height: var(--size);
  border-radius: 10rem;
  margin-right: 0.6rem;
`;
