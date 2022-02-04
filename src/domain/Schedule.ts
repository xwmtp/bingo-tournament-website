import { DateTime } from "luxon";

export type ScheduledMatch = {
  entrant1: string;
  entrant2: string;
  startTime: DateTime;
  round?: string;
  restreamChannel?: string;
};
