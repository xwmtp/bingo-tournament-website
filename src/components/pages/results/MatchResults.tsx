import React from "react";
import { MatchResult } from "../../../domain/Match";
import { ResultBlock } from "./ResultBlock";

interface Props {
  results: MatchResult[];
}

export const MatchResults: React.FC<Props> = ({ results }) => {
  return (
    <>
      {results.map((result) => {
        return <ResultBlock key={result.id} result={result} />;
      })}
    </>
  );
};
