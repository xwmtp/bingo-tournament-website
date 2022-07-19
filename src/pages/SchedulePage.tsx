import { Container } from "../components/Container";
import React from "react";
import { useScheduledMatches } from "../api/matchesApi";
import { NothingToDisplay } from "../components/general/NothingToDisplay";
import { ScheduledMatches } from "../components/pages/schedule/ScheduledMatches";
import { DateTime } from "luxon";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";

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

  if (!scheduledMatches) {
    return <Container title={title} />;
  }

  return (
    <Container title={title}>
      <Timezone>{`All times are displayed in your local timezone (${DateTime.local().toFormat(
        "ZZZZ"
      )})`}</Timezone>
      <ScheduledMatches matches={scheduledMatches} displayStatusOnMatchBlocks={true} />
    </Container>
  );
};

const Timezone = styled.p`
  font-size: 90%;
  margin-bottom: 0.7rem;
  color: ${Colors.brighterMossGreen};
`;
