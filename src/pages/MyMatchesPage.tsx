import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { ScheduledMatches } from "../components/schedule/ScheduledMatches";
import { ScheduledMatch } from "../domain/Schedule";
import { DateTime } from "luxon";

const mockMatches: ScheduledMatch[] = [
  {
    entrant1: "Fleush",
    entrant2: "matttinthehat",
    startTime: DateTime.fromISO("2022-02-02T19:45:03Z"),
    round: "Round 1",
    restreamChannel: "xwillmarktheplace",
  },
  {
    entrant1: "xwillmarktheplace",
    entrant2: "scaramangado",
    startTime: DateTime.fromISO("2022-02-04T04:45:03Z"),
    round: "Round 1",
    restreamChannel: "ZeldaSpeedruns",
  },
  {
    entrant1: "juwk",
    entrant2: "jenslang",
    startTime: DateTime.fromISO("2022-02-04T23:30:03Z"),
    round: "Round 1",
  },
];

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
