import React, { useEffect, useState } from "react";
import { UserDisplay } from "../../UserDisplay";
import styled from "styled-components";
import { User } from "../../../domain/User";
import { getApi } from "../../../api/api";

export const AllEntrants: React.FC = () => {
  const [allEntrants, setAllEntrants] = useState<User[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getApi()
      .getEntrants()
      .then((entrants) => setAllEntrants(entrants))
      .catch((error) => {
        console.debug(error);
        setAllEntrants(undefined);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }
  if (allEntrants === undefined) {
    return <p>Could not load entrants</p>;
  }

  const sortedEntrants = allEntrants.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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
  margin-top: 20px;
`;
