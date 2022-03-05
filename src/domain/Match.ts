import { DateTime } from "luxon";
import { User } from "./User";

export class Match {
  constructor(
    public readonly entrant1: User,
    public readonly entrant2: User,
    public readonly round?: string,
    public readonly restreamChannel?: string
  ) {}

  includesEntrant(id: string): boolean {
    return this.entrant1.id === id || this.entrant2.id === id;
  }
}

export class ScheduledMatch extends Match {
  constructor(
    entrant1: User,
    entrant2: User,
    public readonly startTime: DateTime,
    round?: string,
    restreamChannel?: string
  ) {
    super(entrant1, entrant2, round, restreamChannel);
  }
}

export function isScheduled(
  match: Match | ScheduledMatch
): match is ScheduledMatch {
  return match instanceof ScheduledMatch;
}
