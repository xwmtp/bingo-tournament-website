import { User } from "./User";
import { Duration } from "luxon";

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
