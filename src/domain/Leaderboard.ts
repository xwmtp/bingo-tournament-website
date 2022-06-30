import { User } from "./User";
import { MatchResult } from "./Match";
import { RankStatus } from "./Entrant";
import { tournamentSettings } from "../Settings";
import { calculateMedian } from "../lib/timeHelpers";
import { BingoLeaderboard, BingoLeaderboardPlayer } from "./BingoLeaderboard";

const RESULT_POINTS: { [key in RankStatus]: number } = {
  win: tournamentSettings.WIN_POINTS,
  tie: tournamentSettings.TIE_POINTS,
  loss: tournamentSettings.LOSE_POINTS,
} as const;

export interface LeaderboardEntry {
  user: User;
  roundsPlayed: number;
  forfeits: number;
  points: number;
  median?: number;
  finishTimes: number[];
  racetimeStats?: BingoLeaderboardPlayer;
}

const createEmptyEntry = (user: User): LeaderboardEntry => {
  return {
    user: user,
    roundsPlayed: 0,
    forfeits: 0,
    points: 0,
    median: undefined,
    finishTimes: [],
    racetimeStats: undefined,
  };
};

export const toLeaderboardEntries = (
  allEntrantsUsers: User[],
  allResults: MatchResult[],
  racetimeLeaderboard?: BingoLeaderboard
): LeaderboardEntry[] => {
  let entries: { [id: string]: LeaderboardEntry } = {};

  for (const entrantUser of allEntrantsUsers) {
    console.log(entrantUser.name);
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
      entry.finishTimes.push(
        entrant.result.hasForfeited ? tournamentSettings.FORFEIT_TIME : entrant.result.finishTime!
      );
      if (racetimeLeaderboard) {
        const racetimePlayer = racetimeLeaderboard[entrant.user.id];
        if (racetimePlayer) {
          entry.racetimeStats = racetimePlayer;
        }
      }
    }
  }
  for (const entrantId in entries) {
    entries[entrantId].median = calculateMedian(entries[entrantId].finishTimes);
  }
  return Object.values(entries);
};
