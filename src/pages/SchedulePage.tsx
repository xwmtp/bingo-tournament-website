import { Container } from "../components/Container";
import React from "react";
import { ScheduledMatches } from "../components/pages/profile/schedule/ScheduledMatches";
import { mockScheduledMatches } from "../domain/MockData";

export const SchedulePage: React.FC = () => {
  return (
    <Container title={"Schedule"}>
      <ScheduledMatches matches={mockScheduledMatches} />
    </Container>
  );
};
