import React from "react";
import { BracketRound } from "../../../domain/BracketSetup";
import { User } from "../../../domain/User";
import styled from "styled-components";
import { UserDisplay } from "../../UserDisplay";
import { Container } from "../../Container";
import { Colors } from "../../../GlobalStyle";
import { FlexDiv } from "../../divs/FlexDiv";
import { mockBracketSetup } from "../../../domain/mocks/MockData";
import { MatchResult } from "../../../domain/Match";

interface Props {
  allEntrants: User[];
  allResults: MatchResult[];
}

export const Bracket: React.FC<Props> = ({ allEntrants, allResults }) => {
  const bracketRounds = mockBracketSetup; //getBracketSetup(allEntrants, allResults);

  console.log(JSON.stringify(bracketRounds));

  return (
    <Container title="Bracket">
      <BracketContainer>
        {bracketRounds.map((round) => (
          <BracketRoundColumn round={round} key={round.name} />
        ))}
      </BracketContainer>
    </Container>
  );
};

const BracketRoundColumn: React.FC<{ round: BracketRound }> = ({ round }) => {
  return (
    <Round>
      {round.matchUps.map((matchUp, index) => (
        <MatchUp key={round.name + index}>
          <Slot>{matchUp.player1 && <UserDisplay size="small" user={matchUp.player1.user} />}</Slot>

          <Slot>{matchUp.player2 && <UserDisplay size="small" user={matchUp.player2.user} />}</Slot>
        </MatchUp>
      ))}
    </Round>
  );
};

const BracketContainer = styled(FlexDiv)`
  justify-content: flex-start;
`;

const Round = styled(FlexDiv)`
  align-self: stretch;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 0.2rem;
`;

const Slot = styled(FlexDiv)`
  justify-content: flex-start;
  height: 1.9rem;
`;

const MatchUp = styled.div`
  margin: 0.7rem 0;
  flex-direction: column;
  background-color: ${Colors.lightGrey};
  border-radius: 0.6rem;
  padding: 0.4rem 0.6rem;
`;
