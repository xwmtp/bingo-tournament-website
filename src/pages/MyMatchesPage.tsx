import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { ScheduledMatches } from "../components/schedule/ScheduledMatches";
import {
  mockScheduledMatches,
  mockUnscheduledMatches,
} from "../domain/MockData";
import { UnscheduledMatches } from "../components/schedule/UnscheduledMatches";
import { includesEntrant } from "../domain/Match";
import { useQuery } from "react-query";
import { User } from "../domain/User";
import { getUser } from "../api/userApi";

export const MyMatchesPage: React.FC = () => {
  // const [matches, setMatches] = useState<ScheduledMatch[] | undefined>(
  //   undefined
  // );
  const userQuery = useQuery<User | undefined, Error>("user", getUser);
  const user = userQuery.isSuccess ? userQuery.data : undefined;

  const userScheduledMatches = mockScheduledMatches.filter((match) =>
    includesEntrant(match, user?.id || "")
  );
  const userUnscheduledMatches = mockUnscheduledMatches.filter((match) =>
    includesEntrant(match, user?.id || "")
  );

  return (
    <ProfilePageDiv>
      <Container title={"Unscheduled"} size="small">
        <UnscheduledMatches matches={userUnscheduledMatches} />
      </Container>
      <Container title={"Scheduled"} size="small">
        <ScheduledMatches matches={userScheduledMatches} />
      </Container>
    </ProfilePageDiv>
  );
};

const ProfilePageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
