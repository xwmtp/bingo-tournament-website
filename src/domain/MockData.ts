import { ScheduledMatch } from "./Schedule";
import { DateTime } from "luxon";

export const mockMatches: ScheduledMatch[] = [
  {
    entrant1: "Fleush",
    entrant2: "matttinthehat",
    startTime: DateTime.fromISO("2022-02-02T19:45:03Z"),
    round: "Round 1",
    restreamChannel: "xwillmarktheplace",
  },
  {
    entrant1: "xwillmarktheplace",
    entrant2: "scaramangado",
    startTime: DateTime.fromISO("2022-02-04T04:45:03Z"),
    round: "Round 1",
    restreamChannel: "ZeldaSpeedruns",
  },
  {
    entrant1: "juwk",
    entrant2: "jenslang",
    startTime: DateTime.fromISO("2022-02-04T23:30:03Z"),
    round: "Round 1",
  },
];

export const mockLoggedInUser = {
  name: "scaramangado",
  discriminator: 9143,
  avatar: "https://racetime.gg/media/feynman_small.jpeg",
};
