import React from "react";
import { FlexDiv } from "../divs/FlexDiv";
import { DesktopOnly } from "../divs/DesktopOnly";
import { NavLink } from "react-router-dom";
import { User } from "../../domain/User";
import { Avatar } from "../Avatar";

interface Props {
  user: User;
}

export const LoggedInUserDisplay: React.FC<Props> = ({ user }) => {
  return (
    <NavLink to="/profile/settings">
      <FlexDiv>
        <Avatar src={user.avatar} $sizeRem={2} />
        <DesktopOnly>{user.name}</DesktopOnly>
      </FlexDiv>
    </NavLink>
  );
};
