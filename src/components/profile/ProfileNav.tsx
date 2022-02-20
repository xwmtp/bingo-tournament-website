import React from "react";
import styled from "styled-components";
import { NavContainer } from "../NavContainer";
import { NavLink } from "react-router-dom";

export const ProfileNav: React.FC = () => {
  return (
    <ProfileNavContainer>
      <Link to={"/profile/settings"}>Settings</Link>
      <Link to={"/profile/matches"}>My matches</Link>
    </ProfileNavContainer>
  );
};

const ProfileNavContainer = styled(NavContainer)`
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  padding: 0 10px;
  font-size: 1.3rem;
`;
