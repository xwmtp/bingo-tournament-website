import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { ScheduledMatches } from "../components/pages/profile/schedule/ScheduledMatches";
import { mockMatchResults, mockScheduledMatches, mockUnscheduledMatches } from "../domain/MockData";
import { UnscheduledMatches } from "../components/pages/profile/schedule/UnscheduledMatches";
import { includesEntrant, isFinished } from "../domain/Match";
import { useQuery } from "react-query";
import { User } from "../domain/User";
import { getUser } from "../api/userApi";
import { FlexDiv } from "../components/divs/FlexDiv";
import { MatchResults } from "../components/pages/results/MatchResults";
import { MatchesByDate } from "../components/MatchesByDate";

export const MyMatchesPage: React.FC = () => {
  // const [matches, setMatches] = useState<ScheduledMatch[] | undefined>(
  //   undefined
  // );
  const userQuery = useQuery<User | undefined, Error>("user", getUser);
  const user = userQuery.isSuccess ? userQuery.data : undefined;

  const myResults = mockMatchResults.filter((match) => includesEntrant(match, user?.id || ""));
  // assuming scheduledMatches does not include results
  const myScheduledMatches = mockScheduledMatches.filter((match) =>
    includesEntrant(match, user?.id || "")
  );
  const myUnscheduledMatches = mockUnscheduledMatches.filter((match) =>
    includesEntrant(match, user?.id || "")
  );
  const myUnrecordedMatches = myScheduledMatches.filter(isFinished);

  const hasUnscheduledMatches = myUnscheduledMatches.length > 0;
  const hasScheduledMatches = myScheduledMatches.length > 0;
  const hasUnrecordedMatches = myUnrecordedMatches.length > 0;
  const hasResults = myResults.length > 0;
  const noMatchesToDisplay =
    !hasUnscheduledMatches && !hasScheduledMatches && !hasUnrecordedMatches && !hasResults;

  if (noMatchesToDisplay && !userQuery.isLoading) {
    return (
      <Container size="small">
        <NoMatches>No matches to display</NoMatches>
      </Container>
    );
  }

  return (
    <ProfilePageDiv>
      {hasUnrecordedMatches && (
        <Container title={"Unrecorded"} size="small">
          <MatchesByDate scheduledMatches={myUnrecordedMatches} />;
        </Container>
      )}
      {hasUnscheduledMatches && (
        <Container title={"Unscheduled"} size="small">
          <UnscheduledMatches matches={myUnscheduledMatches} />
        </Container>
      )}
      {hasScheduledMatches && (
        <Container title={"Scheduled"} size="small">
          <ScheduledMatches matches={myScheduledMatches} />
        </Container>
      )}
      {hasResults && (
        <Container title={"Results"} size="small">
          <MatchResults results={myResults} />
        </Container>
      )}
    </ProfilePageDiv>
  );
};

const ProfilePageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;

const NoMatches = styled(FlexDiv)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
