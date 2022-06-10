import { Container } from "../components/Container";
import React from "react";
import { toLeaderboardEntries } from "../domain/Leaderboard";
import { mockMatchResults } from "../domain/MockData";
import { UserDisplay } from "../components/UserDisplay";
import styled from "styled-components";
import { FlexDiv } from "../components/divs/FlexDiv";
import { Colors } from "../GlobalStyle";
import { useUser } from "../api/userApi";

export const LeaderboardPage: React.FC = () => {
  const { data: user } = useUser();
  const entries = toLeaderboardEntries(mockMatchResults);
  const sortedEntries = entries.sort((a, b) => b.points - a.points);

  return (
    <Container>
      {sortedEntries.map((entry, index) => {
        return (
          <LeaderboardEntry
            key={index}
            $displayAsLoggedInUser={!!user && entry.user.id === user.id}
          >
            <FlexDiv>
              <Rank>{index + 8}</Rank>
              <UserDisplay size="big" user={entry.user} />
            </FlexDiv>
            <p>{entry.points}</p>
            <p>{"--:--:--"}</p>
            <p>{entry.roundsPlayed}</p>
            <p>{entry.forfeits}</p>
          </LeaderboardEntry>
        );
      })}
    </Container>
  );
};

const LeaderboardEntry = styled(FlexDiv)<{
  $displayAsLoggedInUser: boolean;
}>`
  justify-content: space-between;
  background-color: ${Colors.lightGray};
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
  margin-top: 0.7rem;
  font-size: 1.1rem;
  border: ${({ $displayAsLoggedInUser }) => ($displayAsLoggedInUser ? "0.24rem" : "0")} solid
    ${Colors.brightMossGreen};
`;

const Number = styled.p`
  text-align: center;
  min-width: 2rem;
`;

const Rank = styled(Number)`
  text-align: center;
  min-width: 2rem;
  margin-right: 1rem;
`;
