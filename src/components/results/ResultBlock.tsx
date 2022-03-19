import React from "react";
import styled from "styled-components";
import { MatchResult } from "../../domain/Match";
import { UrlButton } from "../forms/UrlButton";
import { IoLogoTwitch } from "react-icons/io";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";
import { Colors } from "../../GlobalStyle";
import { UserDisplay } from "../UserDisplay";
import { Duration } from "luxon";

interface Props {
  result: MatchResult;
}

export const ResultBlock: React.FC<Props> = ({ result }) => {
  const entrant1 = result.entrants[0];
  const entrant2 = result.entrants[1];

  return (
    <MatchBlockContainer>
      <Entrants>
        <EntrantResult>
          <Rank>{entrant1.result.rank}</Rank>
          <UserDisplay user={entrant1.user} />
          {entrant1.result.finishTime && (
            <p>
              {Duration.fromMillis(entrant1.result.finishTime * 1000).toFormat(
                "h:mm:ss"
              )}
            </p>
          )}
        </EntrantResult>
        <EntrantResult>
          <Rank>{entrant2.result.rank}</Rank>
          <UserDisplay user={entrant2.user} />
          {entrant2.result.finishTime && (
            <p>
              {Duration.fromMillis(entrant2.result.finishTime * 1000).toFormat(
                "h:mm:ss"
              )}
            </p>
          )}
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
