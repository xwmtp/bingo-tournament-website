import React from "react";
import { mockAllUsers } from "../../../domain/MockData";
import { EntrantDisplay } from "../../EntrantDisplay";
import styled from "styled-components";

export const AllEntrants: React.FC = () => {
  const sortedUsers = mockAllUsers.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <AllEntrantsDiv>
      <p>Total entrants: {sortedUsers.length}</p>
      <EntrantsList>
        {sortedUsers.map((user) => (
          <EntrantDisplay key={user.id} entrant={user} />
        ))}
      </EntrantsList>
    </AllEntrantsDiv>
  );
};

const AllEntrantsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const EntrantsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
`;
