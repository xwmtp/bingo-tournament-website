import React, { useState } from "react";
import styled from "styled-components";
import { NewMatch } from "@xwmtp/bingo-tournament";
import { useQuery } from "react-query";
import { User } from "../../../domain/User";
import { getAllEntrants } from "../../../api/entrantsApi";
import { Input } from "../../forms/Input";
import { UserDisplay } from "../../UserDisplay";
import { mockAllUsers } from "../../../domain/MockData";

export const AddMatches: React.FC = () => {
  const {
    data: allEntrants,
    isError,
    isSuccess,
  } = useQuery<User[], Error>("allEntrants", getAllEntrants, { initialData: mockAllUsers });
  const [newMatches, setNewMatches] = useState<NewMatch[]>([]);

  const [inputPlayer1, setInputPlayer1] = useState<string>("");
  const [inputPlayer2, setInputPlayer2] = useState<string>("");
  const [inputRound, setInputRound] = useState<string>("");

  if (isError) {
    return <p>Could not load entrants</p>;
  }
  if (!isSuccess) {
    return <p>loading...</p>;
  }

  const AddPlayerDisplay: React.FC<{ playerInput: string }> = ({ playerInput }) => {
    if (!playerInput) {
      return <></>;
    }
    const matchingUser = allEntrants.find(
      (entrant) => entrant.name.toLowerCase() === playerInput.toLowerCase()
    );
    if (matchingUser) {
      return <UserDisplay user={matchingUser} />;
    }
    return <></>;
  };

  return (
    <MatchesDiv>
      <PlayerInputDiv>
        Player 1
        <InputStyled
          type="text"
          value={inputPlayer1}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputPlayer1(event.target.value)
          }
          placeholder="malon"
        />
        <AddPlayerDisplay playerInput={inputPlayer1} />
      </PlayerInputDiv>

      <PlayerInputDiv>
        Player 2
        <InputStyled
          type="text"
          value={inputPlayer2}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputPlayer2(event.target.value)
          }
          placeholder="talon"
        />
      </PlayerInputDiv>

      <PlayerInputDiv>
        Round
        <InputStyled
          type="text"
          value={inputPlayer2}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputPlayer2(event.target.value)
          }
          placeholder="round 1"
        />
      </PlayerInputDiv>
    </MatchesDiv>
  );
};

const MatchesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputStyled = styled(Input)`
  margin-left: 1rem;
  width: 17rem;
`;
