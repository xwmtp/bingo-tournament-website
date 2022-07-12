import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { AllEntrants } from "../components/pages/profile/admin/AllEntrants";
import { UnscheduledMatches } from "../components/pages/schedule/UnscheduledMatches";
import { AddMatches } from "../components/pages/profile/admin/addMatches/AddMatches";
import { UnrecordedMatches } from "../components/pages/profile/admin/addMatches/UnrecordedMatches";
import { useScheduledMatches, useUnscheduledMatches } from "../api/matchesApi";
import { useUser } from "../api/userApi";
import { isAdmin } from "../domain/User";
import { EditRoles } from "../components/pages/profile/admin/editRoles/EditRoles";
import { Button } from "../components/forms/Button";
import { Link } from "react-router-dom";

export const AdminPage: React.FC = () => {
  const { data: user } = useUser();
  const { data: allScheduledMatches } = useScheduledMatches();
  const { data: allUnscheduledMatches } = useUnscheduledMatches();

  if (!user) {
    return <></>;
  }

  if (!isAdmin(user)) {
    return (
      <AdminPageDiv>
        <Container>
          <p>This page is admin only</p>
        </Container>
      </AdminPageDiv>
    );
  }

  return (
    <AdminPageDiv>
      <Container title={"All entrants"} size="small">
        <AllEntrants />
      </Container>
      <Container title={"Add new matches"} size="small">
        <AddMatches />
      </Container>
      <Container title={"Edit roles"} size="small">
        <EditRoles />
      </Container>
      <Container title={"Display pairings"} size="small">
        <Link to="/pairing">
          <PairingPageButton size="big" color="brightMossGreen">
            To pairings page
          </PairingPageButton>
        </Link>
      </Container>
      <Container title={"All unrecorded matches"} size="small">
        {allScheduledMatches && <UnrecordedMatches scheduledMatches={allScheduledMatches} />}
      </Container>
      <Container title={"All unscheduled matches"} size="small">
        {allUnscheduledMatches && <UnscheduledMatches unscheduledMatches={allUnscheduledMatches} />}
      </Container>
    </AdminPageDiv>
  );
};

const AdminPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;

const PairingPageButton = styled(Button)`
  width: 13rem;
`;
