import React from "react";
import { Container } from "../components/Container";
import { FlexDiv } from "../components/divs/FlexDiv";
import styled from "styled-components";
import { getApi } from "../api/api";
import { Button } from "../components/forms/Button";
import { useUser } from "../api/userApi";
import { User } from "../domain/User";

export const ProfileSettingsPage: React.FC = () => {
  const { data: user, isLoading, isError } = useUser();

  if (isLoading) {
    return (
      <ProfileSettingsPageDiv>
        <Container>...</Container>
      </ProfileSettingsPageDiv>
    );
  }

  if (isError) {
    return (
      <ProfileSettingsPageDiv>
        <Container>Something went wrong</Container>
      </ProfileSettingsPageDiv>
    );
  }

  if (!user) {
    return (
      <ProfileSettingsPageDiv>
        <Container>Something went wrong</Container>
      </ProfileSettingsPageDiv>
    );
  }

  return (
    <ProfileSettingsPageDiv>
      <Container>
        <SignUpDiv>
          <h4>Sign up now for the 2022 OoT Bingo Tournament is now open! </h4>
          <SignUpButton color={"brightMossGreen"} size={"big"} onClick={() => signUp(user)}>
            Sign up
          </SignUpButton>
        </SignUpDiv>
      </Container>
    </ProfileSettingsPageDiv>
  );
};

const signUp = (user: User) => {
  getApi()
    .signUp()
    .then(() => {
      // sign up user
      console.log("signing up user " + user.id);
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
