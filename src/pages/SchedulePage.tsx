import { Container } from "../components/Container";
import React from "react";
import { useScheduledMatches } from "../api/matchesApi";
import { NothingToDisplay } from "../components/general/NothingToDisplay";

export const SchedulePage: React.FC = () => {
  const { data: scheduledMatches, isError } = useScheduledMatches();

  const title = "Schedule";

  if (isError) {
    return (
      <Container title={title}>
        <NothingToDisplay>An error occurred while loading the data.</NothingToDisplay>
      </Container>
    );
  }

  if (!scheduledMatches || scheduledMatches.length === 0) {
    return (
      <Container title={title}>
        <NothingToDisplay>There are no current scheduled matches.</NothingToDisplay>
      </Container>
    );
  }

  return (
    <Container title={title}>
      <NothingToDisplay>There are no current scheduled matches.</NothingToDisplay>
    </Container>
  );
};
