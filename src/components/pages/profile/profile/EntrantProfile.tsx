import React from "react";
import { Container } from "../../../Container";
import { User } from "../../../../domain/User";
import { Avatar } from "../../../Avatar";
import styled from "styled-components";
import { Colors } from "../../../../GlobalStyle";
import { Button } from "../../../forms/Button";
import { useMutation, useQueryClient } from "react-query";
import { withdraw } from "../../../../api/userApi";
import { FlexDiv } from "../../../divs/FlexDiv";

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
  const buttonDisabled = withdrawMutation.isLoading || withdrawMutation.isSuccess;

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

        <WithdrawButton
          disabled={buttonDisabled}
          color={"coral"}
          size={"normal"}
          onClick={() => {
            !buttonDisabled && withdrawMutation.mutate();
          }}
        >
          {withdrawButtonText(withdrawMutation.status)}
        </WithdrawButton>
      </Profile>
    </Container>
  );
};

const withdrawButtonText = (status: "idle" | "loading" | "error" | "success") => {
  switch (status) {
    case "idle":
      return "Withdraw from tournament";
    case "loading":
      return "...";
    case "error":
      return "Retry withdraw from tournament";
    case "success":
      return "";
  }
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

const WithdrawButton = styled(Button)`
  width: 12rem;
  margin: 1.2rem 0;
  flex-grow: 0;
`;
