import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FlexDiv } from "../../divs/FlexDiv";
import { Modal } from "../../Modal";
import { useMutation, useQueryClient } from "react-query";
import { updateMatchRestream } from "../../../api/matchesApi";
import { Match } from "../../../domain/Match";
import { MutationButton } from "../../forms/buttons/MutationButton";
import { Input } from "../../forms/Input";
import { ErrorText } from "../../general/ErrorText";
import { MatchDisplay } from "../../MatchDisplay";

interface Props {
  match: Match;
  visible: boolean;
  onClose: () => void;
}

export const ClaimRestreamModal: React.FC<Props> = ({ match, visible, onClose }) => {
  const [restreamInput, setRestreamInput] = useState<string>("");
  const restreamChannel = useMemo(() => extractRestreamChannel(restreamInput), [restreamInput]);

  const queryClient = useQueryClient();
  const updateRestreamMutation = useMutation(updateMatchRestream, {
    onSuccess: () => {
      queryClient.invalidateQueries("allMatches");
      onClose();
    },
  });

  const updateRestreamMatch = {
    matchId: match.id,
    restreamChannel: restreamChannel,
  };

  const internalOnClose = () => {
    updateRestreamMutation.reset();
    onClose();
  };

  return (
    <Modal title={"Set restream channel of match"} isOpen={visible} onClose={internalOnClose}>
      <ContainerContents>
        <MatchDisplay match={match} />

        <p>
          Enter the name of the Twitch channel that you're going to host the restream of this match
          on. Only claim the restream if you're actually planning on hosting it.
        </p>

        <ChannelInput
          type="text"
          maxLength={30}
          value={restreamInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setRestreamInput(event.target.value);
            updateRestreamMutation.reset();
          }}
          placeholder={`channelname`}
        />

        {updateRestreamMutation.isError && (
          <ErrorText>Could not set the restream channel, please try again later.</ErrorText>
        )}

        {restreamChannel && <p>{`Channel: ${restreamChannel}`}</p>}

        <MutationButtonStyled
          disabled={!restreamChannel}
          mutationStatus={updateRestreamMutation.status}
          onIdleText={"Set restream"}
          color={"brightMossGreen"}
          size={"big"}
          onClick={() => restreamChannel && updateRestreamMutation.mutate(updateRestreamMatch)}
        />
      </ContainerContents>
    </Modal>
  );
};

const extractRestreamChannel = (input: string) => {
  if (input.startsWith("_")) {
    return "";
  }
  return input.replace(/[^a-z0-9_]/gi, "");
};

const ContainerContents = styled(FlexDiv)`
  display: flex;
  flex-direction: column;
`;

const MutationButtonStyled = styled(MutationButton)`
  margin-top: 1.2rem;
`;

const ChannelInput = styled(Input)`
  width: 30rem;
  margin: 1rem 0;
  font-size: 0.95rem;
`;
