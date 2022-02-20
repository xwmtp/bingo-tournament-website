import { MatchBlock } from "./MatchBlock";
import { groupBy } from "../../lib/groupBy";
import React from "react";
import styled from "styled-components";
import { ScheduledMatch } from "../../domain/Schedule";

interface Props {
  matches: ScheduledMatch[];
}

export const ScheduledMatches: React.FC<Props> = ({ matches }) => {
  const matchesByDate = groupBy(matches, (match: ScheduledMatch) =>
    match.startTime
      .setLocale("en-us")
      .setZone("EST")
      .toLocaleString({ weekday: "long", month: "long", day: "numeric" })
  );

  return (
    <div>
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
  );
};

const MatchesByDate = styled.div`
  margin-top: 20px;
`;
