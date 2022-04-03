import React from "react";
import styled from "styled-components";
import { MatchResult } from "../../domain/Match";
import { FlexDiv } from "../divs/FlexDiv";
import { Colors, ScreenWidths } from "../../GlobalStyle";
import { UserDisplay } from "../UserDisplay";
import { EntrantWithResult, getResultString } from "../../domain/Entrant";
import { RacetimeButton } from "../forms/buttons/RacetimeButton";
import { TwitchButton } from "../forms/buttons/TwitchButton";

interface Props {
  result: MatchResult;
}

export const ResultBlock: React.FC<Props> = ({ result }) => {
  const entrant1 = result.entrants[0];
  const entrant2 = result.entrants[1];

  return (
    <ResultBlockContainer>
      <Entrants>
        <ResultRow entrant={entrant1} />
        <ResultRow entrant={entrant2} />
      </Entrants>

      <ButtonsDiv>
        <TwitchButtonStyled
          text="Restream"
          url={
            result.restreamChannel &&
            "https://www.twitch.tv/" + result.restreamChannel
          }
        />

        <RacetimeButtonStyled
          text="racetime.gg"
          url={"https://www.racetime.gg/oot/" + result.id}
        />
      </ButtonsDiv>
    </ResultBlockContainer>
  );
};

export const ResultRow: React.FC<{ entrant: EntrantWithResult }> = ({
  entrant,
}) => {
  return (
    <EntrantResult>
      <Rank>{`${entrant.result.rank}.`}</Rank>
      <UserDisplay user={entrant.user} />

      <RaceResult>{getResultString(entrant.result)}</RaceResult>
    </EntrantResult>
  );
};

const ResultBlockContainer = styled(FlexDiv)`
  justify-content: space-between;
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  padding: 10px 60px;
  margin-top: 12px;
  @media (max-width: ${ScreenWidths.tablet}px) {
    padding: 10px 20px;
  }
`;

const EntrantResult = styled.div`
  display: flex;
  flex-direction: row;
`;

const Entrants = styled.div`
  min-width: 14rem;

  p {
    font-size: 1.1rem;
    margin: 5px 0;
  }
`;

const Rank = styled(FlexDiv)`
  margin-right: 14px;
`;

const RaceResult = styled(FlexDiv)`
  margin-left: 30px;
  @media (max-width: ${ScreenWidths.tablet}px) {
    margin-left: 5px;
  }
`;

const ButtonsDiv = styled(FlexDiv)`
  flex-direction: column;
  margin: 0 10px;
`;

const RacetimeButtonStyled = styled(RacetimeButton)`
  margin-top: 8px;
  width: 100%;
`;

const TwitchButtonStyled = styled(TwitchButton)`
  width: 100%;
`;
