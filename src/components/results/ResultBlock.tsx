import React from "react";
import styled from "styled-components";
import { MatchResult } from "../../domain/Match";
import { UrlButton } from "../forms/UrlButton";
import { IoLogoTwitch } from "react-icons/io";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";
import { Colors } from "../../GlobalStyle";
import { UserDisplay } from "../UserDisplay";
import { EntrantWithResult, getResultString } from "../../domain/Entrant";

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
        <UrlButton
          color={"twitchPurple"}
          url={
            result.restreamChannel &&
            "https://www.twitch.tv/" + result.restreamChannel
          }
        >
          <FlexDiv>
            <TwitchIcon />
          </FlexDiv>
          <ButtonText>Restream</ButtonText>
        </UrlButton>
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

const ButtonText = styled(DesktopOnlyFlexDiv)`
  margin-left: 5px;
`;

const TwitchIcon = styled(IoLogoTwitch)`
  transform: scale(1.2);
`;
