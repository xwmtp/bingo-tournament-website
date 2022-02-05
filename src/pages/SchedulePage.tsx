import { Container } from "../components/Container";
import { MatchBlock } from "../components/schedule/MatchBlock";
import { DateTime } from "luxon";
import { groupBy } from "../lib/groupBy";
import React from "react";
import styled from "styled-components";
import { ScheduledMatch } from "../domain/Schedule";

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
  const matchesByDate = groupBy(matches, (match) =>
    match.startTime
      .setLocale("en-us")
      .setZone("EST")
      .toLocaleString({ weekday: "long", month: "long", day: "numeric" })
  );

  return (
    <Container width={1000}>
      <div>
        <h1>Schedule</h1>
        <p>Here comes the schedule</p>

        {Object.keys(matchesByDate).map((formattedDate) => {
          return (
            <MatchesByDate key={formattedDate}>
              <h3>{formattedDate}</h3>
              {matchesByDate[formattedDate].map((match) => (
                <MatchBlock
                  key={
                    match.entrant1 +
                    match.entrant2 +
                    match.startTime.toLocaleString()
                  }
                  match={match}
                />
              ))}
            </MatchesByDate>
          );
        })}
      </div>
    </Container>
  );
};

const MatchesByDate = styled.div`
  margin-top: 20px;
`;
