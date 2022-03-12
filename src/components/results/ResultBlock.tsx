import React from "react";
import styled from "styled-components";
import { MatchResult } from "../../domain/Match";
import { UrlButton } from "../forms/UrlButton";
import { IoLogoTwitch } from "react-icons/io";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";
import { Colors } from "../../GlobalStyle";
import { EntrantDisplay } from "../EntrantDisplay";
import { Duration } from "luxon";

interface Props {
  result: MatchResult;
}

export const ResultBlock: React.FC<Props> = ({ result }) => {
  let winner;
  let loser;
  let winnerTime;
  let loserTime;
  if (result.timeEntrant1 <= result.timeEntrant2) {
    winner = result.entrant1;
    loser = result.entrant2;
    winnerTime = result.timeEntrant1;
    loserTime = result.timeEntrant2;
  } else {
    winner = result.entrant2;
    loser = result.entrant1;
    winnerTime = result.timeEntrant2;
    loserTime = result.timeEntrant1;
  }
  const isTie = result.timeEntrant1 === result.timeEntrant2;

  return (
    <MatchBlockContainer>
      <Entrants>
        <EntrantResult>
          <Rank>1.</Rank>
          <EntrantDisplay entrant={winner} />{" "}
          <p>{Duration.fromMillis(winnerTime * 1000).toFormat("h:mm:ss")}</p>
        </EntrantResult>
        <EntrantResult>
          <Rank>{isTie ? "1." : "2."}</Rank>
          <EntrantDisplay entrant={loser} />
          <p>{Duration.fromMillis(loserTime * 1000).toFormat("h:mm:ss")}</p>
        </EntrantResult>
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
            <IoLogoTwitch size={18} />
          </FlexDiv>
          <ButtonText>Restream</ButtonText>
        </UrlButton>
      </ButtonsDiv>
    </MatchBlockContainer>
  );
};

const MatchBlockContainer = styled(FlexDiv)`
  justify-content: space-around;
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  padding: 10px 0;
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
