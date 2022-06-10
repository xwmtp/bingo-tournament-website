import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FlexDiv } from "../../divs/FlexDiv";
import { Modal } from "../../Modal";
import { useMutation, useQueryClient } from "react-query";
import { updateMatchRacetimeId } from "../../../api/matchesApi";
import { ScheduledMatch } from "../../../domain/Match";
import { MutationButton } from "../../forms/buttons/MutationButton";
import { Input } from "../../forms/Input";
import { ExternalLink } from "../../general/ExternalLink";
import { ErrorText } from "../../general/ErrorText";

interface Props {
  match: ScheduledMatch;
  visible: boolean;
  onClose: () => void;
}

export const RecordModal: React.FC<Props> = ({ match, visible, onClose }) => {
  const [racetimeInput, setRacetimeInput] = useState<string>("");
  const racetimeId = useMemo(() => extractRacetimeId(racetimeInput), [racetimeInput]);

  const queryClient = useQueryClient();
  const updateRacetimeIdMutation = useMutation(updateMatchRacetimeId, {
    onSuccess: () => {
      queryClient.invalidateQueries("allMatches");
      onClose();
    },
  });

  const updateMatch = racetimeId && {
    matchId: match.id,
    newRacetimeId: racetimeId,
  };

  const internalOnClose = () => {
    updateRacetimeIdMutation.reset();
    onClose();
  };

  return (
    <Modal title={"Record results of match"} isOpen={visible} onClose={internalOnClose}>
      <ContainerContents>
        <p>
          Paste the url of the{" "}
          <ExternalLink url="https://racetime.gg/oot">Racetime.gg</ExternalLink> race belonging to
          this match to save the results.
        </p>

        <InputRow>
          <InputField
            type="text"
            maxLength={70}
            value={racetimeInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRacetimeInput(event.target.value)
            }
            placeholder="https://racetime.gg/oot/bingo-tourney-1234"
          />
        </InputRow>

        <p>{racetimeId}</p>

        {updateRacetimeIdMutation.isError && (
          <ErrorText>
            {`Could not record the race. Please confirm that the Racetime id '${racetimeId}' is
            correct.`}
          </ErrorText>
        )}

        <ConfirmButton
          disabled={!racetimeId}
          mutationStatus={updateRacetimeIdMutation.status}
          onIdleText={"Record"}
          color={"brightMossGreen"}
          size={"big"}
          onClick={() => updateMatch && updateRacetimeIdMutation.mutate(updateMatch)}
        />
      </ContainerContents>
    </Modal>
  );
};

const extractRacetimeId = (input: string): string | undefined => {
  const racetimeIdRegex = /[A-Za-z]+-[A-Za-z]+-\d{4}/g;
  const gameSlug = "oot";
  const matchingStrings = input.match(racetimeIdRegex);
  if (matchingStrings && matchingStrings.length > 0) {
    return `${gameSlug}/${matchingStrings[0]}`;
  }
};

const ContainerContents = styled(FlexDiv)`
  display: flex;
  flex-direction: column;
`;

const ConfirmButton = styled(MutationButton)`
  margin-top: 1.2rem;
`;

const InputRow = styled(FlexDiv)`
  justify-content: flex-start;
  margin-right: 2rem;
`;

const InputField = styled(Input)`
  width: 30rem;
  margin: 1rem 0;
  font-size: 0.95rem;
`;
