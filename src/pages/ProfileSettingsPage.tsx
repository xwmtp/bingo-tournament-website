import React from "react";
import { Container } from "../components/Container";
import { FlexDiv } from "../components/divs/FlexDiv";
import { Button } from "../components/forms/Button";
import styled from "styled-components";

export const ProfileSettingsPage: React.FC = () => {
  return (
    <ProfileSettingsPageDiv>
      <Container>
        <SignUpDiv>
          <h4>Sign up now for the 2022 OoT Bingo Tournament is now open! </h4>
          <SignUpButton color={"brightMossGreen"} size={"big"}>
            Sign up
          </SignUpButton>
        </SignUpDiv>
      </Container>
    </ProfileSettingsPageDiv>
  );
};

const SignUpDiv = styled(FlexDiv)`
  flex-direction: column;
`;

const SignUpButton = styled(Button)`
  margin: 20px 0;
`;

const ProfileSettingsPageDiv = styled.div`
  flex-direction: column;
`;
