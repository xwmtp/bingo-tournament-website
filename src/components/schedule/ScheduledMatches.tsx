import { MatchBlock } from "./MatchBlock";
import { groupBy } from "../../lib/groupBy";
import React from "react";
import styled from "styled-components";
import { ScheduledMatch } from "../../domain/Match";
import { DateTime } from "luxon";

interface Props {
  matches: ScheduledMatch[];
}

const now = DateTime.local(2022, 2, 4, 6, 10, 0);

export const ScheduledMatches: React.FC<Props> = ({ matches }) => {
  const relevantMatches = matches.filter(
    (match) => match.scheduledTime > now.startOf("day")
  );
  const sortedRelevantMatches = [...relevantMatches].sort(
    (matchA, matchB) =>
      matchA.scheduledTime.toMillis() - matchB.scheduledTime.toMillis()
  );
  const matchesByDate = groupBy(sortedRelevantMatches, (match) =>
    match.scheduledTime
      .setLocale("en-us")
      .toLocaleString({ weekday: "long", month: "long", day: "numeric" })
  );

  return (
    <>
      {Object.keys(matchesByDate).map((formattedDate, index) => {
        return (
          <MatchesByDate key={formattedDate} $isFirst={index === 0}>
            <h3>{formattedDate}</h3>
            {matchesByDate[formattedDate].map((match) => (
              <MatchBlock key={match.id} match={match} />
            ))}
          </MatchesByDate>
        );
      })}
    </>
  );
};

const MatchesByDate = styled.div<{ $isFirst: boolean }>`
  margin-top: ${({ $isFirst }) => ($isFirst ? "0px" : "20px")};
`;
