import React, { useState } from "react";
import { Pair, PairBlock } from "./PairBlock";

interface Props {
  pairs: Pair[];
}

export const PairsList: React.FC<Props> = ({ pairs }) => {
  const [areVisible, setAreVisible] = useState<boolean[]>(Array(pairs.length).fill(false));

  const toggleIsVisible = (index: number) => {
    return () => {
      setAreVisible((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    };
  };

  return (
    <div>
      {pairs.map((pair, i) => (
        <PairBlock
          key={i}
          pair={pair}
          isVisible={areVisible[i]}
          toggleIsVisible={toggleIsVisible(i).bind(this)}
        />
      ))}
    </div>
  );
};
