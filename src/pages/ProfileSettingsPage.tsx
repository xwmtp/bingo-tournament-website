import React from "react";
import styled from "styled-components";
import { SignUp } from "../components/pages/profile/profile/SignUp";

export const ProfileSettingsPage: React.FC = () => {
  return (
    <ProfileSettingsPageDiv>
      <SignUp />
    </ProfileSettingsPageDiv>
  );
};

const ProfileSettingsPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
