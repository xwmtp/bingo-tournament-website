import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
import { User } from "../../domain/User";

interface Props {
  initialInput: string;
  allEntrants: User[];
  onEntrantChange: (entrant: User | undefined) => void;
  placeholder?: string;
}

export const EntrantInputField: React.FC<Props> = ({
  initialInput,
  allEntrants,
  onEntrantChange,
  placeholder,
}) => {
  const [input, setInput] = useState<string>(initialInput);

  useEffect(() => {
    let matchingEntrant = allEntrants.find(
      (entrant) => entrant.name.toLowerCase() === input.toLowerCase()
    );
    if (!matchingEntrant) {
      const entrantsStartingWithInput = allEntrants.filter((entrant) =>
        entrant.name.toLowerCase().startsWith(input.toLowerCase())
      );
      if (entrantsStartingWithInput.length === 1) {
        matchingEntrant = entrantsStartingWithInput[0];
      }
    }
    onEntrantChange(matchingEntrant);
  }, [allEntrants, input, onEntrantChange]);

  return (
    <InputField
      type="text"
      value={input}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
      placeholder={placeholder ?? "entrant"}
    />
  );
};

const InputField = styled(Input)`
  width: 15rem;
  margin-right: 1rem;
  font-size: 1rem;
`;
