import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { ScheduledMatches } from "../components/schedule/ScheduledMatches";
import { mockMatches } from "../domain/MockData";

export const MyMatchesPage: React.FC = () => {
  return (
    <ProfilePageDiv>
      <Container title={"Unscheduled"} size="small" />
      <Container title={"Scheduled"} size="small">
        <ScheduledMatches matches={mockMatches} />
      </Container>
    </ProfilePageDiv>
  );
};

const ProfilePageDiv = styled.div`
  flex-direction: column;
`;
