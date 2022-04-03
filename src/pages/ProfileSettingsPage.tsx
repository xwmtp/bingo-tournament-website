import React, { useContext } from "react";
import { Container } from "../components/Container";
import { FlexDiv } from "../components/divs/FlexDiv";
import styled from "styled-components";
import { getApi } from "../api/api";
import { UserContext } from "../App";
import { Button } from "../components/forms/Button";

export const ProfileSettingsPage: React.FC = () => {
  const userContext = useContext(UserContext);
  return (
    <ProfileSettingsPageDiv>
      <Container>
        <SignUpDiv>
          <h4>Sign up now for the 2022 OoT Bingo Tournament is now open! </h4>
          <SignUpButton
            color={"brightMossGreen"}
            size={"big"}
            onClick={() => signUp(userContext.fetchUser)}
          >
            Sign up
          </SignUpButton>
        </SignUpDiv>
      </Container>
    </ProfileSettingsPageDiv>
  );
};

const signUp = (fetchUser: () => void) => {
  getApi()
    .signUp()
    .then(() => {
      fetchUser();
    })
    .catch((error) => {
      console.log("Could not sign up! " + error);
    });
};

const SignUpDiv = styled(FlexDiv)`
  flex-direction: column;
`;

const SignUpButton = styled(Button)`
  margin: 1.2rem 0;
`;

const ProfileSettingsPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
