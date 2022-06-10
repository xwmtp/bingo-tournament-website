import { DateTime, Duration } from "luxon";
import { Entrant, EntrantWithResult, mapToEntrant } from "./Entrant";
import { User } from "./User";
import { Match as MatchDto } from "@xwmtp/bingo-tournament/dist/models/Match";

interface BaseMatch<T extends Entrant> {
  id: string;
  entrants: T[];
  round?: string;
  restreamChannel?: string;
  racetimeId?: string;
}

interface Scheduled {
  scheduledTime: DateTime;
}

export type Match = UnscheduledMatch | ScheduledMatch | MatchResult;

export interface UnscheduledMatch extends BaseMatch<Entrant> {}

export interface ScheduledMatch extends BaseMatch<Entrant>, Scheduled {}

export interface MatchResult extends BaseMatch<EntrantWithResult>, Scheduled {}

export interface MatchToAdd {
  entrant1: User;
  entrant2: User;
  round: string;
}

export const standardMatchDuration = Duration.fromObject({
  hours: 1,
  minutes: 10,
});

export function isScheduled(match: any): match is Scheduled {
  return !!match.scheduledTime;
}

export function isUnscheduledMatch(match: Match): match is UnscheduledMatch {
  return !isScheduled(match);
}

export function isScheduledMatch(match: Match): match is ScheduledMatch {
  return isScheduled(match) && !isMatchResult(match);
}

export function isMatchResult(match: Match): match is MatchResult {
  return match.entrants.length > 0 && match.entrants.every((entrant) => "result" in entrant);
}

export function includesEntrant<T extends Entrant>(match: BaseMatch<T>, id: string): boolean {
  return match.entrants.some((entrant) => entrant.user.id === id);
}

export function isInProgress(match: ScheduledMatch): boolean {
  const now = DateTime.local();
  return match.scheduledTime < now && now < match.scheduledTime.plus(standardMatchDuration);
}

export function isFinished(match: ScheduledMatch): boolean {
  const now = DateTime.local();
  return match.scheduledTime.plus(standardMatchDuration) < now;
}

export function isNotFinished(match: ScheduledMatch): boolean {
  return !isFinished(match);
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

export const mapToMatch = (matchDto: MatchDto): Match => {
  // todo calculate entrant ranks manually
  return {
    id: matchDto.id,
    entrants: matchDto.entrants.map((entrant) => mapToEntrant(entrant, matchDto.entrants)),
    round: matchDto.round,
    restreamChannel: matchDto.restreamChannel,
    racetimeId: matchDto.racetimeId,
    scheduledTime: matchDto.scheduledTime ? DateTime.fromJSDate(matchDto.scheduledTime) : undefined,
  };
};
