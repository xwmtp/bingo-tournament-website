import React from "react";
import { ScheduledMatch, sortByScheduledTime } from "../../../domain/Match";
import { DateTime } from "luxon";
import { MatchesByDate } from "../../MatchesByDate";
import { NothingToDisplay } from "../../general/NothingToDisplay";

interface Props {
  matches: ScheduledMatch[];
  displayStatusOnMatchBlocks?: boolean;
}

export const ScheduledMatches: React.FC<Props> = ({ matches, displayStatusOnMatchBlocks }) => {
  const relevantMatches = matches.filter(
    //todo
    (match) => match.scheduledTime > DateTime.fromISO("2020-01-01T00:00:00").startOf("day")
  );
  const sortedRelevantMatches = sortByScheduledTime(relevantMatches);

  if (sortedRelevantMatches.length === 0) {
    return <NothingToDisplay>There are no current scheduled matches.</NothingToDisplay>;
  }

  return (
    <MatchesByDate
      scheduledMatches={sortedRelevantMatches}
      displayStatusOnMatchBlock={displayStatusOnMatchBlocks}
    />
  );
};
