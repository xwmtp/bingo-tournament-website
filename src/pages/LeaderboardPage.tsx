import React from "react";
import { Leaderboard } from "../components/pages/leaderboard/Leaderboard";
import { Container } from "../components/Container";
import { Spinner } from "../components/general/Spinner";
import { useAllEntrants } from "../api/entrantsApi";
import { useMatchResults } from "../api/matchesApi";
import { NothingToDisplay } from "../components/general/NothingToDisplay";

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

  return <Leaderboard allEntrants={allEntrants} allResults={matchResults} />;
};
