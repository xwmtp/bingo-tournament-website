import React from "react";
import styled from "styled-components";
import { includesEntrant, MatchResult } from "../../../domain/Match";
import { FlexDiv } from "../../divs/FlexDiv";
import { Colors, ScreenWidths } from "../../../GlobalStyle";
import { UserDisplay } from "../../UserDisplay";
import { EntrantWithResult, getResultString } from "../../../domain/Entrant";
import { RacetimeButton } from "../../forms/buttons/RacetimeButton";
import { TwitchButton } from "../../forms/buttons/TwitchButton";
import { tournamentSettings } from "../../../TournamentSetings";
import { useUser } from "../../../api/userApi";
import { Block } from "../../Block";

interface Props {
  result: MatchResult;
  highlightUser?: boolean;
}

export const ResultBlock: React.FC<Props> = ({ result, highlightUser }) => {
  const { data: user } = useUser();

  return (
    <ResultBlockContainer
      $displayAsLoggedInUser={!!highlightUser && !!user && includesEntrant(result, user.id)}
    >
      <Entrants>
        {result.entrants.map((entrant) => (
          <ResultRow key={result.id + entrant.user.id} entrant={entrant} />
        ))}
      </Entrants>

      <ButtonsDiv>
        <TwitchButtonStyled
          text="Restream"
          url={result.restreamChannel && "https://www.twitch.tv/" + result.restreamChannel}
        />

        <RacetimeButtonStyled
          text="racetime.gg"
          url={`https://www.racetime.gg/${tournamentSettings.RACETIME_CATEGORY}/${result.id}`}
        />
      </ButtonsDiv>
    </ResultBlockContainer>
  );
};

export const ResultRow: React.FC<{ entrant: EntrantWithResult }> = ({ entrant }) => {
  return (
    <EntrantResult>
      <RankAndUser>
        <Rank>{entrant.result.rank}</Rank>
        <UserDisplay user={entrant.user} />
      </RankAndUser>

      <RaceResult>{getResultString(entrant.result)}</RaceResult>
    </EntrantResult>
  );
};

const ResultBlockContainer = styled(Block)<{
  $displayAsLoggedInUser: boolean;
}>`
  justify-content: space-between;
  background-color: ${({ $displayAsLoggedInUser }) =>
    $displayAsLoggedInUser ? Colors.brightGrey : Colors.lightGray};
`;

const EntrantResult = styled.div`
  display: flex;
  flex-direction: row;
`;

const Entrants = styled.div`
  min-width: 14rem;

  p {
    font-size: 1.1rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
`;

const RaceResult = styled(FlexDiv)`
  margin-left: 1.8rem;
  @media (max-width: ${ScreenWidths.tablet}px) {
    margin-left: 0.3rem;
  }
`;

const ButtonsDiv = styled(FlexDiv)`
  flex-direction: column;
`;

const RacetimeButtonStyled = styled(RacetimeButton)`
  margin-top: 0.5rem;
  width: 100%;
`;

const TwitchButtonStyled = styled(TwitchButton)`
  width: 100%;
`;

const RankAndUser = styled(FlexDiv)`
  justify-content: flex-start;
`;

const Rank = styled.p`
  margin-right: 1.5rem;
  text-align: center;
  min-width: 2rem;
`;
