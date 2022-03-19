import React from "react";
import { FlexDiv } from "../divs/FlexDiv";
import { DesktopOnly } from "../divs/DesktopOnly";
import { NavLink } from "react-router-dom";
import { User } from "../../domain/User";
import { Avatar } from "../Avatar";
import { truncateString } from "../../lib/stringHelpers";

interface Props {
  user: User;
}

export const LoggedInUserDisplay: React.FC<Props> = ({ user }) => {
  return (
    <NavLink to="/profile/settings">
      <FlexDiv>
        <Avatar src={user.avatar} $sizeRem={2} />
        <DesktopOnly>{truncateString(user.name, 24)}</DesktopOnly>
      </FlexDiv>
    </NavLink>
  );
};
