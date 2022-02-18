import React, { useState } from "react";
import { Container } from "../components/Container";
import { DateTime } from "luxon";
import { Input } from "../components/forms/Input";

export const AddMatchPage: React.FC = () => {
  const [dateInput, setDateInput] = useState<DateTime>(DateTime.local());
  const [timeInput, setTimeInput] = useState<DateTime>(DateTime.local());

  console.log("date: " + dateInput.toLocaleString());

  return (
    <Container title={"Schedule new match"}>
      <Input
        type="date"
        className="form-control"
        value={dateInput.toISODate()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          console.log(event.target.value);
          const parsedDate = DateTime.fromISO(event.target.value);
          if (!parsedDate.isValid) {
            console.log("invalid " + event.target.value);
            return;
          }
          setDateInput(parsedDate);
        }}
      />
      <Input
        type="time"
        className="form-control"
        value={dateInput.toFormat("HH:mm")}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          console.log(event.target.value);
          const parsedDate = DateTime.fromISO(event.target.value);
          if (!parsedDate.isValid) {
            console.log("invalid " + event.target.value);
            return;
          }
          console.log(parsedDate.toLocaleString());
          setDateInput(parsedDate);
        }}
      />
    </Container>
  );
};
