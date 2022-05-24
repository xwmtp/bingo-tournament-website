import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { AllEntrants } from "../components/profile/admin/AllEntrants";
import { mockUnscheduledMatches } from "../domain/MockData";
import { UnscheduledMatches } from "../components/schedule/UnscheduledMatches";
import { AddMatches } from "../components/profile/admin/AddMatches";

export const AdminPage: React.FC = () => {
  const allUnscheduledMatches = mockUnscheduledMatches;
  return (
    <AdminPageDiv>
      <Container title={"Entrants"} size="small">
        <AllEntrants />
      </Container>
      <Container title={"Add matches"} size="small">
        <AddMatches />
      </Container>
      <Container title={"Unscheduled"} size="small">
        <UnscheduledMatches matches={allUnscheduledMatches} />
      </Container>
    </AdminPageDiv>
  );
};

const AdminPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
