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
  status: "done" | "forfeit";
  rank: number;
  racetimeRank: number;
  finishTime?: number;
}

export const getResultString = (result: EntrantResult): string => {
  if (result.finishTime) {
    return Duration.fromMillis(result.finishTime * 1000).toFormat("h:mm:ss");
  } else {
    return "dnf";
  }
};

export const mapToEntrant = (entrantDto: EntrantDto): Entrant | EntrantWithResult => {
  const entrant = {
    user: mapToUser(entrantDto.user),
  };
  if (entrantDto.state === EntrantState.PreRace) {
    return entrant;
  } else {
    return {
      ...entrant,
      result: {
        status: EntrantState.Finished ? "done" : "forfeit",
        racetimeRank: entrantDto.racetimePlace ?? 0,
        rank: entrantDto.racetimePlace ?? 0,
        finishTime: entrantDto.finishTimeSeconds,
      },
    };
  }
};
