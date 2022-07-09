import React, { useMemo } from "react";
import { useUser } from "../api/userApi";
import { isAdmin } from "../domain/User";
import { NothingToDisplay } from "../components/general/NothingToDisplay";
import { useAllEntrants } from "../api/entrantsApi";
import { Container } from "../components/Container";
import { useMatchResults } from "../api/matchesApi";
import { toLeaderboardEntries } from "../domain/Leaderboard";
import { PairEntry } from "../components/pages/pairing/PairBlock";
import styled from "styled-components";
import { FlexDiv } from "../components/divs/FlexDiv";
import { Margins } from "../GlobalStyle";
import { PairsList } from "../components/pages/pairing/PairsList";

export const PairingPage: React.FC = () => {
  const { data: user } = useUser();
  const { data: allEntrants } = useAllEntrants();
  const { data: matchResults } = useMatchResults();

  const sortedEntries = useMemo(() => {
    if (allEntrants && matchResults) {
      return toLeaderboardEntries(allEntrants, matchResults);
    }
    return [];
  }, [allEntrants, matchResults]);

  if (!user || !isAdmin(user)) {
    return (
      <Container>
        <NothingToDisplay>This page is admin only.</NothingToDisplay>
      </Container>
    );
  }

  if (!allEntrants || !matchResults) {
    return (
      <Container>
        <NothingToDisplay>No entrants found.</NothingToDisplay>
      </Container>
    );
  }

  const rawPairs = [
    [
      {
        id: "vrZyM4orqE3qDJX0",
        points: 0,
        tourney_points: 0,
        seed: 577,
      },
    ],
    [
      {
        id: "d17DexWEKg3ak64R",
        points: 1,
        tourney_points: 0,
        seed: 943,
      },
      {
        id: "pRbOXG3ykOWZVKq1",
        points: 1,
        tourney_points: 0,
        seed: 587,
      },
    ],
    [
      {
        id: "rZyM4orRvRoqDJX0",
        points: 1,
        tourney_points: 0,
        seed: 857,
      },
      {
        id: "XGzr7pBMny3kqgyE",
        points: 1,
        tourney_points: 0,
        seed: 608,
      },
    ],
    [
      {
        id: "wdm1LPWjGABEnVx6",
        points: 1,
        tourney_points: 0,
        seed: 806,
      },
      {
        id: "VXY0eABdn7oLKPnz",
        points: 1,
        tourney_points: 0,
        seed: 609,
      },
    ],
    [
      {
        id: "ZbpNAaBvn5BJkg04",
        points: 1,
        tourney_points: 0,
        seed: 805,
      },
      {
        id: "ZVa0eMonnbol9pyJ",
        points: 1,
        tourney_points: 0,
        seed: 646,
      },
    ],
    [
      {
        id: "Va0eMongz6Wl9pyJ",
        points: 1,
        tourney_points: 0,
        seed: 798,
      },
      {
        id: "xldAMBl4A4BaOP57",
        points: 1,
        tourney_points: 0,
        seed: 648,
      },
    ],
    [
      {
        id: "kzM65aWX6b31y8q0",
        points: 1,
        tourney_points: 0,
        seed: 772,
      },
      {
        id: "vrZyM4orbEoqDJX0",
        points: 1,
        tourney_points: 0,
        seed: 673,
      },
    ],
    [
      {
        id: "JN9rVpW9eRWjq8Ll",
        points: 1,
        tourney_points: 0,
        seed: 756,
      },
      {
        id: "5rNGD3DKVaB9blOy",
        points: 1,
        tourney_points: 0,
        seed: 677,
      },
    ],
    [
      {
        id: "jQbq4dBp7yWvlrG0",
        points: 1,
        tourney_points: 0,
        seed: 750,
      },
      {
        id: "kzM65aWXgxo1y8q0",
        points: 1,
        tourney_points: 0,
        seed: 685,
      },
    ],
    [
      {
        id: "7lYZa5B5eZB2Vwv9",
        points: 1,
        tourney_points: 0,
        seed: 747,
      },
      {
        id: "LxldAMBlnboaOP57",
        points: 1,
        tourney_points: 0,
        seed: 686,
      },
    ],
    [
      {
        id: "rZyM4orRvRoqDJX0",
        points: 1,
        tourney_points: 0,
        seed: 717,
      },
      {
        id: "JXzVwZWqElW5k8eb",
        points: 1,
        tourney_points: 0,
        seed: 690,
      },
    ],
    [
      {
        id: "ZVa0eMonnbol9pyJ",
        points: 0,
        tourney_points: 0,
        seed: 551,
      },
      {
        id: "NX5783Jbkl3qlL0a",
        points: 0,
        tourney_points: 0,
        seed: 3,
      },
    ],
    [
      {
        id: "R8QGZrB2k03Ngk4V",
        points: 0,
        tourney_points: 0,
        seed: 539,
      },
      {
        id: "dm1LPWjZLLWEnVx6",
        points: 0,
        tourney_points: 0,
        seed: 48,
      },
    ],
    [
      {
        id: "Ek8wpok9GkB5KQyV",
        points: 0,
        tourney_points: 0,
        seed: 533,
      },
      {
        id: "aGklxjWzQvoLPdye",
        points: 0,
        tourney_points: 0,
        seed: 100,
      },
    ],
    [
      {
        id: "VXY0eABdn7oLKPnz",
        points: 0,
        tourney_points: 0,
        seed: 526,
      },
      {
        id: "52QE8oNlGXBlywqX",
        points: 0,
        tourney_points: 0,
        seed: 175,
      },
    ],
    [
      {
        id: "wezlNoA4443mq6db",
        points: 0,
        tourney_points: 0,
        seed: 525,
      },
      {
        id: "VXY0eABddNBLKPnz",
        points: 0,
        tourney_points: 0,
        seed: 327,
      },
    ],
    [
      {
        id: "Ek8wpokQQ7B5KQyV",
        points: 0,
        tourney_points: 0,
        seed: 509,
      },
      {
        id: "b8GPMWwQvO31nEk0",
        points: 0,
        tourney_points: 0,
        seed: 336,
      },
    ],
    [
      {
        id: "LNY0OkW1OP3KalP1",
        points: 0,
        tourney_points: 0,
        seed: 493,
      },
      {
        id: "lYZa5B5pLPW2Vwv9",
        points: 0,
        tourney_points: 0,
        seed: 351,
      },
    ],
    [
      {
        id: "VXY0eABd6boLKPnz",
        points: 0,
        tourney_points: 0,
        seed: 486,
      },
      {
        id: "wdm1LPWjyeoEnVx6",
        points: 0,
        tourney_points: 0,
        seed: 370,
      },
    ],
    [
      {
        id: "yMewn83V89W405Jv",
        points: 0,
        tourney_points: 0,
        seed: 468,
      },
      {
        id: "Ek8wpok9KVB5KQyV",
        points: 0,
        tourney_points: 0,
        seed: 372,
      },
    ],
  ];

  const pairs = rawPairs
    .map((pair) =>
      pair
        .map((pairUser) => {
          const leaderboardEntry = sortedEntries.find((entry) => entry.user.id === pairUser.id);
          if (!leaderboardEntry) {
            return undefined;
          }
          return {
            pairPoints: pairUser.points,
            pairTourneyPoints: pairUser.tourney_points,
            pairSeed: pairUser.seed,
            leaderboardEntry: leaderboardEntry,
          };
        })
        .filter((entrant): entrant is PairEntry => !!entrant)
    )
    .filter((pair) => pair.length > 0);

  return (
    <Page>
      <PairsContainer width={"69%"}>
        <PairsList pairs={pairs} />
      </PairsContainer>
      <Container width={"29%"}>Hi</Container>
    </Page>
  );
};

const Page = styled(FlexDiv)`
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const PairsContainer = styled(Container)`
  margin-right: ${Margins.container}rem;
`;
