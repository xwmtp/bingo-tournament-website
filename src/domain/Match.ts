import { DateTime, Duration } from "luxon";
import { Entrant, EntrantWithResult } from "./Entrant";
import { User } from "./User";

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

export function includesEntrant<T extends Entrant>(match: BaseMatch<T>, id: string): boolean {
  return match.entrants.some((entrant) => entrant.user.id === id);
}

export function isInProgress(match: ScheduledMatch): boolean {
  // todo: use DateTime.local()
  const now = DateTime.local(2022, 2, 1, 6, 10, 0);
  return match.scheduledTime < now && now < match.scheduledTime.plus(standardMatchDuration);
}

export function isFinished(match: ScheduledMatch): boolean {
  // todo: use DateTime.local()
  const now = DateTime.local(2022, 2, 1, 6, 10, 0);
  console.log("\n" + match.id);
  console.log(match.scheduledTime.plus(standardMatchDuration));
  console.log(now);
  console.log("is finished? " + (match.scheduledTime.plus(standardMatchDuration) < now));
  return match.scheduledTime.plus(standardMatchDuration) < now;
}

export function sortByScheduledTime<T extends Scheduled>(
  scheduledItems: T[],
  descending?: boolean
): T[] {
  return [...scheduledItems].sort((itemA, itemB) => {
    const difference = itemA.scheduledTime.toMillis() - itemB.scheduledTime.toMillis();
    if (descending) {
      return -difference;
    }
    return difference;
  });
}

export interface MatchToAdd {
  entrant1: User;
  entrant2: User;
  round: string;
}
