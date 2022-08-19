import React from "react";
import { Leaderboard } from "../components/pages/leaderboard/Leaderboard";
import { Container } from "../components/Container";
import { Spinner } from "../components/general/Spinner";
import { useAllEntrants } from "../api/entrantsApi";
import { useMatchResults } from "../api/matchesApi";
import { NothingToDisplay } from "../components/general/NothingToDisplay";
import { Bracket } from "../components/pages/leaderboard/Bracket";
import { parseToBracketRounds } from "../domain/BracketSetup";
import { bracketSetup } from "../Settings";

export const LeaderboardPage: React.FC = () => {
  const { data: allEntrants, isLoading: isLoadingEntrants } = useAllEntrants();
  const { data: matchResults, isLoading: isLoadingMatches } = useMatchResults();

  const pageTitle = "Leaderboard";

  if (isLoadingEntrants || isLoadingMatches) {
    return (
      <Container title={pageTitle}>
        <Spinner />
      </Container>
    );
  }

  if (!allEntrants || !matchResults) {
    return (
      <Container title={pageTitle}>
        <NothingToDisplay>An error occurred while loading the data.</NothingToDisplay>
      </Container>
    );
  }

  const bracketRounds = parseToBracketRounds(bracketSetup, allEntrants, matchResults);

  return (
    <>
      {bracketRounds.length > 0 && <Bracket bracketRounds={bracketRounds} />}
      <Leaderboard allEntrants={allEntrants} allResults={matchResults} />
    </>
  );
};
