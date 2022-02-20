import { DateTime } from "luxon";

export class ScheduledMatch {
  constructor(
    public readonly entrant1: string,
    public readonly entrant2: string,
    public readonly startTime: DateTime,
    public readonly round?: string,
    public readonly restreamChannel?: string
  ) {}

  includesEntrant(entrant: string) {
    return this.entrant1 === entrant || this.entrant2 === entrant;
  }
}
