import React from "react";
import styled from "styled-components";
import { ScheduledMatch } from "../../domain/Schedule";
import { DateTime } from "luxon";
import { UrlButton } from "../forms/UrlButton";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoLogoTwitch } from "react-icons/io";
import { DesktopOnly } from "../divs/DesktopOnly";

interface Props {
  match: ScheduledMatch;
}

export const MatchBlock: React.FC<Props> = ({ match }) => {
  return (
    <Match>
      <StartTime>
        <p>
          {match.startTime.setZone("EST").toLocaleString(DateTime.TIME_SIMPLE)}
        </p>
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
          $color={"twitchPurple"}
          url={
            match.restreamChannel &&
            "https://www.twitch.tv/" + match.restreamChannel
          }
        >
          <IconDiv>
            <IoLogoTwitch size={18} />
          </IconDiv>
          <ButtonText>Restream</ButtonText>
        </UrlButton>
        <ButtonDiv>
          <UrlButton
            $color={"leafGreen"}
            url={`https://kadgar.net/live/${match.entrant1}/${match.entrant2}`}
          >
            <IconDiv>
              <MdOutlineLiveTv size={17} />
            </IconDiv>
            <ButtonText>Kadgar</ButtonText>
          </UrlButton>
        </ButtonDiv>
      </StreamButtons>
    </Match>
  );
};

const Match = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
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

const StartTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 10px;
  min-width: 4rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const Round = styled(DesktopOnly)`
  min-width: 120px;
`;

const StreamButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  flex-grow: 1;
`;

const ButtonText = styled(DesktopOnly)`
  margin-left: 5px;
`;

const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
