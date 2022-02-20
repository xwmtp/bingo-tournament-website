import React from "react";
import styled from "styled-components";
import { ScheduledMatch } from "../../domain/Schedule";
import { DateTime } from "luxon";
import { UrlButton } from "../forms/UrlButton";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoLogoTwitch } from "react-icons/io";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";

interface Props {
  match: ScheduledMatch;
}

export const MatchBlock: React.FC<Props> = ({ match }) => {
  return (
    <Match>
      <StartTime>
        <p>{match.startTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
      </StartTime>
      <Entrants>
        <p>{match.entrant1}</p>
        <p>{match.entrant2}</p>
      </Entrants>
      <Round>
        <p>{match.round}</p>
      </Round>

      <StreamButtons>
        <UrlButton
          color={"twitchPurple"}
          url={
            match.restreamChannel &&
            "https://www.twitch.tv/" + match.restreamChannel
          }
        >
          <FlexDiv>
            <IoLogoTwitch size={18} />
          </FlexDiv>
          <ButtonText>Restream</ButtonText>
        </UrlButton>
        <ButtonDiv>
          <UrlButton
            color={"brightMossGreen"}
            url={`https://kadgar.net/live/${match.entrant1}/${match.entrant2}`}
          >
            <FlexDiv>
              <MdOutlineLiveTv size={17} />
            </FlexDiv>
            <ButtonText>Kadgar</ButtonText>
          </UrlButton>
        </ButtonDiv>
      </StreamButtons>
    </Match>
  );
};

const Match = styled(FlexDiv)`
  justify-content: space-around;
  background-color: #535959;
  border-radius: 10px;
  padding: 10px 0;
  margin-top: 12px;
`;

const Entrants = styled.div`
  min-width: 14rem;

  p {
    font-size: 1.1rem;
    margin: 5px 0;
  }
`;

const StartTime = styled(FlexDiv)`
  margin: 0 10px;
  min-width: 4rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const Round = styled(DesktopOnlyFlexDiv)`
  min-width: 120px;
`;

const StreamButtons = styled(FlexDiv)`
  flex-direction: column;
  margin: 0 10px;
`;

const ButtonDiv = styled.div`
  margin-top: 8px;
  width: 100%;
`;

const ButtonText = styled(DesktopOnlyFlexDiv)`
  margin-left: 5px;
`;
