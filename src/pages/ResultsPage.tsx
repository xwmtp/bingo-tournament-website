import { Container } from "../components/Container";
import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";
import { TabSelector } from "../components/TabSelector";
import { mockMatchResults } from "../domain/MockData";
import { MatchResults } from "../components/results/MatchResults";

export const ResultsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Round 1");

  if (!activeTab) {
    return <></>;
  }

  return (
    <>
      <Container title={"Results"}>
        <TabSelectorStyled
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabOptions={["Round 1", "Round 2"]}
          fontSize={"1rem"}
        />
        <MatchResults results={mockMatchResults} />
      </Container>
    </>
  );
};

const TabSelectorStyled = styled(TabSelector)`
  background-color: ${Colors.darkGrey};
  margin-bottom: 1.2rem;
`;
