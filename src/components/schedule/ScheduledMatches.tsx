import { MatchBlock } from "./MatchBlock";
import { groupBy } from "../../lib/groupBy";
import React from "react";
import styled from "styled-components";
import { ScheduledMatch } from "../../domain/Match";

interface Props {
  matches: ScheduledMatch[];
}

export const ScheduledMatches: React.FC<Props> = ({ matches }) => {
  const matchesByDate = groupBy(matches, (match) =>
    match.startTime
      .setLocale("en-us")
      .toLocaleString({ weekday: "long", month: "long", day: "numeric" })
  );

  return (
    <>
      {Object.keys(matchesByDate).map((formattedDate) => {
        return (
          <MatchesByDate key={formattedDate}>
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

const MatchesByDate = styled.div`
  margin-top: 20px;
`;
