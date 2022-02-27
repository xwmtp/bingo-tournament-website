import styled from "styled-components";
import React from "react";
import { UrlButton } from "../forms/UrlButton";

export const LoginButton: React.FC = () => {
  return (
    <div>
      <StyledLoginButton
        color={"brightMossGreen"}
        url={"https://www.speedrun.com/"}
      >
        Login with racetime.gg
      </StyledLoginButton>
    </div>
  );
};

const StyledLoginButton = styled(UrlButton)``;
