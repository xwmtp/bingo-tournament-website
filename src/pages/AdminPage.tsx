import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { AllEntrants } from "../components/pages/profile/admin/AllEntrants";
import { UnscheduledMatches } from "../components/pages/profile/schedule/UnscheduledMatches";
import { AddMatches } from "../components/pages/profile/admin/addMatches/AddMatches";
import { UnrecordedMatches } from "../components/pages/profile/admin/addMatches/UnrecordedMatches";
import { useScheduledMatches, useUnscheduledMatches } from "../api/matchesApi";

export const AdminPage: React.FC = () => {
  const { data: allScheduledMatches } = useScheduledMatches();
  const { data: allUnscheduledMatches } = useUnscheduledMatches();

  return (
    <AdminPageDiv>
      <Container title={"All entrants"} size="small">
        <AllEntrants />
      </Container>
      <Container title={"Add new matches"} size="small">
        <AddMatches />
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
