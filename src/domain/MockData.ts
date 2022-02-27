import { ScheduledMatch } from "./Schedule";
import { DateTime } from "luxon";
import { User } from "./User";

export const mockMatches: ScheduledMatch[] = [
  new ScheduledMatch(
    "Fleush",
    "matttinthehat",
    DateTime.fromISO("2022-02-02T19:45:03Z"),
    "Round 1",
    "xwillmarktheplace"
  ),
  new ScheduledMatch(
    "xwillmarktheplace",
    "scaramangado",
    DateTime.fromISO("2022-02-04T04:45:03Z"),
    "Round 1",
    "ZeldaSpeedruns"
  ),
  new ScheduledMatch(
    "juwk",
    "jenslang",
    DateTime.fromISO("2022-02-04T22:30:03Z"),
    "Round 1"
  ),
  new ScheduledMatch(
    "scaramangado",
    "jenslang",
    DateTime.fromISO("2022-02-07T12:45:03Z"),
    "Round 1"
  ),
];

export const mockLoggedInUser = new User(
  "wdm1LPWjGABEnVx6",
  "scaramangado",
  "https://racetime.gg/media/feynman_small.jpeg",
  "scaramangado"
);
