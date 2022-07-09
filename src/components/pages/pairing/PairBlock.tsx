import React from "react";
import { LeaderboardEntry } from "../../../domain/Leaderboard";
import styled from "styled-components";
import { Block } from "../../Block";
import { UserDisplay } from "../../UserDisplay";
import { FlexDiv } from "../../divs/FlexDiv";

export type Pair = PairEntry[];

export interface PairEntry {
  leaderboardEntry: LeaderboardEntry;
  pairPoints: number; // incl virtual point
  pairTourneyPoints: number; // excl virtual point
  pairSeed: number;
}

interface Props {
  pair: Pair;
  isVisible: boolean;
  toggleIsVisible: () => void;
}

export const PairBlock: React.FC<Props> = ({ pair, isVisible, toggleIsVisible }) => {
  return (
    <BlockStyled onClick={toggleIsVisible}>
      {pair.map((entry) => (
        <PairUser key={entry.leaderboardEntry.user.id} $isVisible={isVisible}>
          <PairUserDisplay user={entry.leaderboardEntry.user} />
          <PairPoints>{entry.pairPoints}</PairPoints>
          <p>{entry.pairSeed}</p>
        </PairUser>
      ))}
    </BlockStyled>
  );
};

const BlockStyled = styled(Block)`
  flex-direction: row;
  justify-content: space-between;
`;

const PairUser = styled(FlexDiv)<{ $isVisible: boolean }>`
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  min-width: 18rem;
`;

const PairUserDisplay = styled(UserDisplay)`
  margin-right: 0.5rem;
`;

const PairPoints = styled.p`
  margin-right: 1rem;
`;
