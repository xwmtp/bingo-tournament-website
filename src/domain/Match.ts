import { DateTime } from "luxon";
import { Entrant, EntrantWithResult } from "./Entrant";

export interface Match<T extends Entrant> {
  id: string;
  entrants: T[];
  round?: string;
  restreamChannel?: string;
}

interface Scheduled {
  scheduledTime: DateTime;
}

export interface UnscheduledMatch extends Match<Entrant> {}

export interface ScheduledMatch extends Match<Entrant>, Scheduled {}

export interface MatchResult extends Match<EntrantWithResult>, Scheduled {}

export function isScheduled(match: any): match is Scheduled {
  return !!match.scheduledTime;
}

export function includesEntrant<T extends Entrant>(
  match: Match<T>,
  id: string
): boolean {
  return match.entrants.some((entrant) => entrant.user.id === id);
}