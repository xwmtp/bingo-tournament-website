import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { AllEntrants } from "../components/profile/admin/AllEntrants";
import { mockUnscheduledMatches } from "../domain/MockData";
import { UnscheduledMatches } from "../components/schedule/UnscheduledMatches";
import { AddMatches } from "../components/profile/admin/addMatches/AddMatches";

export const AdminPage: React.FC = () => {
  const allUnscheduledMatches = mockUnscheduledMatches;
  return (
    <AdminPageDiv>
      <Container title={"All entrants"} size="small">
        <AllEntrants />
      </Container>
      <Container title={"Add new matches"} size="small">
        <AddMatches />
      </Container>
      <Container title={"All unscheduled matches"} size="small">
        <UnscheduledMatches matches={allUnscheduledMatches} />
      </Container>
    </AdminPageDiv>
  );
};

const AdminPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
