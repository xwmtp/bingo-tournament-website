import { DateTime } from "luxon";
import { User } from "./User";

export class UnscheduledMatch {
  constructor(
    public readonly id: string,
    public readonly entrant1: User,
    public readonly entrant2: User,
    public readonly round?: string,
    public readonly restreamChannel?: string
  ) {}

  includesEntrant(id: string): boolean {
    return this.entrant1.id === id || this.entrant2.id === id;
  }
}

export class ScheduledMatch extends UnscheduledMatch {
  constructor(
    id: string,
    entrant1: User,
    entrant2: User,
    public readonly startTime: DateTime,
    round?: string,
    restreamChannel?: string
  ) {
    super(id, entrant1, entrant2, round, restreamChannel);
  }
}

export function isScheduled(
  match: UnscheduledMatch | ScheduledMatch
): match is ScheduledMatch {
  return match instanceof ScheduledMatch;
}
