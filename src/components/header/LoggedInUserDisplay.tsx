import React from "react";
import { FlexDiv } from "../divs/FlexDiv";
import { WideScreenOnly } from "../divs/WideScreenOnly";
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
        <WideScreenOnly>{truncateString(user.name, 24)}</WideScreenOnly>
      </FlexDiv>
    </NavLinkStyled>
  );
};

const NavLinkStyled = styled(NavLink)`
  padding: 0.6rem;
`;
