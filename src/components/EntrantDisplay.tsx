import React from "react";
import { User } from "../domain/User";
import styled from "styled-components";
import { Avatar } from "./Avatar";

interface Props {
  entrant: User;
}

export const EntrantDisplay: React.FC<Props> = ({ entrant }) => {
  return (
    <StyledEntrantDisplay>
      <Avatar src={entrant.avatar} $sizeRem={1.6} />
      <p>{entrant.name}</p>
    </StyledEntrantDisplay>
  );
};

const StyledEntrantDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
