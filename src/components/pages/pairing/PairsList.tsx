import React from "react";
import { PairBlock } from "./PairBlock";
import { Pair } from "../../../domain/Pair";

interface Props {
  pairs: Pair[];
  numberOfVisiblePairs: number;
}

export const PairsList: React.FC<Props> = ({ pairs, numberOfVisiblePairs }) => {
  return (
    <>
      {pairs.map((pair, i) => (
        <PairBlock key={i} pair={pair} isVisible={i < numberOfVisiblePairs} />
      ))}
    </>
  );
};
