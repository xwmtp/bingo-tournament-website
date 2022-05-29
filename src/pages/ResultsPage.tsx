import { Container } from "../components/Container";
import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";
import { TabSelector } from "../components/TabSelector";
import { mockMatchResults } from "../domain/MockData";
import { MatchResults } from "../components/pages/results/MatchResults";
import { onlyUnique } from "../lib/onlyUnique";
import { capitalize } from "../lib/stringHelpers";

export const ResultsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Round 1");

  if (!activeTab) {
    return <></>;
  }

  const uniqueRounds = mockMatchResults
    .map((result) => result.round?.toLowerCase())
    .filter((round): round is string => !!round)
    .filter(onlyUnique)
    .map((round) => capitalize(round));
  const tabMatches = mockMatchResults.filter((result) => result.round === activeTab);

  return (
    <Container title={"Results"}>
      <TabSelectorStyled
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabOptions={uniqueRounds}
        fontSize={"1rem"}
      />
      <MatchResults results={tabMatches} />
    </Container>
  );
};

const TabSelectorStyled = styled(TabSelector)`
  background-color: ${Colors.darkGrey};
  margin-bottom: 1.2rem;
`;
