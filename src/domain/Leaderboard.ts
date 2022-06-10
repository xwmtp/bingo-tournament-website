import { User } from "./User";
import { Duration } from "luxon";
import { MatchResult } from "./Match";
import { RankStatus } from "./Entrant";

const RESULT_POINTS: { [key in RankStatus]: number } = {
  win: 3,
  tie: 1,
  loss: 0,
} as const;

export interface LeaderboardEntry {
  user: User;
  roundsPlayed: number;
  forfeits: number;
  points: number;
  median?: Duration;
}

const createEmptyEntry = (user: User) => {
  return {
    user: user,
    roundsPlayed: 0,
    forfeits: 0,
    points: 0,
    median: undefined,
  };
};

export const toLeaderboardEntries = (allResults: MatchResult[]) => {
  let entries: { [key: string]: LeaderboardEntry } = {};
  for (const result of allResults) {
    for (const entrant of result.entrants) {
      if (!(entrant.user.id in entries)) {
        entries[entrant.user.id] = createEmptyEntry(entrant.user);
      }
      const entry = entries[entrant.user.id];
      entry.roundsPlayed += 1;
      entry.points += RESULT_POINTS[entrant.result.resultStatus];
      entry.forfeits += entrant.result.hasForfeited ? 1 : 0;
      // todo median
    }
  }
  return Object.values(entries);
};
