import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { AllEntrants } from "../components/pages/profile/admin/AllEntrants";
import { mockScheduledMatches, mockUnscheduledMatches } from "../domain/MockData";
import { UnscheduledMatches } from "../components/pages/profile/schedule/UnscheduledMatches";
import { AddMatches } from "../components/pages/profile/admin/addMatches/AddMatches";
import { UnrecordedMatches } from "../components/pages/profile/admin/addMatches/UnrecordedMatches";

export const AdminPage: React.FC = () => {
  const allUnscheduledMatches = mockUnscheduledMatches;
  const allScheduledMatches = mockScheduledMatches;
  return (
    <AdminPageDiv>
      <Container title={"All entrants"} size="small">
        <AllEntrants />
      </Container>
      <Container title={"Add new matches"} size="small">
        <AddMatches />
      </Container>
      <Container title={"All unrecorded matches"} size="small">
        <UnrecordedMatches scheduledMatches={allScheduledMatches} />
      </Container>
      <Container title={"All unscheduled matches"} size="small">
        <UnscheduledMatches unscheduledMatches={allUnscheduledMatches} />
      </Container>
    </AdminPageDiv>
  );
};

const AdminPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
