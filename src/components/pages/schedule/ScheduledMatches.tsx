import React from "react";
import { ScheduledMatch, sortByScheduledTime } from "../../../domain/Match";
import { DateTime } from "luxon";
import { MatchesByDate } from "../../MatchesByDate";

interface Props {
  matches: ScheduledMatch[];
}

const now = DateTime.local(2022, 2, 1, 6, 10, 0);

export const ScheduledMatches: React.FC<Props> = ({ matches }) => {
  const relevantMatches = matches.filter((match) => match.scheduledTime > now.startOf("day"));
  const sortedRelevantMatches = sortByScheduledTime(relevantMatches);

  return (
    <MatchesByDate scheduledMatches={sortedRelevantMatches} displayStatusOnMatchBlock={true} />
  );
};
