import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { User } from "../../../../domain/User";
import { getAllEntrants } from "../../../../api/entrantsApi";
import { UserDisplay } from "../../../UserDisplay";
import { FlexDiv } from "../../../divs/FlexDiv";
import { EntrantInputField } from "../../../forms/EntrantInputField";
import { Input } from "../../../forms/Input";
import { Button } from "../../../forms/Button";
import { MatchesToAdd, MatchToAdd } from "./MatchesToAdd";

const maxMatchesAtOnce = 25;

export const AddMatches: React.FC = () => {
  const {
    data: allEntrants,
    isError,
    isSuccess,
  } = useQuery<User[], Error>("allEntrants", getAllEntrants);
  const [matchesToAdd, setMatchesToAdd] = useState<MatchToAdd[]>([]);

  const [entrant1, setEntrant1] = useState<User | undefined>(undefined);
  const [entrant2, setEntrant2] = useState<User | undefined>(undefined);

  const [inputRound, setInputRound] = useState<string>("");

  const validInput = !!entrant1 && !!entrant2 && !!inputRound;

  if (isError) {
    return <p>Could not load entrants</p>;
  }
  if (!isSuccess) {
    return <p>loading...</p>;
  }

  const addMatch = () => {
    if (validInput) {
      setMatchesToAdd((matches) => [
        ...matches,
        {
          entrant1: entrant1,
          entrant2: entrant2,
          round: inputRound,
        },
      ]);
    }
  };

  const removeMatch = (index: number) => {
    if (validInput) {
      setMatchesToAdd((matches) => [
        ...matches.slice(0, index),
        ...matches.slice(index + 1, matches.length),
      ]);
    }
  };

  return (
    <AddMatchesDiv>
      <InputRow>
        <InputLabel>Entrant 1</InputLabel>
        <EntrantInputField
          initialInput={""}
          allEntrants={allEntrants}
          onEntrantChange={setEntrant1}
        />
        {entrant1 && <UserDisplay user={entrant1} />}
      </InputRow>

      <InputRow>
        <InputLabel>Entrant 2</InputLabel>

        <EntrantInputField
          initialInput={""}
          allEntrants={allEntrants}
          onEntrantChange={setEntrant2}
        />
        {entrant2 && <UserDisplay user={entrant2} />}
      </InputRow>

      <InputRow>
        <InputLabel>Round</InputLabel>
        <InputField
          type="text"
          value={inputRound}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputRound(event.target.value)
          }
          placeholder={"round"}
        />
        <p>{inputRound}</p>
      </InputRow>

      <AddMatchButton
        disabled={!validInput || matchesToAdd.length >= maxMatchesAtOnce}
        color={"coral"}
        onClick={addMatch}
      >
        {matchesToAdd.length < maxMatchesAtOnce ? "Add match" : "Max matches"}
      </AddMatchButton>

      <MatchesToAdd matchesToAdd={matchesToAdd} onRemoveMatch={removeMatch} />
    </AddMatchesDiv>
  );
};

const AddMatchesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputRow = styled(FlexDiv)`
  justify-content: flex-start;
  margin-right: 2rem;
`;

const InputLabel = styled(FlexDiv)`
  width: 5rem;
  justify-content: flex-start;
`;

const InputField = styled(Input)`
  width: 15rem;
  margin-right: 1rem;
  font-size: 1rem;
`;

const AddMatchButton = styled(Button)`
  margin-left: 21rem;
  margin-top: 0.5rem;
  width: 8rem;
`;
