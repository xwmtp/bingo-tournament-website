import React, { useState } from "react";
import { Input } from "../../../forms/Input";
import { ErrorText } from "../../../general/ErrorText";
import styled from "styled-components";
import { Container } from "../../../Container";
import { FlexDiv } from "../../../divs/FlexDiv";
import { MutationButton } from "../../../forms/buttons/MutationButton";
import { UseMutationResult } from "react-query";
import { Match } from "../../../../domain/Match";
import { DateTime } from "luxon";

interface Props {
  match: Match;
  setVodMutation: UseMutationResult<Match, unknown, { matchId: string; newTime: DateTime }>; // todo
  deleteVodMutation: UseMutationResult<Match, unknown, { matchId: string; newTime: DateTime }>; // todo
}

export const EditVodUrl: React.FC<Props> = ({ match, setVodMutation, deleteVodMutation }) => {
  const [vodUrl, setVodUrl] = useState<string | undefined>(undefined);

  const updateVodMatch = vodUrl && {
    matchId: match.id,
    vodUrl: vodUrl,
  };

  return (
    <EditVodContainer title="Admin only - Update vod" size="small" backgroundColor="lightGrey">
      <p>Set the vod url {`(currently: ${match.vodUrl ?? "no vod url set"})`}.</p>

      <UpdateRestreamDiv>
        <Input
          type="text"
          maxLength={60}
          value={vodUrl ?? ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setVodUrl(event.target.value)}
          placeholder={"https://twitch.tv/videos/123"}
        />

        {setVodMutation.isError && (
          <ErrorText>Could not set the vod url, please try again later.</ErrorText>
        )}
      </UpdateRestreamDiv>

      <MutationButtonStyled
        disabled={!updateVodMatch}
        mutationStatus={setVodMutation.status}
        onIdleText={"Set vod"}
        color={"brightMossGreen"}
        size={"big"}
        // todo onClick={() => updateVodMatch && setVodMutation.mutate(updateVodMatch)}
      />

      <MutationButtonStyled
        disabled={!match.restreamChannel}
        mutationStatus={deleteVodMutation.status}
        onIdleText={"Remove vod"}
        color={"coral"}
        size={"big"}
        // todo onClick={() => match.restreamChannel && deleteVodMutation.mutate(match.id)}
      />
    </EditVodContainer>
  );
};

const MutationButtonStyled = styled(MutationButton)`
  margin-top: 1.2rem;
`;

const EditVodContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 0;
  flex-direction: column;
`;

const UpdateRestreamDiv = styled(FlexDiv)`
  flex-direction: column;
`;
