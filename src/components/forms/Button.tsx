import styled from "styled-components";
import React from "react";
import { ColorNames, Colors } from "../../GlobalStyle";

interface Props {
  color?: ColorNames;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({ disabled, children }) => {
  let StyledButton = DefaultButton;
  if (disabled) {
    StyledButton = DisabledButton;
  }
  return <StyledButton>{children}</StyledButton>;
};

const DefaultButton = styled.button`
  background-color: ${(props) =>
    props.color ? Colors[props.color] : Colors.twitchPurple};
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
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
