import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { TabSelector } from "../components/TabSelector";
import { Margins } from "../GlobalStyle";

export const ProfilePage: React.FC = () => {
  return (
    <ProfilePageDiv>
      <StyledTabSelector
        tabOptions={[
          { title: "Profile", to: "/profile/settings" },
          { title: "Matches", to: "/profile/matches" },
          { title: "Admin", to: "/profile/admin" },
        ]}
      />
      <Outlet />
    </ProfilePageDiv>
  );
};

const ProfilePageDiv = styled.div`
  flex-direction: column;
`;

const StyledTabSelector = styled(TabSelector)`
  margin-bottom: ${Margins.container}px;
`;
