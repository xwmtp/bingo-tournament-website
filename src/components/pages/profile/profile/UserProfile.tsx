import React, { useState } from "react";
import { Container } from "../../../Container";
import { isEntrant, User } from "../../../../domain/User";
import { Avatar } from "../../../Avatar";
import styled from "styled-components";
import { Colors } from "../../../../GlobalStyle";
import { FlexDiv } from "../../../divs/FlexDiv";
import { Button } from "../../../forms/Button";
import { ConfirmWithdrawalModal } from "./ConfirmWithdrawalModal";
import { tournamentSettings } from "../../../../Settings";
import { capitalize } from "../../../../lib/stringHelpers";
import { RacetimeButton } from "../../../forms/buttons/RacetimeButton";

interface Props {
  user: User;
}

export const UserProfile: React.FC<Props> = ({ user }) => {
  const [showWithdrawModal, setShowWithdrawModal] = useState<boolean>(false);

  return (
    <>
      <Container>
        <Profile>
          <UserDiv>
            <Avatar user={user} sizeRem={5} />

            <NameAndRoles>
              <h2>{user.name}</h2>
              <Role>{user.roles.map((role) => capitalize(role.toLowerCase())).join(" • ")}</Role>
              <RacetimeButtonStyled
                text="racetime.gg"
                url={`https://racetime.gg/user/${user.id}`}
              />
            </NameAndRoles>
          </UserDiv>

          {isEntrant(user) && tournamentSettings.CAN_WITHDRAW && (
            <WithdrawButton
              size="normal"
              color={"coral"}
              onClick={() => setShowWithdrawModal(true)}
            >
              Withdraw from tournament
            </WithdrawButton>
          )}
        </Profile>

        <ConfirmWithdrawalModal
          visible={showWithdrawModal}
          onClose={() => setShowWithdrawModal(false)}
        />
      </Container>
    </>
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

const NameAndRoles = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-right: 1rem;
`;

const Role = styled.p`
  color: ${Colors.brighterMossGreen};
`;

const RacetimeButtonStyled = styled(RacetimeButton)`
  width: min-content;
  margin-top: 0.4rem;
`;

const WithdrawButton = styled(Button)`
  flex-grow: 0;
`;
