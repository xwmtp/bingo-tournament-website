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
