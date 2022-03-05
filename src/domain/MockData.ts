import { Match, ScheduledMatch } from "./Match";
import { DateTime } from "luxon";
import { User } from "./User";

export const mockScheduledMatches: ScheduledMatch[] = [
  new ScheduledMatch(
    new User(
      "pRbOXG3ykOWZVKq1",
      "Fleush",
      "https://racetime.gg/media/noscara1.png",
      "https://www.twitch.tv/happyfleush"
    ),
    new User(
      "VXY0eABdn7oLKPnz",
      "MatttInTheHat",
      undefined,
      "https://www.twitch.tv/matttinthehat"
    ),
    DateTime.fromISO("2022-02-02T19:45:03Z"),
    "Round 1",
    "xwillmarktheplace"
  ),
  new ScheduledMatch(
    new User(
      "Yzk9QRd2XBoeaB0M",
      "xwillmarktheplace",
      "https://racetime.gg/media/Racetime.png",
      "https://www.twitch.tv/xwillmarktheplace"
    ),
    new User(
      "d17DexWEKg3ak64R",
      "scaramanga",
      "https://racetime.gg/media/feynman_small.jpeg",
      "https://www.twitch.tv/scaramangado"
    ),
    DateTime.fromISO("2022-02-04T04:45:03Z"),
    "Round 1",
    "ZeldaSpeedruns"
  ),
  new ScheduledMatch(
    new User(
      "XGzr7pBMny3kqgyE",
      "juwk",
      undefined,
      "https://www.twitch.tv/jenslang"
    ),
    new User(
      "rZyM4orRvRoqDJX0",
      "jenslang",
      "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
      "https://www.twitch.tv/jenslang"
    ),
    DateTime.fromISO("2022-02-04T22:30:03Z"),
    "Round 1"
  ),
  new ScheduledMatch(
    new User(
      "d17DexWEKg3ak64R",
      "scaramanga",
      "https://racetime.gg/media/feynman_small.jpeg",
      "https://www.twitch.tv/scaramangado"
    ),
    new User(
      "rZyM4orRvRoqDJX0",
      "jenslang",
      "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
      "https://www.twitch.tv/jenslang"
    ),
    DateTime.fromISO("2022-02-07T12:45:03Z"),
    "Round 1"
  ),
];

export const mockUnscheduledMatches: Match[] = [
  new Match(
    new User(
      "pRbOXG3ykOWZVKq1",
      "Fleush",
      "https://racetime.gg/media/noscara1.png",
      "https://www.twitch.tv/happyfleush"
    ),
    new User(
      "VXY0eABdn7oLKPnz",
      "MatttInTheHat",
      undefined,
      "https://www.twitch.tv/matttinthehat"
    ),
    "Round 1",
    "xwillmarktheplace"
  ),
  new Match(
    new User(
      "Yzk9QRd2XBoeaB0M",
      "xwillmarktheplace",
      "https://racetime.gg/media/Racetime.png",
      "https://www.twitch.tv/xwillmarktheplace"
    ),
    new User(
      "d17DexWEKg3ak64R",
      "scaramanga",
      "https://racetime.gg/media/feynman_small.jpeg",
      "https://www.twitch.tv/scaramangado"
    ),
    "Round 1",
    "ZeldaSpeedruns"
  ),
  new Match(
    new User(
      "XGzr7pBMny3kqgyE",
      "juwk",
      undefined,
      "https://www.twitch.tv/jenslang"
    ),
    new User(
      "rZyM4orRvRoqDJX0",
      "jenslang",
      "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
      "https://www.twitch.tv/jenslang"
    ),
    "Round 1"
  ),
  new Match(
    new User(
      "d17DexWEKg3ak64R",
      "scaramanga",
      "https://racetime.gg/media/feynman_small.jpeg",
      "https://www.twitch.tv/scaramangado"
    ),
    new User(
      "rZyM4orRvRoqDJX0",
      "jenslang",
      "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
      "https://www.twitch.tv/jenslang"
    ),
    "Round 1"
  ),
];

export const mockAllUsers = [
  new User(
    "pRbOXG3ykOWZVKq1",
    "Fleush",
    "https://racetime.gg/media/noscara1.png",
    "https://www.twitch.tv/happyfleush"
  ),
  new User(
    "wdm1LPWjGABEnVx6",
    "scaramanga",
    "https://racetime.gg/media/feynman_small.jpeg",
    "https://www.twitch.tv/scaramangado"
  ),
  new User(
    "XGzr7pBMny3kqgyE",
    "juwk",
    undefined,
    "https://www.twitch.tv/jenslang"
  ),
  new User(
    "Yzk9QRd2XBoeaB0M",
    "xwillmarktheplace",
    "https://racetime.gg/media/Racetime.png",
    "https://www.twitch.tv/xwillmarktheplace"
  ),
  new User(
    "rZyM4orRvRoqDJX0",
    "jenslang",
    "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
    "https://www.twitch.tv/jenslang"
  ),
];

export const mockLoggedInUser = new User(
  "wdm1LPWjGABEnVx6",
  "scaramangado",
  "https://racetime.gg/media/feynman_small.jpeg",
  "scaramangado"
);
