import React from "react";
import styled from "styled-components";
import { SignUp } from "../components/pages/profile/profile/SignUp";
import { UserProfile } from "../components/pages/profile/profile/UserProfile";
import { useUser } from "../api/userApi";
import { isEntrant } from "../domain/User";
import { Container } from "../components/Container";

export const ProfileSettingsPage: React.FC = () => {
  const { data: user } = useUser();

  if (!user) {
    return (
      <ProfileSettingsPageDiv>
        <Container>
          <p>Log in to visit the profile page</p>
        </Container>
      </ProfileSettingsPageDiv>
    );
  }

  return (
    <ProfileSettingsPageDiv>
      {<UserProfile user={user} />}
      {!isEntrant(user) && <SignUp />}
    </ProfileSettingsPageDiv>
  );
};

const ProfileSettingsPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
