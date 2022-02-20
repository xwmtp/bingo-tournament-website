import { Container } from "../components/Container";
import React from "react";
import { ScheduledMatches } from "../components/schedule/ScheduledMatches";
import { mockMatches } from "../domain/MockData";

export const SchedulePage: React.FC = () => {
  return (
    <Container title={"Schedule"}>
      <ScheduledMatches matches={mockMatches} />
    </Container>
  );
};
