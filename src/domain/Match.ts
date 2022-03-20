import { DateTime, Duration } from "luxon";
import { Entrant, EntrantWithResult } from "./Entrant";

interface BaseMatch<T extends Entrant> {
  id: string;
  entrants: T[];
  round?: string;
  restreamChannel?: string;
}

interface Scheduled {
  scheduledTime: DateTime;
}

export interface UnscheduledMatch extends BaseMatch<Entrant> {}

export interface ScheduledMatch extends BaseMatch<Entrant>, Scheduled {}

export interface MatchResult extends BaseMatch<EntrantWithResult>, Scheduled {}

export type Match = UnscheduledMatch | ScheduledMatch | MatchResult;

export const standardMatchDuration = Duration.fromObject({
  hours: 1,
  minutes: 10,
});

export function isScheduled(match: any): match is Scheduled {
  return !!match.scheduledTime;
}

export function includesEntrant<T extends Entrant>(
  match: BaseMatch<T>,
  id: string
): boolean {
  return match.entrants.some((entrant) => entrant.user.id === id);
}
