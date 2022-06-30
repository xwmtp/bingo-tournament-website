import { useQuery } from "react-query";
import {
  BingoLeaderboard,
  BingoLeaderboardDto,
  mapToBingoLeaderboard,
} from "../domain/BingoLeaderboard";

export const getBingoLeaderboard = async (): Promise<BingoLeaderboard> => {
  const response = await fetch("https://bingoleaderboard.scaramangado.de/api/leaderboard");
  if (response.status === 200) {
    const bingoLeaderboardDto: BingoLeaderboardDto = await response.json();
    return mapToBingoLeaderboard(bingoLeaderboardDto);
  }
  throw Error("Could not fetch bingo leaderboard players");
};

export const useBingoLeaderboard = () => {
  return useQuery<BingoLeaderboard, Error>("bingoLeaderboard", getBingoLeaderboard, {
    staleTime: 1000 * 60 * 60,
  });
};
