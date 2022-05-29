import { MatchResult, ScheduledMatch, UnscheduledMatch } from "./Match";
import { DateTime } from "luxon";

export const mockScheduledMatches: ScheduledMatch[] = [
  {
    id: "m1",
    entrants: [
      {
        user: {
          id: "pRbOXG3ykOWZVKq1",
          name: "Fleush",
          avatar: "https://racetime.gg/media/noscara1.png",
          twitchChannel: "https://www.twitch.tv/happyfleush",
        },
      },
      {
        user: {
          id: "VXY0eABdn7oLKPnz",
          name: "MatttInTheHat",
          avatar: undefined,
          twitchChannel: "https://www.twitch.tv/matttinthehat",
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-02T19:45:03Z"),
    round: "Round 1",
    restreamChannel: "xwillmarktheplace",
  },
  {
    id: "m2",
    entrants: [
      {
        user: {
          id: "Yzk9QRd2XBoeaB0M",
          name: "xwillmarktheplace",
          avatar: "https://racetime.gg/media/Racetime.png",
          twitchChannel: "https://www.twitch.tv/xwillmarktheplace",
        },
      },
      {
        user: {
          id: "d17DexWEKg3ak64R",
          name: "scaramanga",
          avatar: "https://racetime.gg/media/feynman_small.jpeg",
          twitchChannel: "https://www.twitch.tv/scaramangado",
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-01-01T04:45:03Z"),
    round: "Round 1",
    restreamChannel: "ZeldaSpeedruns",
  },
  {
    id: "m3",
    entrants: [
      {
        user: {
          id: "XGzr7pBMny3kqgyE",
          name: "juwk",
          avatar: undefined,
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
      {
        user: {
          id: "rZyM4orRvRoqDJX0",
          name: "jenslang",
          avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-04T22:30:03Z"),
    round: "Round 1",
  },
  {
    id: "m4",
    entrants: [
      {
        user: {
          id: "d17DexWEKg3ak64R",
          name: "scaramanga",
          avatar: "https://racetime.gg/media/feynman_small.jpeg",
          twitchChannel: "https://www.twitch.tv/scaramangado",
        },
      },
      {
        user: {
          id: "rZyM4orRvRoqDJX0",
          name: "jenslang",
          avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-07T12:45:03Z"),
    round: "Round 1",
  },
  {
    id: "m5",
    entrants: [
      {
        user: {
          id: "XGzr7pBMny3kqgyE",
          name: "juwk",
          avatar: undefined,
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
      {
        user: {
          id: "rZyM4orRvRoqDJX0",
          name: "jenslang",
          avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-04T03:30:03Z"),
    round: "Round 1",
  },
  {
    id: "m6",
    entrants: [
      {
        user: {
          id: "Yzk9QRd2XBoeaB0M",
          name: "xwillmarktheplace",
          avatar: "https://racetime.gg/media/Racetime.png",
          twitchChannel: "https://www.twitch.tv/xwillmarktheplace",
        },
      },
      {
        user: {
          id: "XGzr7pBMny3kqgyE",
          name: "juwk",
          avatar: undefined,
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-19T10:30:03Z"),
    round: "Round 2",
    restreamChannel: undefined,
  },
];

export const mockUnscheduledMatches: UnscheduledMatch[] = [
  {
    id: "u1",
    entrants: [
      {
        user: {
          id: "pRbOXG3ykOWZVKq1",
          name: "Fleush",
          avatar: "https://racetime.gg/media/noscara1.png",
          twitchChannel: "https://www.twitch.tv/happyfleush",
        },
      },
      {
        user: {
          id: "VXY0eABdn7oLKPnz",
          name: "MatttInTheHat",
          avatar: undefined,
          twitchChannel: "https://www.twitch.tv/matttinthehat",
        },
      },
    ],
    round: "Round 1",
    restreamChannel: "xwillmarktheplace",
  },
  {
    id: "u2",
    entrants: [
      {
        user: {
          id: "Yzk9QRd2XBoeaB0M",
          name: "xwillmarktheplace",
          avatar: "https://racetime.gg/media/Racetime.png",
          twitchChannel: "https://www.twitch.tv/xwillmarktheplace",
        },
      },
      {
        user: {
          id: "d17DexWEKg3ak64R",
          name: "scaramanga",
          avatar: "https://racetime.gg/media/feynman_small.jpeg",
          twitchChannel: "https://www.twitch.tv/scaramangado",
        },
      },
    ],
    round: "Round 1",
    restreamChannel: "ZeldaSpeedruns",
  },
  {
    id: "u3",
    entrants: [
      {
        user: {
          id: "XGzr7pBMny3kqgyE",
          name: "juwk",
          avatar: undefined,
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
      {
        user: {
          id: "rZyM4orRvRoqDJX0",
          name: "jenslang",
          avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
    ],
    round: "Round 1",
  },
  {
    id: "u4",
    entrants: [
      {
        user: {
          id: "d17DexWEKg3ak64R",
          name: "scaramanga",
          avatar: "https://racetime.gg/media/feynman_small.jpeg",
          twitchChannel: "https://www.twitch.tv/scaramangado",
        },
      },
      {
        user: {
          id: "rZyM4orRvRoqDJX0",
          name: "jenslang",
          avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
      },
    ],
    round: "Round 1",
  },
];

export const mockMatchResults: MatchResult[] = [
  {
    id: "r1",
    entrants: [
      {
        user: {
          id: "pRbOXG3ykOWZVKq1",
          name: "Fleush",
          avatar: "https://racetime.gg/media/noscara1.png",
          twitchChannel: "https://www.twitch.tv/happyfleush",
        },
        result: {
          status: "done",
          finishTime: 4976,
          rank: 1,
          racetimeRank: 1,
        },
      },
      {
        user: {
          id: "VXY0eABdn7oLKPnz",
          name: "MatttInTheHat",
          avatar: undefined,
          twitchChannel: "https://www.twitch.tv/matttinthehat",
        },
        result: {
          status: "forfeit",
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-02T19:45:03Z"),
    round: "Round 1",
    restreamChannel: "xwillmarktheplace",
  },
  {
    id: "r2",
    entrants: [
      {
        user: {
          id: "Yzk9QRd2XBoeaB0M",
          name: "xwillmarktheplace",
          avatar: "https://racetime.gg/media/Racetime.png",
          twitchChannel: "https://www.twitch.tv/xwillmarktheplace",
        },
        result: {
          status: "done",
          finishTime: 4511,
          rank: 1,
          racetimeRank: 1,
        },
      },
      {
        user: {
          id: "d17DexWEKg3ak64R",
          name: "scaramanga",
          avatar: "https://racetime.gg/media/feynman_small.jpeg",
          twitchChannel: "https://www.twitch.tv/scaramangado",
        },
        result: {
          status: "done",
          finishTime: 4739,
          rank: 1,
          racetimeRank: 1,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-04T04:45:03Z"),
    round: "Round 1",
    restreamChannel: "ZeldaSpeedruns",
  },
  {
    id: "r3",
    entrants: [
      {
        user: {
          id: "XGzr7pBMny3kqgyE",
          name: "juwk",
          avatar: undefined,
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
        result: {
          status: "done",
          finishTime: 4497,
          rank: 1,
          racetimeRank: 1,
        },
      },
      {
        user: {
          id: "rZyM4orRvRoqDJX0",
          name: "jenslang",
          avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
        result: {
          status: "done",
          finishTime: 4497,
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-04T22:30:03Z"),
    round: "Round 1",
  },
  {
    id: "r4",
    entrants: [
      {
        user: {
          id: "d17DexWEKg3ak64R",
          name: "scaramanga",
          avatar: "https://racetime.gg/media/feynman_small.jpeg",
          twitchChannel: "https://www.twitch.tv/scaramangado",
        },
        result: {
          status: "done",
          finishTime: 4710,
          rank: 1,
          racetimeRank: 1,
        },
      },

      {
        user: {
          id: "rZyM4orRvRoqDJX0",
          name: "jenslang",
          avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
        result: {
          status: "done",
          finishTime: 4756,
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-07T12:45:03Z"),
    round: "Round 1",
  },
  {
    id: "r5",
    entrants: [
      {
        user: {
          id: "d17DexWEKg3ak64R",
          name: "scaramanga",
          avatar: "https://racetime.gg/media/feynman_small.jpeg",
          twitchChannel: "https://www.twitch.tv/scaramangado",
        },
        result: {
          status: "done",
          finishTime: 4610,
          rank: 1,
          racetimeRank: 1,
        },
      },

      {
        user: {
          id: "rZyM4orRvRoqDJX0",
          name: "jenslang",
          avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
          twitchChannel: "https://www.twitch.tv/jenslang",
        },
        result: {
          status: "done",
          finishTime: 4766,
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2022-02-14T12:45:03Z"),
    round: "Round 2",
  },
];

export const mockAllUsers = [
  {
    id: "pRbOXG3ykOWZVKq1",
    name: "Fleush",
    avatar: "https://racetime.gg/media/noscara1.png",
    twitchChannel: "https://www.twitch.tv/happyfleush",
  },
  {
    id: "wdm1LPWjGABEnVx6",
    name: "scaramanga",
    avatar: "https://racetime.gg/media/feynman_small.jpeg",
    twitchChannel: "https://www.twitch.tv/scaramangado",
  },
  {
    id: "XGzr7pBMny3kqgyE",
    name: "juwk",
    avatar: undefined,
    twitchChannel: "https://www.twitch.tv/jenslang",
  },
  {
    id: "Yzk9QRd2XBoeaB0M",
    name: "xwillmarktheplace",
    avatar: "https://racetime.gg/media/Racetime.png",
    twitchChannel: "https://www.twitch.tv/xwillmarktheplace",
  },
  {
    id: "rZyM4orRvRoqDJX0",
    name: "jenslang",
    avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
    twitchChannel: "https://www.twitch.tv/jenslang",
  },
];

export const mockLoggedInUser = {
  id: "Yzk9QRd2XBoeaB0M",
  name: "xwillmarktheplace",
  avatar: "https://racetime.gg/media/Racetime.png",
  twitchChannel: "https://www.twitch.tv/xwillmarktheplace",
};
