import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { RouteTabSelector } from "../components/RouteTabSelector";
import { Margins } from "../GlobalStyle";

export const ProfilePage: React.FC = () => {
  return (
    <>
      <TabSelectorStyled
        tabOptions={[
          { title: "Profile", to: "/profile/settings" },
          { title: "My Matches", to: "/profile/matches" },
          { title: "Admin", to: "/profile/admin" },
        ]}
      />
      <Outlet />
    </>
  );
};

const TabSelectorStyled = styled(RouteTabSelector)`
  margin-bottom: ${Margins.container}rem;
`;
