import { MatchBlock } from "./MatchBlock";
import React from "react";
import { UnscheduledMatch } from "../../domain/Match";

interface Props {
  matches: UnscheduledMatch[];
}

export const UnscheduledMatches: React.FC<Props> = ({ matches }) => {
  return (
    <div>
      {matches.map((match) => {
        return <MatchBlock key={match.id} match={match} />;
      })}
    </div>
  );
};
