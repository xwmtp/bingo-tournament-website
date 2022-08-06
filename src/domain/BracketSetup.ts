import { User } from "./User";
import { mockAllUsers } from "./mocks/MockData";
import { MatchResult } from "./Match";
import { Entrant, hasResult } from "./Entrant";

const BRACKET_SIZES = [2, 4, 8, 16];

interface RawBracketSetup {
  roundNames: string[];
  firstRoundMatchUps: { player1Id: string; player2Id: string }[];
}

export type BracketSetup = BracketRound[];

export interface BracketRound {
  name: string;
  matchUps: MatchUp[];
}

interface MatchUp {
  player1?: Entrant;
  player2?: Entrant;
}

export const isFinishedMatchUp = (matchUp: MatchUp): boolean => {
  return (
    !!matchUp.player1 &&
    !!matchUp.player2 &&
    hasResult(matchUp?.player1) &&
    hasResult(matchUp?.player2)
  );
};

const validateRawBracketSetup = (rawBracketSetup: RawBracketSetup) => {
  const bracketEntrantsIds = rawBracketSetup.firstRoundMatchUps.flat();
  if (!BRACKET_SIZES.includes(bracketEntrantsIds.length)) {
    throw Error("Bracket has to have entrant size of " + BRACKET_SIZES.join(", "));
  }
  if (rawBracketSetup.firstRoundMatchUps.length !== rawBracketSetup.roundNames.length) {
    throw Error(
      `Length of first round matchups (${rawBracketSetup.firstRoundMatchUps.length}) has to match length of roundNames (${rawBracketSetup.roundNames.length})`
    );
  }
};

const toBracket = (
  rawBracketSetup: RawBracketSetup,
  allEntrants: User[],
  allResults: MatchResult[]
): BracketSetup => {
  validateRawBracketSetup(rawBracketSetup);

  const idToEntrant = (id: string): Entrant => {
    const matchingEntrant = allEntrants.find((entrant) => entrant.id === id);
    if (!matchingEntrant) {
      throw Error(`Could not find matching entrant for bracket entrant id ${id}`);
    }
    return { user: matchingEntrant };
  };

  const firstRound: BracketRound = {
    name: rawBracketSetup.roundNames[0],
    matchUps: rawBracketSetup.firstRoundMatchUps.map((matchUp) => ({
      player1: idToEntrant(matchUp.player1Id),
      player2: idToEntrant(matchUp.player2Id),
    })),
  };

  const rounds: BracketRound[] = [firstRound];
  let previousRound: BracketRound = firstRound;

  for (let i = 1; i < rawBracketSetup.roundNames.length; i++) {
    const roundName = rawBracketSetup.roundNames[i];
    const matchingResults = allResults.filter(
      (result) => result.round?.toLowerCase() === roundName.toLowerCase()
    );
    const roundLength = Math.floor(previousRound.matchUps.length / 2);
    for (let j = 0; j < roundLength; j++) {
      const previousMatchUoPlayer1 = previousRound.matchUps[j * 2];
      let player1 = undefined;
      if (isFinishedMatchUp(previousMatchUoPlayer1)) {
        const winnerPreviousMatchUp = previousMatchUoPlayer1.player1;
      }
    }
  }

  return [firstRound];
};

const rawBracketSetup: RawBracketSetup = {
  roundNames: ["Eighths", "Quarter", "Semis", "Finals"],
  firstRoundMatchUps: [
    { player1Id: mockAllUsers[0].id, player2Id: mockAllUsers[1].id },
    { player1Id: mockAllUsers[2].id, player2Id: mockAllUsers[3].id },
    { player1Id: mockAllUsers[4].id, player2Id: mockAllUsers[5].id },
    { player1Id: mockAllUsers[6].id, player2Id: mockAllUsers[7].id },
  ],
};

export const getBracketSetup = (allEntrants: User[], allResults: MatchResult[]): BracketSetup => {
  return toBracket(rawBracketSetup, allEntrants, allResults);
};
