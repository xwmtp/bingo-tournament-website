import { MatchBlock } from "./MatchBlock";
import React from "react";
import { Match } from "../../domain/Match";

interface Props {
  matches: Match[];
}

export const UnscheduledMatches: React.FC<Props> = ({ matches }) => {
  return (
    <div>
      {matches.map((match) => {
        return (
          <MatchBlock
            key={match.entrant1.id + match.entrant2.id + match.round}
            match={match}
          />
        );
      })}
    </div>
  );
};
