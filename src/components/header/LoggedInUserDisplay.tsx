import React from "react";
import { FlexDiv } from "../divs/FlexDiv";
import { DesktopOnly } from "../divs/DesktopOnly";
import { NavLink } from "react-router-dom";
import { User } from "../../domain/User";
import { Avatar } from "../Avatar";
import { truncateString } from "../../lib/stringHelpers";
import styled from "styled-components";

interface Props {
  user: User;
}

export const LoggedInUserDisplay: React.FC<Props> = ({ user }) => {
  return (
    <NavLinkStyled to="/profile/settings">
      <FlexDiv>
        <Avatar src={user.avatar} $sizeRem={2} />
        <DesktopOnly>{truncateString(user.name, 24)}</DesktopOnly>
      </FlexDiv>
    </NavLinkStyled>
  );
};

const NavLinkStyled = styled(NavLink)`
  padding: 10px;
`;
