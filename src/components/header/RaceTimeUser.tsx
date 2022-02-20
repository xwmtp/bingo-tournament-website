import styled from "styled-components";
import React from "react";
import { FlexDiv } from "../divs/FlexDiv";
import { DesktopOnly } from "../divs/DesktopOnly";
import { NavLink } from "react-router-dom";

const user = {
  name: "scaramangado",
  discriminator: 9143,
  avatar: "https://racetime.gg/media/feynman_small.jpeg",
};

export const RaceTimeUser: React.FC = () => {
  return (
    <NavLink to="/profile/settings">
      <FlexDiv>
        <UserAvatar src={user.avatar} />

        <DesktopOnly>{user.name}</DesktopOnly>
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
