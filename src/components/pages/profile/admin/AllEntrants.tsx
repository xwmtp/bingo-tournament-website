import React from "react";
import { UserDisplay } from "../../../UserDisplay";
import styled from "styled-components";
import { useAllEntrants } from "../../../../api/entrantsApi";
import { Spinner } from "../../../general/Spinner";

export const AllEntrants: React.FC = () => {
  const { data, isLoading, isError, isIdle } = useAllEntrants();

  if (isLoading || isIdle) {
    return <Spinner size="small" />;
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
          <UserDisplayStyled key={entrant.id} user={entrant} />
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
`;

const UserDisplayStyled = styled(UserDisplay)`
  margin-top: 0.7rem;
`;
