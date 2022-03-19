import React, { useContext } from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { ScheduledMatches } from "../components/schedule/ScheduledMatches";
import {
  mockScheduledMatches,
  mockUnscheduledMatches,
} from "../domain/MockData";
import { UserContext } from "../App";
import { UnscheduledMatches } from "../components/schedule/UnscheduledMatches";
import { includesEntrant } from "../domain/Match";

export const MyMatchesPage: React.FC = () => {
  // const [matches, setMatches] = useState<ScheduledMatch[] | undefined>(
  //   undefined
  // );
  // const [loading, setLoading] = useState<boolean>(true);
  const userContext = useContext(UserContext);

  const userScheduledMatches = mockScheduledMatches.filter((match) =>
    includesEntrant(match, userContext.user?.id || "")
  );
  const userUnscheduledMatches = mockUnscheduledMatches.filter((match) =>
    includesEntrant(match, userContext.user?.id || "")
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
