import React from "react";
import { ScheduledMatch, sortByScheduledTime } from "../../../domain/Match";
import { DateTime } from "luxon";
import { MatchesByDate } from "../../MatchesByDate";

interface Props {
  matches: ScheduledMatch[];
  displayStatusOnMatchBlocks?: boolean;
}

export const ScheduledMatches: React.FC<Props> = ({ matches, displayStatusOnMatchBlocks }) => {
  const relevantMatches = matches.filter(
    (match) => match.scheduledTime > DateTime.local().startOf("day")
  );
  const sortedRelevantMatches = sortByScheduledTime(relevantMatches);

  return (
    <MatchesByDate
      scheduledMatches={sortedRelevantMatches}
      displayStatusOnMatchBlock={displayStatusOnMatchBlocks}
    />
  );
};
