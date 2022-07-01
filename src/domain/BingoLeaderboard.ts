import { DateTime } from "luxon";

export interface BingoLeaderboardDto {
  lastUpdated: DateTime;
  numEntries: number;
  entries: BingoLeaderboardEntryDto[];
}

interface BingoLeaderboardEntryDto {
  playerName: string;
  playerId: string;
  racetimePoints: number;
  leaderboardScore: number;
  leaderboardTime: string;
  average: string;
  effectiveAverage: string;
  effectiveMedian: string;
  lastRaced: string;
  finishedRacesCount: number;
  includedRacesCount: number;
  finishedRacesFraction: string;
  rank: number;
}

export type BingoLeaderboard = { [id: string]: BingoLeaderboardPlayer };

export interface BingoLeaderboardPlayer {
  id: string;
  rank: number;
  leaderboardTime: number;
  average: number;
  effectiveMedian: number;
  lastRaceDate: DateTime;
}

export const mapToBingoLeaderboard = (
  bingoLeaderboardDto: BingoLeaderboardDto
): BingoLeaderboard => {
  const leaderboard: BingoLeaderboard = {};

  for (const entry of bingoLeaderboardDto.entries) {
    leaderboard[entry.playerId] = {
      id: entry.playerId,
      rank: entry.rank,
      leaderboardTime: hmsToSeconds(entry.leaderboardTime),
      average: hmsToSeconds(entry.average),
      effectiveMedian: hmsToSeconds(entry.effectiveMedian),
      lastRaceDate: DateTime.fromISO(entry.lastRaced),
    };
  }

  return leaderboard;
};

const hmsToSeconds = (hms: string): number => {
  const a = hms.split(":");
  return +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
};
