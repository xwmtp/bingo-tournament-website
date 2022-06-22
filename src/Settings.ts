export const tournamentSettings = {
  RACETIME_CATEGORY: "oot",
  FORFEIT_TIME: 4 * 3600,
} as const;

export const websiteSettings = {
  DEFAULT_AVATAR:
    "https://github.com/xwmtp/bingo2022/blob/assets/images/avatars/neutralAvatar.png?raw=true",
  LOGIN_URL: "https://bingo-tournament.scaramangado.de/login/racetime",
  BACKEND_URL: "https://bingo-tournament.scaramangado.de/api",
  //LOGIN_URL: "localhost:8000/login/racetime",
  //BACKEND_URL: undefined,
} as const;
