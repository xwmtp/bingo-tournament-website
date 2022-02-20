import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ProfileNav } from "../components/profile/ProfileNav";

export const ProfilePage: React.FC = () => {
  return (
    <ProfilePageDiv>
      <ProfileNav />
      <Outlet />
    </ProfilePageDiv>
  );
};

const ProfilePageDiv = styled.div`
  flex-direction: column;
`;
