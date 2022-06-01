import React from "react";
import { MatchBlock } from "./pages/profile/schedule/MatchBlock";
import { includesEntrant, ScheduledMatch } from "../domain/Match";
import { groupBy } from "../lib/groupBy";
import styled from "styled-components";
import { useQuery } from "react-query";
import { User } from "../domain/User";
import { getUser } from "../api/userApi";

interface Props {
  scheduledMatches: ScheduledMatch[];
  displayStatusOnMatchBlock?: boolean;
}

export const MatchesByDate: React.FC<Props> = ({ scheduledMatches, displayStatusOnMatchBlock }) => {
  const { data, isSuccess } = useQuery<User | undefined, Error>("user", getUser);

  const user = isSuccess && data;

  const matchesByDate = groupBy(scheduledMatches, (match) =>
    match.scheduledTime
      .setLocale("en-us")
      .toLocaleString({ weekday: "long", month: "long", day: "numeric" })
  );

  return (
    <>
      {Object.keys(matchesByDate).map((formattedDate, index) => {
        return (
          <DateGroup key={formattedDate} $isFirst={index === 0}>
            <h3>{formattedDate}</h3>
            {matchesByDate[formattedDate].map((match) => (
              <MatchBlock
                key={match.id}
                match={match}
                editable={user ? includesEntrant(match, user.id) : false}
                displayStatus={displayStatusOnMatchBlock}
              />
            ))}
          </DateGroup>
        );
      })}
    </>
  );
};

const DateGroup = styled.div<{ $isFirst: boolean }>`
  margin-top: ${({ $isFirst }) => ($isFirst ? "0" : "1.2rem")};
`;
