import { MatchResult, ScheduledMatch, UnscheduledMatch } from "./Match";
import { DateTime } from "luxon";
import { User } from "./User";
import { websiteSettings } from "../Settings";
import { Role } from "@xwmtp/bingo-tournament";

const xwillmarktheplace = {
  id: "d17DexWEKg3ak64R",
  roles: [Role.Entrant, Role.Admin],
  name: "xwillmarktheplace",
  avatar: "https://racetime.gg/media/Racetime.png",
  twitchChannel: "https://www.twitch.tv/xwillmarktheplace",
};

const fleush = {
  id: "pRbOXG3ykOWZVKq1",
  roles: [Role.Entrant],
  name: "Fleush",
  avatar: "https://racetime.gg/media/noscara1.png",
  twitchChannel: "https://www.twitch.tv/happyfleush",
};

const jenslang = {
  id: "rZyM4orRvRoqDJX0",
  roles: [Role.Entrant],
  name: "jenslang",
  avatar: "https://racetime.gg/media/e0aaf3c8688abd0e58bed9d9f63de4ad.png",
  twitchChannel: "https://www.twitch.tv/jenslang",
};

const juwk = {
  id: "XGzr7pBMny3kqgyE",
  roles: [Role.Entrant],
  name: "juwk",
  avatar: websiteSettings.DEFAULT_AVATAR,
  twitchChannel: "https://www.twitch.tv/jenslang",
};

const scaramanga = {
  id: "wdm1LPWjGABEnVx6",
  roles: [Role.Entrant],
  name: "scaramanga",
  avatar: "https://racetime.gg/media/feynman_small.jpeg",
  twitchChannel: "https://www.twitch.tv/scaramangado",
};

const matttInTheHat = {
  id: "VXY0eABdn7oLKPnz",
  roles: [Role.Entrant],
  name: "MatttInTheHat",
  avatar: websiteSettings.DEFAULT_AVATAR,
  twitchChannel: "https://www.twitch.tv/matttinthehat",
};

const exodus = {
  id: "ZbpNAaBvn5BJkg04",
  roles: [Role.Entrant],
  name: "Exodus",
  avatar: websiteSettings.DEFAULT_AVATAR,
  twitchChannel: "https://www.twitch.tv/matttinthehat",
};

export const mockScheduledMatches: ScheduledMatch[] = [
  {
    id: "m1",
    entrants: [
      {
        user: fleush,
      },
      {
        user: matttInTheHat,
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-02T19:45:03Z"),
    round: "Round 1",
    restreamChannel: "xwillmarktheplace",
  },
  {
    id: "m2",
    entrants: [
      {
        user: xwillmarktheplace,
      },
      {
        user: scaramanga,
      },
    ],
    scheduledTime: DateTime.fromISO("2023-01-01T04:45:03Z"),
    round: "Round 1",
    restreamChannel: "ZeldaSpeedruns",
  },
  {
    id: "m3",
    entrants: [
      {
        user: juwk,
      },
      {
        user: jenslang,
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-04T22:30:03Z"),
    round: "Round 1",
  },
  {
    id: "m4",
    entrants: [
      {
        user: scaramanga,
      },
      {
        user: jenslang,
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-07T12:45:03Z"),
    round: "Round 1",
  },
  {
    id: "m5",
    entrants: [
      {
        user: juwk,
      },
      {
        user: jenslang,
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-04T03:30:03Z"),
    round: "Round 1",
  },
  {
    id: "m6",
    entrants: [
      {
        user: xwillmarktheplace,
      },
      {
        user: juwk,
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
        user: fleush,
      },
      {
        user: matttInTheHat,
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
          id: "wdm1LPWjGABEnVx6",
          roles: [Role.Entrant],
          name: "xwillmarktheplace",
          avatar: "https://racetime.gg/media/Racetime.png",
          twitchChannel: "https://www.twitch.tv/xwillmarktheplace",
        },
      },
      {
        user: scaramanga,
      },
    ],
    round: "Round 1",
    restreamChannel: "ZeldaSpeedruns",
  },
  {
    id: "u3",
    entrants: [
      {
        user: juwk,
      },
      {
        user: jenslang,
      },
    ],
    round: "Round 1",
  },
  {
    id: "u4",
    entrants: [{ user: scaramanga }, { user: jenslang }],
    round: "Round 1",
  },
];

export const mockMatchResults: MatchResult[] = [
  {
    id: "r1",
    entrants: [
      {
        user: fleush,
        result: {
          resultStatus: "win",
          hasForfeited: false,
          finishTime: 4976,
          rank: 1,
          racetimeRank: 1,
        },
      },
      {
        user: matttInTheHat,
        result: {
          resultStatus: "loss",
          hasForfeited: true,
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-02T19:45:03Z"),
    round: "Round 1",
    restreamChannel: "xwillmarktheplace",
  },
  {
    id: "r2",
    entrants: [
      {
        user: xwillmarktheplace,
        result: {
          resultStatus: "win",
          hasForfeited: false,
          finishTime: 4511,
          rank: 1,
          racetimeRank: 1,
        },
      },
      {
        user: scaramanga,
        result: {
          resultStatus: "loss",
          hasForfeited: false,
          finishTime: 4739,
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-04T04:45:03Z"),
    round: "Round 1",
    restreamChannel: "ZeldaSpeedruns",
  },
  {
    id: "r3",
    entrants: [
      {
        user: juwk,
        result: {
          resultStatus: "win",
          hasForfeited: false,
          finishTime: 4497,
          rank: 1,
          racetimeRank: 1,
        },
      },
      {
        user: jenslang,
        result: {
          resultStatus: "loss",
          hasForfeited: false,
          finishTime: 4497,
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-04T22:30:03Z"),
    round: "Round 1",
  },
  {
    id: "r4",
    entrants: [
      {
        user: scaramanga,
        result: {
          resultStatus: "win",
          hasForfeited: false,
          finishTime: 4710,
          rank: 1,
          racetimeRank: 1,
        },
      },

      {
        user: jenslang,
        result: {
          resultStatus: "loss",
          hasForfeited: false,
          finishTime: 4756,
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-07T12:45:03Z"),
    round: "Round 1",
  },
  {
    id: "r5",
    entrants: [
      {
        user: scaramanga,
        result: {
          resultStatus: "win",
          hasForfeited: false,
          finishTime: 4610,
          rank: 1,
          racetimeRank: 1,
        },
      },
      {
        user: jenslang,
        result: {
          resultStatus: "loss",
          hasForfeited: false,
          finishTime: 4766,
          rank: 2,
          racetimeRank: 2,
        },
      },
    ],
    scheduledTime: DateTime.fromISO("2023-02-14T12:45:03Z"),
    round: "Round 2",
  },
];

export const mockAllUsers: User[] = [
  xwillmarktheplace,
  jenslang,
  fleush,
  scaramanga,
  juwk,
  matttInTheHat,
  exodus,
];

export const mockAllMatches = [
  ...mockUnscheduledMatches,
  ...mockScheduledMatches,
  ...mockMatchResults,
];

export const mockLoggedInUser: User = xwillmarktheplace;
