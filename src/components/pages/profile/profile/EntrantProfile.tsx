import React from "react";
import { Container } from "../../../Container";
import { User } from "../../../../domain/User";
import { Avatar } from "../../../Avatar";
import styled from "styled-components";
import { Colors } from "../../../../GlobalStyle";

interface Props {
  user: User;
}

export const EntrantProfile: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <Profile>
        <Avatar src={user.avatar} $sizeRem={5} />

        <NameAndRole>
          <h2>{user.name}</h2>
          <Role>Entrant</Role>
        </NameAndRole>
      </Profile>
    </Container>
  );
};

const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const NameAndRole = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

const Role = styled.p`
  color: ${Colors.brighterMossGreen};
`;
