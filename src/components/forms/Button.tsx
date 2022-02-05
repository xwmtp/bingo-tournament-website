import styled from "styled-components";
import React from "react";
import { ColorName, Colors } from "../../GlobalStyle";

export interface ButtonProps extends ButtonLayoutProps {
  onClick?: () => void;
  href?: string;
}

export interface ButtonLayoutProps {
  color?: ColorName;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  color,
  disabled,
  onClick,
  href,
  children,
}) => {
  let StyledButton = DefaultButton;
  if (disabled) {
    StyledButton = DisabledButton;
  }
  return (
    <StyledButton color={color} onClick={onClick} href={href} target={"_blank"}>
      {children}
    </StyledButton>
  );
};

const DefaultButton = styled.a<ButtonLayoutProps>`
  background-color: ${(props) => {
    console.log(props.color);
    return props.color ? Colors[props.color] : "black";
  }};
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.1s;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.7;
  }
`;

const DisabledButton = styled(DefaultButton)`
  --disabled-opacity: 0.3;
  opacity: var(--disabled-opacity);
  cursor: default;

  &:hover {
    opacity: var(--disabled-opacity);
  }

  &:active {
    opacity: var(--disabled-opacity);
  }
`;
