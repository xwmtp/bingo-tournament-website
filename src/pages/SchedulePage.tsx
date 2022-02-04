import { Container } from "../components/Container";
import { ScheduledMatchBlock } from "../components/schedule/ScheduledMatchBlock";
import { DateTime } from "luxon";

export const SchedulePage: React.FC = () => {
  return (
    <Container width={1000}>
      <div>
        <h1>Schedule</h1>
        <p>Here comes the schedule</p>

        <h2>
          {DateTime.local()
            .setLocale("en-us")
            .toLocaleString({ weekday: "long", month: "long", day: "numeric" })}
        </h2>
        <ScheduledMatchBlock
          match={{
            entrant1: "xwillmarktheplace",
            entrant2: "scaramangado",
            startTime: DateTime.fromISO("2022-02-04T06:45:03Z"),
            round: "Round 1",
          }}
        />
        <ScheduledMatchBlock
          match={{
            entrant1: "Fleush",
            entrant2: "matttinthehat",
            startTime: DateTime.fromISO("2022-02-02T19:45:03Z"),
            round: "Round 1",
          }}
        />
      </div>
    </Container>
  );
};
