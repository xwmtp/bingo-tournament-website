import { UserDisplay } from "../../../UserDisplay";
import React from "react";
import styled from "styled-components";
import { FlexDiv } from "../../../divs/FlexDiv";
import { User } from "../../../../domain/User";
import { DeleteButton } from "../../../forms/buttons/DeleteButton";

export interface MatchToAdd {
  entrant1: User;
  entrant2: User;
  round: string;
}

interface Props {
  matchesToAdd: MatchToAdd[];
  onRemoveMatch: (index: number) => void;
}

export const MatchesToAdd: React.FC<Props> = ({ matchesToAdd, onRemoveMatch }) => {
  if (matchesToAdd.length === 0) {
    return <></>;
  }
  return (
    <Matches>
      <h3>Matches to add</h3>
      {matchesToAdd.map((matchToAdd, index) => {
        return (
          <Match key={index}>
            <DeleteButtonStyled onClick={() => onRemoveMatch(index)} />
            <UserDisplay user={matchToAdd.entrant1} />
            <UserDisplay user={matchToAdd.entrant2} />
            <p>{matchToAdd.round}</p>
          </Match>
        );
      })}
    </Matches>
  );
};

const Matches = styled.div`
  flex-direction: column;
  margin-top: 1rem;
`;

const Match = styled(FlexDiv)`
  justify-content: flex-start;
  margin-top: 0.7rem;
`;

const DeleteButtonStyled = styled(DeleteButton)`
  margin-right: 2rem;
`;
