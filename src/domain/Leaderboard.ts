import { User } from "./User";
import { MatchResult } from "./Match";
import { RankStatus } from "./Entrant";
import { tournamentSettings } from "../TournamentSetings";
import { calculateMedian } from "../lib/timeHelpers";

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
  median?: number;
  finishTimes: number[];
}

const createEmptyEntry = (user: User): LeaderboardEntry => {
  return {
    user: user,
    roundsPlayed: 0,
    forfeits: 0,
    points: 0,
    median: undefined,
    finishTimes: [],
  };
};

export const toLeaderboardEntries = (allEntrantsUsers: User[], allResults: MatchResult[]) => {
  let entries: { [key: string]: LeaderboardEntry } = {};

  for (const entrantUser of allEntrantsUsers) {
    entries[entrantUser.id] = createEmptyEntry(entrantUser);
  }

  for (const result of allResults) {
    for (const entrant of result.entrants) {
      const entry = entries[entrant.user.id];
      if (!entry) {
        continue;
      }
      entry.roundsPlayed += 1;
      entry.points += RESULT_POINTS[entrant.result.resultStatus];
      entry.forfeits += entrant.result.hasForfeited ? 1 : 0;
      // todo median
      entry.finishTimes.push(
        entrant.result.hasForfeited ? tournamentSettings.FORFEIT_TIME : entrant.result.finishTime!
      );
    }
  }
  for (const entrantId in entries) {
    entries[entrantId].median = calculateMedian(entries[entrantId].finishTimes);
  }
  return Object.values(entries);
};
