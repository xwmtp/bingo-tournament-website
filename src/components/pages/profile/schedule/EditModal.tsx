import React, { useState } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import { FlexDiv } from "../../../divs/FlexDiv";
import { DateTimeInput } from "../../../forms/DateTimeInput";
import { Modal } from "../../../Modal";
import { useMutation, useQueryClient } from "react-query";
import { updateMatchTime } from "../../../../api/matchesApi";
import { ScheduledMatch } from "../../../../domain/Match";
import { MutationButton } from "../../../forms/buttons/MutationButton";

interface Props {
  match: ScheduledMatch;
  visible: boolean;
  onClose: () => void;
}

export const EditModal: React.FC<Props> = ({ match, visible, onClose }) => {
  const [dateTimeInput, setDateTimeInput] = useState<DateTime>(DateTime.local());

  const queryClient = useQueryClient();
  const matchMutation = useMutation(updateMatchTime, {
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
    matchMutation.reset();
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
          mutationStatus={matchMutation.status}
          onIdleText={"Update"}
          color={"brightMossGreen"}
          size={"big"}
          onClick={() => matchMutation.mutate(updateMatch)}
        />
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
