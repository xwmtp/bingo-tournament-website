import { getApi } from "./api";
import { mockMatchResults, mockScheduledMatches, mockUnscheduledMatches } from "../domain/MockData";
import {
  Entrant as EntrantDto,
  EntrantStatusEnum,
} from "@xwmtp/bingo-tournament/dist/models/Entrant";
import { Match as MatchDto } from "@xwmtp/bingo-tournament/dist/models/Match";

import { Match, MatchResult, MatchToAdd, ScheduledMatch, UnscheduledMatch } from "../domain/Match";
import { mapToUser } from "./userApi";
import { Entrant, EntrantWithResult } from "../domain/Entrant";
import { MatchState, NewMatch as NewMatchDto } from "@xwmtp/bingo-tournament";
import { DateTime } from "luxon";

const mockAllRaces = [...mockUnscheduledMatches, ...mockScheduledMatches, ...mockMatchResults];

export const getAllMatches = async (): Promise<Match[]> => {
  try {
    const matchDtos = await getApi().getAllRaces();
    return matchDtos.map(mapToMatch);
  } catch (error) {
    console.log(error);
    return mockAllRaces;
  }
};

export const getUnscheduledMatches = async (): Promise<UnscheduledMatch[]> => {
  try {
    const matchDtos = await getApi().getAllRaces({ filter: MatchState.New });
    return matchDtos.map(mapToMatch);
  } catch (error) {
    console.log(error);
    return mockAllRaces;
  }
};

export const getScheduledMatches = async (): Promise<ScheduledMatch[]> => {
  try {
    const matchDtos = await getApi().getAllRaces({
      filter: MatchState.Scheduled,
    });
    return matchDtos.map(mapToMatch) as ScheduledMatch[];
  } catch (error) {
    console.log(error);
    return mockScheduledMatches;
  }
};

export const getMatchResults = async (): Promise<MatchResult[]> => {
  try {
    const matchDtos = await getApi().getAllRaces({
      filter: MatchState.Finished,
    });
    return matchDtos.map(mapToMatch) as MatchResult[];
  } catch (error) {
    console.log(error);
    return mockMatchResults;
  }
};

export const addMatches = async (matchesToAdd: MatchToAdd[]): Promise<Match[]> => {
  const newMatches = matchesToAdd.map(mapToNewMatchDto);
  const addedMatches = await getApi().addMatches({ requestBody: newMatches });
  return addedMatches.map(mapToMatch);
};

const mapToNewMatchDto = (matchToAdd: MatchToAdd): NewMatchDto => {
  // todo calculate entrant ranks manually
  return {
    entrantIds: [matchToAdd.entrant1.id, matchToAdd.entrant2.id],
    round: matchToAdd.round,
  };
};

const mapToMatch = (matchDto: MatchDto): Match => {
  // todo calculate entrant ranks manually
  return {
    id: matchDto.id,
    entrants: matchDto.entrants.map(mapToEntrant),
    round: matchDto.round,
    restreamChannel: "",
    scheduledTime: matchDto.sceduledTime ? DateTime.fromJSDate(matchDto.sceduledTime) : undefined,
  };
};

const mapToEntrant = (entrantDto: EntrantDto): Entrant | EntrantWithResult => {
  const entrant = {
    user: mapToUser(entrantDto.user),
  };
  if (entrantDto.status === EntrantStatusEnum.PreRace) {
    return entrant;
  } else {
    return {
      ...entrant,
      result: {
        status: EntrantStatusEnum.Finished ? "done" : "forfeit",
        racetimeRank: entrantDto.racetimePlace ?? 0,
        rank: entrantDto.racetimePlace ?? 0,
        finishTime: entrantDto.finishTimeSeconds,
      },
    };
  }
};
