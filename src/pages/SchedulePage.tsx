import { Container } from "../components/Container";
import { DateTime } from "luxon";
import React from "react";
import { ScheduledMatch } from "../domain/Schedule";
import { ScheduledMatches } from "../components/schedule/ScheduledMatches";

const matches: ScheduledMatch[] = [
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

export const SchedulePage: React.FC = () => {
  return (
    <Container title={"Schedule"}>
      <ScheduledMatches matches={matches} />
    </Container>
  );
};
