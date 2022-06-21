import { getApi } from "./api";
import { mockMatchResults, mockScheduledMatches, mockUnscheduledMatches } from "../domain/MockData";
import {
  includesEntrant,
  isMatchResult,
  isScheduledMatch,
  isUnscheduledMatch,
  mapToMatch,
  Match,
  MatchToAdd,
} from "../domain/Match";
import { DateTime } from "luxon";
import { useQuery } from "react-query";
import { NewMatch as NewMatchDto } from "@xwmtp/bingo-tournament";

const mockAllMatches = [...mockUnscheduledMatches, ...mockScheduledMatches, ...mockMatchResults];

const getAllMatches = async (): Promise<Match[]> => {
  try {
    const matchDtos = await getApi().getAllMatches();
    return matchDtos.map(mapToMatch);
  } catch (error) {
    console.log(error);
    console.log("Returning mock data with all matches");
    return mockAllMatches;
  }
};

export const useAllMatches = () => {
  return useQuery<Match[], Error>("allMatches", getAllMatches);
};

export function useFilteredMatches<T extends Match>(
  filterFn: (match: Match) => match is T,
  entrantId?: string
) {
  return useQuery<Match[], Error, T[]>("allMatches", getAllMatches, {
    select: (data) => {
      const filtered = data.filter(filterFn);
      if (entrantId) {
        return filtered.filter((match) => includesEntrant(match, entrantId));
      }
      return filtered;
    },
  });
}

export const useScheduledMatches = (entrantId?: string) => {
  return useFilteredMatches(isScheduledMatch, entrantId);
};

export const useUnscheduledMatches = (entrantId?: string) => {
  return useFilteredMatches(isUnscheduledMatch, entrantId);
};

export const useMatchResults = (entrantId?: string) => {
  return useFilteredMatches(isMatchResult, entrantId);
};

export const addMatches = async (matchesToAdd: MatchToAdd[]): Promise<Match[]> => {
  const newMatches = matchesToAdd.map(mapToNewMatchDto);
  const addedMatches = await getApi().addMatches({ requestBody: newMatches });
  return addedMatches.map(mapToMatch);
};

export const updateMatchTime = async (updateMatch: {
  matchId: string;
  newTime: DateTime;
}): Promise<Match> => {
  const updatedMatchDto = await getApi().updateMatch({
    matchId: updateMatch.matchId,
    updateMatch: { scheduledTime: updateMatch.newTime.toJSDate() },
  });
  return mapToMatch(updatedMatchDto);
};

export const updateMatchRacetimeId = async (updateMatch: {
  matchId: string;
  newRacetimeId: string;
}): Promise<Match> => {
  const updatedMatchDto = await getApi().updateMatch({
    matchId: updateMatch.matchId,
    updateMatch: { racetimeId: updateMatch.newRacetimeId },
  });
  return mapToMatch(updatedMatchDto);
};

export const deleteMatches = async (matchIds: string[]): Promise<void> => {
  return await getApi().deleteMatches({ requestBody: matchIds });
};

const mapToNewMatchDto = (matchToAdd: MatchToAdd): NewMatchDto => {
  const entrantIds = [matchToAdd.entrant1.id];
  if (matchToAdd.entrant2) {
    entrantIds.push(matchToAdd.entrant2.id);
  }
  return {
    entrantIds: entrantIds,
    round: matchToAdd.round,
  };
};
