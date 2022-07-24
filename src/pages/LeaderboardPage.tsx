import { Container } from "../components/Container";
import React, { useMemo } from "react";
import { sortLeaderboardEntries, toLeaderboardEntries } from "../domain/Leaderboard";
import { UserDisplay } from "../components/UserDisplay";
import styled from "styled-components";
import { FlexDiv } from "../components/divs/FlexDiv";
import { Colors } from "../GlobalStyle";
import { useUser } from "../api/userApi";
import { useAllEntrants } from "../api/entrantsApi";
import { NothingToDisplay } from "../components/general/NothingToDisplay";
import { useMatchResults } from "../api/matchesApi";
import { Block } from "../components/Block";
import { WideScreenOnly } from "../components/divs/WideScreenOnly";
import { Spinner } from "../components/general/Spinner";
import { useRacetimeLeaderboard } from "../api/racetimeLeaderboardApi";
import { secondsToHms } from "../lib/timeHelpers";

export const LeaderboardPage: React.FC = () => {
  const { data: user } = useUser();
  const { data: allEntrants, isLoading: isLoadingEntrants } = useAllEntrants();
  const { data: matchResults, isLoading: isLoadingMatches } = useMatchResults();
  const { data: racetimeLeaderboard } = useRacetimeLeaderboard();

  const title = "Leaderboard";

  const sortedEntries = useMemo(() => {
    if (allEntrants && matchResults) {
      const entries = toLeaderboardEntries(allEntrants, matchResults, racetimeLeaderboard);
      return sortLeaderboardEntries(entries);
    }
    return [];
  }, [allEntrants, matchResults, racetimeLeaderboard]);

  if (isLoadingEntrants || isLoadingMatches) {
    return (
      <Container title={title}>
        <Spinner />
      </Container>
    );
  }

  if (!allEntrants || !matchResults) {
    return (
      <Container title={title}>
        <NothingToDisplay>An error occurred while loading the data.</NothingToDisplay>
      </Container>
    );
  }

  if (sortedEntries.length === 0) {
    return (
      <Container title={title}>
        <NothingToDisplay>
          <p>No entrants to display (yet).</p>
        </NothingToDisplay>
      </Container>
    );
  }

  return (
    <Container title={title}>
      <LeaderboardHeader>
        <HiddenRankAndUser>
          <Rank>0</Rank>
          <UserDisplay size="big" user={sortedEntries[0].user} />
        </HiddenRankAndUser>

        <Number>Points</Number>
        <WideScreenOnly>
          <Time>Median</Time>
        </WideScreenOnly>
        <Number>Rounds</Number>
        <WideScreenOnly>
          <Number>Forfeits</Number>
        </WideScreenOnly>
      </LeaderboardHeader>

      {sortedEntries.map((entry, index) => {
        return (
          <LeaderboardEntryBlock
            key={index}
            $displayAsLoggedInUser={!!user && entry.user.id === user.id}
          >
            <RankAndUser>
              <Rank>{index + 1}</Rank>
              <UserDisplay size="big" user={entry.user} />
            </RankAndUser>

            <Number>{entry.points}</Number>

            <WideScreenOnly>
              <Time>{entry.median ? secondsToHms(entry.median) : "--:--:--"}</Time>
            </WideScreenOnly>

            <Number>{entry.roundsPlayed}</Number>

            <WideScreenOnly>
              <Number>{entry.forfeits}</Number>
            </WideScreenOnly>
          </LeaderboardEntryBlock>
        );
      })}
    </Container>
  );
};

const LeaderboardHeader = styled(Block)`
  justify-content: space-between;
  background-color: transparent;
  margin-top: 0;
  font-weight: bold;
  font-size: 1rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
`;

const LeaderboardEntryBlock = styled(Block)<{
  $displayAsLoggedInUser: boolean;
}>`
  justify-content: space-between;
  background-color: ${({ $displayAsLoggedInUser }) =>
    $displayAsLoggedInUser ? Colors.brightGrey : Colors.lightGrey};
  font-size: 1.1rem;
  margin-top: 0.5rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
`;

const RankAndUser = styled(FlexDiv)`
  justify-content: flex-start;
`;

const HiddenRankAndUser = styled(RankAndUser)`
  visibility: hidden;
`;

const Number = styled.p`
  text-align: center;
  min-width: 6rem;
`;

const Time = styled.p`
  text-align: center;
  min-width: 6rem;
`;

const Rank = styled.p`
  text-align: center;
  min-width: 2rem;
  margin-right: 1.5rem;
`;
