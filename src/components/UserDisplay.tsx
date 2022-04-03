import React from "react";
import { User } from "../domain/User";
import styled from "styled-components";
import { Avatar } from "./Avatar";
import { truncateString } from "../lib/stringHelpers";
import { FlexDiv } from "./divs/FlexDiv";

interface Props {
  user: User;
}

export const UserDisplay: React.FC<Props> = ({ user }) => {
  return (
    <UserStyled>
      <Avatar src={user.avatar} $sizeRem={1.6} />
      <p>{truncateString(user.name, 20)}</p>
    </UserStyled>
  );
};

const UserStyled = styled(FlexDiv)`
  justify-content: start;
  min-width: 13rem;
`;
