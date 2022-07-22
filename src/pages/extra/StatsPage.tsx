import React, { useState } from "react";
import { useMatchResults } from "../../api/matchesApi";
import { MatchResult } from "../../domain/Match";
import { EntrantWithResult } from "../../domain/Entrant";
import { ResultRow } from "../../components/pages/results/ResultBlock";
import { Container } from "../../components/Container";
import { Input } from "../../components/forms/Input";
import { useRacetimeLeaderboard } from "../../api/racetimeLeaderboardApi";
import { RacetimeLeaderboard, RacetimeLeaderboardEntry } from "../../domain/RacetimeLeaderboard";
import { Duration } from "luxon";
import styled from "styled-components";
import { useUser } from "../../api/userApi";
import { NothingToDisplay } from "../../components/general/NothingToDisplay";
import { isAdmin } from "../../domain/User";

export const StatsPage: React.FC = () => {
  const [round, setRound] = useState<string>("");

  const title = "Stats";
  const { data: user } = useUser();
  const { data: matchResults } = useMatchResults();
  const { data: racetimeLeaderboard } = useRacetimeLeaderboard();

  if (!user || !isAdmin(user)) {
    return (
      <Container title={title}>
        <NothingToDisplay>This page is admin only.g</NothingToDisplay>
      </Container>
    );
  }

  if (!matchResults || !racetimeLeaderboard) {
    return <Container title={title} />;
  }

  const results = matchResults.filter((matchResult) => matchResult.round === round);
  const { best, worst, bestDiff, worstDiff } = getBestResult(results, racetimeLeaderboard);

  return (
    <Container title={title}>
      <Input
        type="text"
        maxLength={30}
        value={round}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRound(event.target.value)}
        placeholder={"Round 1"}
      />

      {results.length > 0 && (
        <>
          <Header>Best result</Header>
          {best && <ResultRow entrant={best} />}
          <Header>Worst result</Header>
          {worst && <ResultRow entrant={worst} />}
          <Header>Best diff</Header>
          {bestDiff && (
            <>
              <ResultRow entrant={bestDiff.result} />
              {`Current bingo leaderboard time: ${Duration.fromMillis(
                bestDiff.lbEntry.leaderboardTime * 1000
              ).toFormat("h:mm:ss")}`}
              <p>{`${Math.round(bestDiff.percentage * 1000) / 10}%`}</p>
            </>
          )}
          <Header>Worst diff</Header>
          {worstDiff && (
            <>
              <ResultRow entrant={worstDiff.result} />
              {`Current bingo leaderboard time: ${Duration.fromMillis(
                worstDiff.lbEntry.leaderboardTime * 1000
              ).toFormat("h:mm:ss")}`}
              <p>{`${Math.round(worstDiff.percentage * 1000) / 10}%`}</p>
            </>
          )}
        </>
      )}
    </Container>
  );
};

const getBestResult = (results: MatchResult[], racetimeLeaderboard: RacetimeLeaderboard) => {
  type Diff = { result: EntrantWithResult; lbEntry: RacetimeLeaderboardEntry; percentage: number };
  let bestResult: EntrantWithResult | undefined;
  let worstResult: EntrantWithResult | undefined;
  let bestDiff: Diff | undefined;
  let worstDiff: Diff | undefined;

  for (const result of results) {
    for (const entrant of result.entrants) {
      if (!entrant.result.finishTime) {
        continue;
      }
      if (!bestResult || entrant.result.finishTime! < bestResult.result.finishTime!) {
        bestResult = entrant;
      }
      if (!worstResult || entrant.result.finishTime! > worstResult.result.finishTime!) {
        worstResult = entrant;
      }

      const matchingLbEntry = racetimeLeaderboard[entrant.user.id];
      const percentage =
        (entrant.result.finishTime - matchingLbEntry.leaderboardTime) /
        matchingLbEntry.leaderboardTime;

      if (!bestDiff || percentage < bestDiff.percentage) {
        bestDiff = { result: entrant, lbEntry: matchingLbEntry, percentage: percentage };
      }
      if (!worstDiff || percentage > worstDiff.percentage) {
        worstDiff = { result: entrant, lbEntry: matchingLbEntry, percentage: percentage };
      }
    }
  }
  return { best: bestResult, worst: worstResult, bestDiff: bestDiff, worstDiff: worstDiff };
};

const Header = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;
