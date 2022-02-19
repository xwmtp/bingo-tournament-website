import React, { useState } from "react";
import { Container } from "../components/Container";
import { DateTime } from "luxon";
import { Input } from "../components/forms/Input";

export const AddMatchPage: React.FC = () => {
  const [dateTimeInput, setDateTimeInput] = useState<DateTime>(
    DateTime.local()
  );

  return (
    <Container title={"Schedule new match"}>
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
      <p>{dateTimeInput.toLocaleString(DateTime.DATETIME_FULL)}</p>
    </Container>
  );
};

const mergeDateAndTime = (date: DateTime, time: DateTime): DateTime => {
  const iso = date.toFormat("yyyy-MM-dd") + "T" + time.toFormat("HH:mm");
  return DateTime.fromISO(iso);
};
