import Modal from "styled-react-modal";
import { Colors } from "../../GlobalStyle";
import React, { useState } from "react";
import { Container } from "../Container";
import styled from "styled-components";
import { Input } from "../forms/Input";
import { DateTime } from "luxon";
import { FlexDiv } from "../divs/FlexDiv";
import { Button } from "../forms/Button";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<Props> = ({ visible, onClose }) => {
  const [dateTimeInput, setDateTimeInput] = useState<DateTime>(
    DateTime.local()
  );

  return (
    <ModalStyled
      isOpen={visible}
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
    >
      <ContainerStyled title={"Pick date & time"} size="small" width={"700px"}>
        <ContainerContents>
          <p>
            {`Please schedule your match after agreeing on a time with your
            opponent. Your detected timezone is ${DateTime.local().toFormat(
              "ZZZZ"
            )} (${DateTime.local().toFormat("ZZZZZ")}).`}
          </p>

          <DateTimeInputs>
            <Input
              type="date"
              className="form-control"
              value={dateTimeInput.toISODate()}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedDate = DateTime.fromISO(event.target.value);
                if (!parsedDate.isValid) {
                  return;
                }
                setDateTimeInput(mergeDateAndTime(parsedDate, dateTimeInput));
              }}
            />
            <Input
              type="time"
              className="form-control"
              value={dateTimeInput.toFormat("HH:mm")}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const parsedTime = DateTime.fromISO(event.target.value);
                if (!parsedTime.isValid) {
                  return;
                }
                setDateTimeInput(mergeDateAndTime(dateTimeInput, parsedTime));
              }}
            />
          </DateTimeInputs>

          <p>Schedule match for:</p>
          <h4>{dateTimeInput.toLocaleString(DateTime.DATETIME_FULL)}</h4>
          <ConfirmButton color={"brightMossGreen"} size={"big"}>
            Confirm
          </ConfirmButton>
        </ContainerContents>
      </ContainerStyled>
    </ModalStyled>
  );
};

const mergeDateAndTime = (date: DateTime, time: DateTime): DateTime => {
  const iso = date.toFormat("yyyy-MM-dd") + "T" + time.toFormat("HH:mm");
  return DateTime.fromISO(iso);
};

const ModalStyled = Modal.styled`
  position: absolute;
  top: 20%;
  border-radius: 0.6rem;
  padding: 1.2rem;
  background-color: ${Colors.darkGrey};
`;

const ContainerStyled = styled(Container)`
  margin-bottom: 0;
  max-width: 85vw;
`;

const ContainerContents = styled(FlexDiv)`
  display: flex;
  flex-direction: column;
`;

const DateTimeInputs = styled(FlexDiv)`
  margin: 1.8rem 0;
`;

const ConfirmButton = styled(Button)`
  margin-top: 1.2rem;
`;
