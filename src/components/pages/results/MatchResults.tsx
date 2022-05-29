import React from "react";
import { MatchResult } from "../../../domain/Match";
import { ResultBlock } from "./ResultBlock";
import { FlexDiv } from "../../divs/FlexDiv";
import styled from "styled-components";

interface Props {
  results: MatchResult[];
}

export const MatchResults: React.FC<Props> = ({ results }) => {
  if (results.length === 0) {
    return (
      <NoResults>
        <p>No recorded results yet.</p>
      </NoResults>
    );
  }

  const sortedResults = [...results].sort(
    (a, b) => b.scheduledTime.toMillis() - a.scheduledTime.toMillis()
  );

  return (
    <>
      {sortedResults.map((result) => {
        return <ResultBlock key={result.id} result={result} />;
      })}
    </>
  );
};

const NoResults = styled(FlexDiv)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
