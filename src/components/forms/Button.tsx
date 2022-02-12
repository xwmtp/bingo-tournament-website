import styled from "styled-components";
import React from "react";
import { ColorName, Colors } from "../../GlobalStyle";

export interface ButtonProps extends ButtonLayoutProps {
  onClick?: () => void;
  href?: string;
}

export interface ButtonLayoutProps {
  $color?: ColorName;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  href,
  children,
  $color,
}) => {
  let StyledButton = DefaultButton;
  if (disabled) {
    StyledButton = DisabledButton;
  }
  return (
    <StyledButton
      $color={$color}
      onClick={onClick}
      href={href}
      target={"_blank"}
    >
      {children}
    </StyledButton>
  );
};

const DefaultButton = styled.a<ButtonLayoutProps>`
  background-color: ${({ $color }) => {
    return $color ? Colors[$color] : "black";
  }};
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s;

  &:active {
    opacity: 0.7;
  }
`;

const DisabledButton = styled(DefaultButton)`
  --disabled-opacity: 0.3;
  opacity: var(--disabled-opacity);
  cursor: default;

  &:active {
    opacity: var(--disabled-opacity);
  }
`;
