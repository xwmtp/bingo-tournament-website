import { Container } from "../components/Container";
import React from "react";
import { toLeaderboardEntries } from "../domain/Leaderboard";
import { mockMatchResults } from "../domain/MockData";
import { UserDisplay } from "../components/UserDisplay";
import styled from "styled-components";
import { FlexDiv } from "../components/divs/FlexDiv";
import { Colors } from "../GlobalStyle";
import { useUser } from "../api/userApi";
import { Duration } from "luxon";

export const LeaderboardPage: React.FC = () => {
  const { data: user } = useUser();
  const entries = toLeaderboardEntries(mockMatchResults);
  const sortedEntries = entries.sort((a, b) => b.points - a.points);

  return (
    <Container title="Leaderboard">
      <LeaderboardHeader>
        <RankAndUser />

        <Number>Points</Number>
        <Time>Median</Time>
        <Number>Rounds</Number>
        <Number>Forfeits</Number>
      </LeaderboardHeader>

      {sortedEntries.map((entry, index) => {
        return (
          <LeaderboardEntry
            key={index}
            $displayAsLoggedInUser={!!user && entry.user.id === user.id}
          >
            <RankAndUser>
              <Rank>{index + 1}</Rank>
              <UserDisplay size="big" user={entry.user} />
            </RankAndUser>

            <Number>{entry.points}</Number>
            <Time>
              {entry.median
                ? Duration.fromObject({ seconds: entry.median }).toFormat("hh:mm:ss")
                : "--:--:--"}
            </Time>
            <Number>{entry.roundsPlayed}</Number>
            <Number>{entry.forfeits}</Number>
          </LeaderboardEntry>
        );
      })}
    </Container>
  );
};

const LeaderboardHeader = styled(FlexDiv)`
  justify-content: space-between;
  padding: 0.6rem 2rem;
  font-weight: bold;
`;

const LeaderboardEntry = styled(FlexDiv)<{
  $displayAsLoggedInUser: boolean;
}>`
  justify-content: space-between;
  background-color: ${Colors.lightGray};
  border-radius: 0.6rem;
  padding: 0.6rem ${({ $displayAsLoggedInUser }) => ($displayAsLoggedInUser ? 1.76 : 2)}rem;
  margin-top: 0.7rem;
  font-size: 1.1rem;
  border: ${({ $displayAsLoggedInUser }) => ($displayAsLoggedInUser ? "0.24rem" : "0")} solid
    ${Colors.brightMossGreen};
`;

const RankAndUser = styled(FlexDiv)`
  justify-content: flex-start;
  min-width: 17rem;
`;

const Number = styled.p`
  text-align: center;
  min-width: 6rem;
`;

const Time = styled.p`
  text-align: center;
  min-width: 6rem;
`;

const Rank = styled(Number)`
  text-align: center;
  min-width: 2rem;
  margin-right: 1.5rem;
`;
