import React, { useMemo } from "react";
import { UserDisplay } from "../../../UserDisplay";
import styled from "styled-components";
import { useAllEntrants } from "../../../../api/entrantsApi";
import { Spinner } from "../../../general/Spinner";
import { Button } from "../../../forms/Button";
import { useMatchResults } from "../../../../api/matchesApi";
import { useRacetimeLeaderboard } from "../../../../api/racetimeLeaderboardApi";
import { toLeaderboardEntries, toPairingEntries } from "../../../../domain/Leaderboard";
import { DateTime } from "luxon";

export const AllEntrants: React.FC = () => {
  const { data: allEntrants, isLoading, isError, isIdle } = useAllEntrants();
  const { data: matchResults } = useMatchResults();
  const { data: racetimeLeaderboard } = useRacetimeLeaderboard();

  const pairingEntries = useMemo(() => {
    if (allEntrants && matchResults) {
      const entries = toLeaderboardEntries(allEntrants, matchResults, racetimeLeaderboard);
      return toPairingEntries(entries);
    }
    return [];
  }, [allEntrants, matchResults, racetimeLeaderboard]);

  if (isLoading || isIdle) {
    return <Spinner size="small" />;
  }
  if (isError) {
    return <p>Could not load entrants</p>;
  }

  const sortedEntrants = allEntrants.sort((a, b) => a.name.localeCompare(b.name));

  const downloadPairingEntries = () => {
    const text = JSON.stringify(pairingEntries, null, 1);
    const fileName = `entrants_${DateTime.local(DateTime.DATETIME_SHORT)}.json`;

    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <AllEntrantsDiv>
      <p>Total entrants: {sortedEntrants.length}</p>
      <EntrantsList>
        {sortedEntrants.map((entrant) => (
          <UserDisplayStyled key={entrant.id} user={entrant} />
        ))}
      </EntrantsList>

      <JsonButton
        disabled={pairingEntries.length === 0}
        color="brightMossGreen"
        onClick={() => pairingEntries.length > 0 && downloadPairingEntries()}
      >
        Download json
      </JsonButton>
    </AllEntrantsDiv>
  );
};

const AllEntrantsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const EntrantsList = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const UserDisplayStyled = styled(UserDisplay)`
  margin-top: 0.7rem;
`;

const JsonButton = styled(Button)`
  margin-top: 0.7rem;
  width: 7.5rem;
`;
