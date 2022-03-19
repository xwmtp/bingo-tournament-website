import React from "react";
import { User } from "../domain/User";
import styled from "styled-components";
import { Avatar } from "./Avatar";

interface Props {
  user: User;
}

export const UserDisplay: React.FC<Props> = ({ user }) => {
  return (
    <StyledEntrantDisplay>
      <Avatar src={user.avatar} $sizeRem={1.6} />
      <p>{user.name}</p>
    </StyledEntrantDisplay>
  );
};

const StyledEntrantDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 12rem;
`;
