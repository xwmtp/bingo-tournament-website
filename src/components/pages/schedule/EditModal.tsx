import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import { FlexDiv } from "../../divs/FlexDiv";
import { DateTimeInput } from "../../forms/DateTimeInput";
import { Modal } from "../../Modal";
import { useMutation, useQueryClient } from "react-query";
import {
  deleteMatches,
  removeMatchRestream,
  updateMatchRestream,
  updateMatchTime,
} from "../../../api/matchesApi";
import { ScheduledMatch } from "../../../domain/Match";
import { MutationButton } from "../../forms/buttons/MutationButton";
import { useUser } from "../../../api/userApi";
import { isAdmin } from "../../../domain/User";
import { Container } from "../../Container";
import { ErrorText } from "../../general/ErrorText";
import { MatchDisplay } from "../../MatchDisplay";
import { RestreamChannelInputField } from "../../forms/RestreamChannelInputField";
import { extractTwitchChannel } from "../../../lib/urlHelpers";

interface Props {
  match: ScheduledMatch;
  visible: boolean;
  onClose: () => void;
}

export const EditModal: React.FC<Props> = ({ match, visible, onClose }) => {
  const [dateTimeInput, setDateTimeInput] = useState<DateTime>(match.scheduledTime);
  const [restreamChannel, setRestreamChannel] = useState<string | undefined>(undefined);

  const { data: user } = useUser();

  const queryClient = useQueryClient();
  const updateTimeMutation = useMutation(updateMatchTime, {
    onSuccess: () => {
      queryClient.invalidateQueries("allMatches");
      onClose();
    },
  });

  const deleteMatchMutation = useMutation(deleteMatches, {
    onSuccess: () => {
      queryClient.invalidateQueries("allMatches");
      onClose();
    },
  });

  const setRestreamMutation = useMutation(updateMatchRestream, {
    onSuccess: () => {
      queryClient.invalidateQueries("allMatches");
      onClose();
    },
  });

  const deleteRestreamMutation = useMutation(removeMatchRestream, {
    onSuccess: () => {
      queryClient.invalidateQueries("allMatches");
      onClose();
    },
  });

  const updateTimeMatch = {
    matchId: match.id,
    newTime: dateTimeInput,
  };

  const updateRestreamMatch = restreamChannel && {
    matchId: match.id,
    restreamChannelUrl: "https://twitch.tv/" + restreamChannel,
  };

  const internalOnClose = () => {
    updateTimeMutation.reset();
    deleteMatchMutation.reset();
    setRestreamMutation.reset();
    onClose();
  };

  useEffect(() => {
    if (setRestreamMutation.isError) {
      setRestreamMutation.reset();
      deleteRestreamMutation.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restreamChannel]);

  return (
    <Modal modalTitle={"Change date & time"} isOpen={visible} onClose={internalOnClose}>
      <ContainerContents>
        <MatchDisplay match={match} />

        <p>
          {`Please only change the date and time your match after agreeing with your
            opponent. Your detected timezone is ${DateTime.local().toFormat(
              "ZZZZ"
            )} (${DateTime.local().toFormat("ZZZZZ")}).`}
        </p>

        <DateTimeInput dateTime={dateTimeInput} setDateTime={setDateTimeInput} />

        <p>New date & time:</p>
        <h4>{dateTimeInput.toLocaleString(DateTime.DATETIME_FULL)}</h4>

        {updateTimeMutation.isError && (
          <ErrorText>Could not update the time, please try again later.</ErrorText>
        )}

        <MutationButtonStyled
          mutationStatus={updateTimeMutation.status}
          onIdleText={"Change"}
          color={"brightMossGreen"}
          size={"big"}
          onClick={() => updateTimeMutation.mutate(updateTimeMatch)}
        />

        {!!user && isAdmin(user) && (
          <>
            <AdminOnlyDiv
              title="Admin only - Update restream"
              size="small"
              backgroundColor="lightGrey"
            >
              <p>
                Set a new restream Twitch channel{" "}
                {`(currently: ${match.restreamChannel ?? "no channel set"})`}.
              </p>

              <UpdateRestreamDiv>
                <RestreamChannelInputField
                  initialInput={extractTwitchChannel(match.restreamChannel ?? "")}
                  onChannelChange={setRestreamChannel}
                />

                {setRestreamMutation.isError && (
                  <ErrorText>Could not set the restream channel, please try again later.</ErrorText>
                )}
              </UpdateRestreamDiv>

              <MutationButtonStyled
                disabled={!updateRestreamMatch}
                mutationStatus={setRestreamMutation.status}
                onIdleText={"Set restream"}
                color={"brightMossGreen"}
                size={"big"}
                onClick={() =>
                  updateRestreamMatch && setRestreamMutation.mutate(updateRestreamMatch)
                }
              />

              <MutationButtonStyled
                disabled={!match.restreamChannel}
                mutationStatus={deleteRestreamMutation.status}
                onIdleText={"Remove restream"}
                color={"coral"}
                size={"big"}
                onClick={() => match.restreamChannel && deleteRestreamMutation.mutate(match.id)}
              />
            </AdminOnlyDiv>

            <AdminOnlyDiv
              title="Admin only - Delete match"
              size="small"
              backgroundColor="lightGrey"
            >
              <p>Click the button to completely remove this match from the database.</p>

              {deleteMatchMutation.isError && (
                <ErrorText>Could not delete te match, please try again later.</ErrorText>
              )}

              <MutationButtonStyled
                mutationStatus={deleteMatchMutation.status}
                onIdleText={"DELETE MATCH"}
                color={"coral"}
                size={"big"}
                onClick={() => deleteMatchMutation.mutate([match.id])}
              />
            </AdminOnlyDiv>
          </>
        )}
      </ContainerContents>
    </Modal>
  );
};

const ContainerContents = styled(FlexDiv)`
  display: flex;
  flex-direction: column;
`;

const MutationButtonStyled = styled(MutationButton)`
  margin-top: 1.2rem;
`;

const AdminOnlyDiv = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 0;
  flex-direction: column;
`;

const UpdateRestreamDiv = styled(FlexDiv)`
  flex-direction: column;
`;
