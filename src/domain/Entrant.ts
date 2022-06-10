import { mapToUser, User } from "./User";
import { Duration } from "luxon";
import { Entrant as EntrantDto, EntrantState } from "@xwmtp/bingo-tournament";

export interface Entrant {
  user: User;
}

export interface EntrantWithResult extends Entrant {
  result: EntrantResult;
}

export interface EntrantResult {
  hasForfeited: boolean;
  resultStatus: RankStatus;
  rank: number;
  racetimeRank: number;
  finishTime?: number;
}

export type RankStatus = "win" | "loss" | "tie";

export const getResultString = (result: EntrantResult): string => {
  if (result.finishTime) {
    return Duration.fromMillis(result.finishTime * 1000).toFormat("h:mm:ss");
  } else {
    return "dnf";
  }
};

export const mapToEntrant = (
  entrantDto: EntrantDto,
  allEntrantDtos: EntrantDto[]
): Entrant | EntrantWithResult => {
  const entrant = {
    user: mapToUser(entrantDto.user),
  };
  if (entrantDto.state === EntrantState.PreRace) {
    return entrant;
  } else {
    return {
      ...entrant,
      result: {
        hasForfeited: entrantDto.state === EntrantState.DidNotFinish,
        resultStatus: calculateRankStatus(entrantDto, allEntrantDtos) ?? "loss",
        racetimeRank: entrantDto.racetimePlace ?? 0,
        rank: entrantDto.racetimePlace ?? 0,
        finishTime: entrantDto.finishTimeSeconds,
      },
    };
  }
};

const calculateRankStatus = (
  entrantDto: EntrantDto,
  allEntrantDtos: EntrantDto[]
): RankStatus | undefined => {
  const timeEntrant = entrantDto.finishTimeSeconds;
  if (!timeEntrant) {
    return undefined;
  }
  const timesOpponents = allEntrantDtos
    .filter((entrant) => entrant.user.id !== entrantDto.user.id)
    .map((entrant) => entrant.finishTimeSeconds);
  if (timesOpponents.every((opponentTime) => (opponentTime ?? Number.MAX_VALUE) > timeEntrant)) {
    return "win";
  }
  if (timesOpponents.some((opponentTime) => (opponentTime ?? Number.MAX_VALUE) === timeEntrant)) {
    return "tie";
  }
  return "loss";
};
