import React from "react";
import { RacetimeButton } from "../forms/buttons/RacetimeButton";
import styled from "styled-components";

export const LoginButton: React.FC = () => {
  return (
    <ButtonDiv>
      <RacetimeButton
        text={"Login with racetime.gg"}
        url={"http://localhost:8080/login/racetime"}
      >
        Login with racetime.gg
      </RacetimeButton>
    </ButtonDiv>
  );
};

const ButtonDiv = styled.div`
  margin: 0 10px;
`;
