import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { ScheduledMatches } from "../components/pages/profile/schedule/ScheduledMatches";
import { mockScheduledMatches, mockUnscheduledMatches } from "../domain/MockData";
import { UnscheduledMatches } from "../components/pages/profile/schedule/UnscheduledMatches";
import { includesEntrant } from "../domain/Match";
import { useQuery } from "react-query";
import { User } from "../domain/User";
import { getUser } from "../api/userApi";
import { FlexDiv } from "../components/divs/FlexDiv";

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

  const hasUnscheduledMatches = userUnscheduledMatches.length > 0;
  const hasScheduledMatches = userScheduledMatches.length > 0;
  const noMatchesToDisplay = !hasUnscheduledMatches && !hasScheduledMatches;

  return (
    <ProfilePageDiv>
      {hasUnscheduledMatches && (
        <Container title={"Unscheduled"} size="small">
          <UnscheduledMatches matches={userUnscheduledMatches} />
        </Container>
      )}
      {hasScheduledMatches && (
        <Container title={"Scheduled"} size="small">
          <ScheduledMatches matches={userScheduledMatches} />
        </Container>
      )}
      {noMatchesToDisplay && (
        <Container size="small">
          <NoMatches>No matches to display</NoMatches>
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
