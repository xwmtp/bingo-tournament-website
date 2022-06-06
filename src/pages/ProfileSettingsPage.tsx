import React from "react";
import styled from "styled-components";
import { SignUp } from "../components/pages/profile/profile/SignUp";
import { EntrantProfile } from "../components/pages/profile/profile/EntrantProfile";
import { useUser } from "../api/userApi";

export const ProfileSettingsPage: React.FC = () => {
  const { data: user } = useUser();

  return (
    <ProfileSettingsPageDiv>
      <SignUp />
      {user && <EntrantProfile user={user} />}
    </ProfileSettingsPageDiv>
  );
};

const ProfileSettingsPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
