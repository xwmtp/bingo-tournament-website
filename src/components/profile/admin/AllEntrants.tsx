import React from "react";
import { UserDisplay } from "../../UserDisplay";
import styled from "styled-components";
import { User } from "../../../domain/User";
import { useQuery } from "react-query";
import { getAllEntrants } from "../../../api/entrantsApi";

export const AllEntrants: React.FC = () => {
  const { data, isLoading, isError } = useQuery<User[], Error>("allEntrants", getAllEntrants);

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>Could not load entrants</p>;
  }

  const allEntrants = data ?? [];

  const sortedEntrants = allEntrants.sort((a, b) => a.name.localeCompare(b.name));

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
