import React from "react";
import styled from "styled-components";
import { MatchResult } from "../../domain/Match";
import { FlexDiv } from "../divs/FlexDiv";
import { Colors } from "../../GlobalStyle";
import { UserDisplay } from "../UserDisplay";
import { EntrantWithResult, getResultString } from "../../domain/Entrant";
import { RacetimeButton } from "../forms/RacetimeButton";
import { TwitchButton } from "../forms/TwitchButton";

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
        <StyledTwitchButton
          text="Restream"
          url={
            result.restreamChannel &&
            "https://www.twitch.tv/" + result.restreamChannel
          }
        />

        <ButtonMarginTop>
          <RacetimeButton
            text="racetime.gg"
            url={"https://www.racetime.gg/oot/" + result.id}
          />
        </ButtonMarginTop>
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
      <p>{getResultString(entrant.result)}</p>
    </EntrantResult>
  );
};

const ResultBlockContainer = styled(FlexDiv)`
  justify-content: space-between;
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  padding: 10px 50px;
  margin-top: 12px;
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

const ButtonsDiv = styled(FlexDiv)`
  flex-direction: column;
  margin: 0 10px;
`;

const ButtonMarginTop = styled.div`
  margin-top: 8px;
  width: 100%;
`;

const StyledTwitchButton = styled(TwitchButton)`
  width: 100%;
`;
