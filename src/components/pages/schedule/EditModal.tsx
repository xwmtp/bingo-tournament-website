import React, { useState } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import { FlexDiv } from "../../divs/FlexDiv";
import { DateTimeInput } from "../../forms/DateTimeInput";
import { Modal } from "../../Modal";
import { useMutation, useQueryClient } from "react-query";
import { deleteMatches, updateMatchTime } from "../../../api/matchesApi";
import { ScheduledMatch } from "../../../domain/Match";
import { MutationButton } from "../../forms/buttons/MutationButton";
import { useUser } from "../../../api/userApi";
import { isAdmin } from "../../../domain/User";
import { Container } from "../../Container";

interface Props {
  match: ScheduledMatch;
  visible: boolean;
  onClose: () => void;
}

export const EditModal: React.FC<Props> = ({ match, visible, onClose }) => {
  const [dateTimeInput, setDateTimeInput] = useState<DateTime>(match.scheduledTime);

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

  const updateMatch = {
    matchId: match.id,
    newTime: dateTimeInput,
  };

  const internalOnClose = () => {
    updateTimeMutation.reset();
    deleteMatchMutation.reset();
    onClose();
  };

  return (
    <Modal title={"Update date & time"} isOpen={visible} onClose={internalOnClose}>
      <ContainerContents>
        <p>
          {`Please only change the date and time your match after agreeing with your
            opponent. Your detected timezone is ${DateTime.local().toFormat(
              "ZZZZ"
            )} (${DateTime.local().toFormat("ZZZZZ")}).`}
        </p>

        <DateTimeInput dateTime={dateTimeInput} setDateTime={setDateTimeInput} />

        <p>Change scheduled date & time to:</p>
        <h4>{dateTimeInput.toLocaleString(DateTime.DATETIME_FULL)}</h4>

        <ConfirmButton
          mutationStatus={updateTimeMutation.status}
          onIdleText={"Update"}
          color={"brightMossGreen"}
          size={"big"}
          onClick={() => updateTimeMutation.mutate(updateMatch)}
        />

        {!!user && isAdmin(user) && (
          <AdminOnlyDiv title="Admin only" size="small" backgroundColor="lightGray">
            <p>Click the button to completely remove this match from the database.</p>

            <DeleteMatchButton
              mutationStatus={deleteMatchMutation.status}
              onIdleText={"DELETE MATCH"}
              color={"coral"}
              size={"big"}
              onClick={() => deleteMatchMutation.mutate([match.id])}
            />
          </AdminOnlyDiv>
        )}
      </ContainerContents>
    </Modal>
  );
};

const ContainerContents = styled(FlexDiv)`
  display: flex;
  flex-direction: column;
`;

const ConfirmButton = styled(MutationButton)`
  margin-top: 1.2rem;
`;

const AdminOnlyDiv = styled(Container)`
  margin-top: 2rem;
  flex-direction: column;
`;

const DeleteMatchButton = styled(MutationButton)`
  margin-top: 1.2rem;
`;
