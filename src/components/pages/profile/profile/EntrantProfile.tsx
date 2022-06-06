import React from "react";
import { Container } from "../../../Container";
import { User } from "../../../../domain/User";
import { Avatar } from "../../../Avatar";
import styled from "styled-components";
import { Colors } from "../../../../GlobalStyle";
import { useMutation, useQueryClient } from "react-query";
import { withdraw } from "../../../../api/userApi";
import { FlexDiv } from "../../../divs/FlexDiv";
import { MutationButton } from "../../../forms/buttons/MutationButton";

interface Props {
  user: User;
}

export const EntrantProfile: React.FC<Props> = ({ user }) => {
  const queryClient = useQueryClient();
  const withdrawMutation = useMutation(withdraw, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });

  return (
    <Container>
      <Profile>
        <UserDiv>
          <Avatar src={user.avatar} $sizeRem={5} />

          <NameAndRole>
            <h2>{user.name}</h2>
            <Role>Entrant</Role>
          </NameAndRole>
        </UserDiv>

        <MutationButton
          mutationStatus={withdrawMutation.status}
          onIdleText="Withdraw from tournament"
          color={"coral"}
          size={"normal"}
          onClick={withdrawMutation.mutate}
        />
      </Profile>
    </Container>
  );
};

const Profile = styled(FlexDiv)`
  justify-content: space-between;
`;

const UserDiv = styled.div`
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
