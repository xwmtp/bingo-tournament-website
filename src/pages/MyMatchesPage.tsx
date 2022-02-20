import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { ScheduledMatches } from "../components/schedule/ScheduledMatches";
import { mockLoggedInUser, mockMatches } from "../domain/MockData";

export const MyMatchesPage: React.FC = () => {
  const userScheduledMatches = mockMatches.filter((match) =>
    match.includesEntrant(mockLoggedInUser.name)
  );

  return (
    <ProfilePageDiv>
      <Container title={"Unscheduled"} size="small" />
      <Container title={"Scheduled"} size="small">
        <ScheduledMatches matches={userScheduledMatches} />
      </Container>
    </ProfilePageDiv>
  );
};

const ProfilePageDiv = styled.div`
  flex-direction: column;
`;
