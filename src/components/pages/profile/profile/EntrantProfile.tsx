import React, { useState } from "react";
import { Container } from "../../../Container";
import { User } from "../../../../domain/User";
import { Avatar } from "../../../Avatar";
import styled from "styled-components";
import { Colors } from "../../../../GlobalStyle";
import { FlexDiv } from "../../../divs/FlexDiv";
import { Button } from "../../../forms/Button";
import { ConfirmWithdrawalModal } from "./ConfirmWithdrawalModal";

interface Props {
  user: User;
}

export const EntrantProfile: React.FC<Props> = ({ user }) => {
  const [showWithdrawModal, setShowWithdrawModal] = useState<boolean>(false);

  return (
    <Container>
      <Profile>
        <UserDiv>
          <Avatar user={user} sizeRem={5} />

          <NameAndRole>
            <h2>{user.name}</h2>
            <Role>Entrant</Role>
          </NameAndRole>
        </UserDiv>

        <WithdrawButton size="normal" color={"coral"} onClick={() => setShowWithdrawModal(true)}>
          Withdraw from tournament
        </WithdrawButton>
      </Profile>

      <ConfirmWithdrawalModal
        visible={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
      />
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

const WithdrawButton = styled(Button)`
  flex-grow: 0;
`;
