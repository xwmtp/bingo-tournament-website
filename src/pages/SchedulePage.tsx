import { Container } from "../components/Container";
import React from "react";
import { ScheduledMatches } from "../components/pages/profile/schedule/ScheduledMatches";
import { useScheduledMatches } from "../api/matchesApi";

export const SchedulePage: React.FC = () => {
  const { data: scheduledMatches } = useScheduledMatches();

  return (
    <Container title={"Schedule"}>
      {scheduledMatches && <ScheduledMatches matches={scheduledMatches} />}
    </Container>
  );
};
