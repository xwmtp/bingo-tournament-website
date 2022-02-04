import React from "react";
import styled from "styled-components";
import { ScheduledMatch } from "../../domain/Schedule";
import { DateTime } from "luxon";

interface Props {
  match: ScheduledMatch;
}

export const ScheduledMatchBlock: React.FC<Props> = ({ match }) => {
  return (
    <Match>
      <StartTime>
        <p>{match.startTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
      </StartTime>
      <Entrants>
        <p>{match.entrant1}</p>
        <p>{match.entrant2}</p>
      </Entrants>
      <Round>
        <p>{match.round}</p>
      </Round>
    </Match>
  );
};

const Match = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #535959;
  border-radius: 10px;
  padding: 10px 0px;
  margin-top: 12px;
`;

const Entrants = styled.div`
  min-width: 250px;

  p {
    font-size: 18px;
    margin: 5px 0px;
  }
`;

const StartTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 120px;
  width: fit-content;
  margin: 0 10px;
  font-size: 22px;
  font-weight: 600;
`;

const Round = styled.div`
  min-width: 250px;
`;
