import React from "react";
import { UserDisplay } from "../../../UserDisplay";
import styled from "styled-components";
import { useAllEntrants } from "../../../../api/entrantsApi";

export const AllEntrants: React.FC = () => {
  const { data, isLoading, isError, isIdle } = useAllEntrants();

  if (isLoading || isIdle) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>Could not load entrants</p>;
  }

  const sortedEntrants = data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <AllEntrantsDiv>
      <p>Total entrants: {sortedEntrants.length}</p>
      <EntrantsList>
        {sortedEntrants.map((entrant) => (
          <UserDisplay key={entrant.id} user={entrant} />
        ))}
      </EntrantsList>
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
  margin-top: 1.2rem;
`;
