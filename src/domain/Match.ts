import { DateTime } from "luxon";
import { User } from "./User";

export class ScheduledMatch {
  constructor(
    public readonly entrant1: User,
    public readonly entrant2: User,
    public readonly startTime: DateTime,
    public readonly round?: string,
    public readonly restreamChannel?: string
  ) {}

  includesEntrant(entrant: User) {
    return this.entrant1.id === entrant.id || this.entrant2.id === entrant.id;
  }
}
