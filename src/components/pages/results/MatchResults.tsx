import React from "react";
import { MatchResult, sortByScheduledTime } from "../../../domain/Match";
import { ResultBlock } from "./ResultBlock";
import { NothingToDisplay } from "../../general/NothingToDisplay";

interface Props {
  results: MatchResult[];
}

export const MatchResults: React.FC<Props> = ({ results }) => {
  if (results.length === 0) {
    return (
      <NothingToDisplay>
        <p>No recorded results yet.</p>
      </NothingToDisplay>
    );
  }

  const sortedResults = sortByScheduledTime(results, true);

  return (
    <>
      {sortedResults.map((result) => {
        return <ResultBlock key={result.id} result={result} />;
      })}
    </>
  );
};
