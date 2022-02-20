import styled from "styled-components";
import React from "react";
import { FlexDiv } from "../divs/FlexDiv";
import { DesktopOnly } from "../divs/DesktopOnly";
import { NavLink } from "react-router-dom";
import { mockLoggedInUser } from "../../domain/MockData";

export const RaceTimeUser: React.FC = () => {
  return (
    <NavLink to="/profile/settings">
      <FlexDiv>
        <UserAvatar src={mockLoggedInUser.avatar} />

        <DesktopOnly>{mockLoggedInUser.name}</DesktopOnly>
      </FlexDiv>
    </NavLink>
  );
};

const UserAvatar = styled.img`
  --size: 3rem;
  width: var(--size);
  height: var(--size);
  border-radius: 50px;
  margin-right: 10px;
`;
