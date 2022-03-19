import React, { useState } from "react";
import styled from "styled-components";
import {
  isScheduled,
  ScheduledMatch,
  UnscheduledMatch,
} from "../../domain/Match";
import { DateTime } from "luxon";
import { UrlButton } from "../forms/UrlButton";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoLogoTwitch } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";
import { Colors } from "../../GlobalStyle";
import { UserDisplay } from "../UserDisplay";
import { Button } from "../forms/Button";
import { ScheduleModal } from "./ScheduleModal";

interface Props {
  match: UnscheduledMatch | ScheduledMatch;
}

export const MatchBlock: React.FC<Props> = ({ match }) => {
  const [showScheduleModal, setShowScheduleModal] = useState<boolean>(false);

  return (
    <MatchBlockContainer>
      <StartTimeContainer>
        {isScheduled(match) ? (
          <StartTime>
            <p>{match.scheduledTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
          </StartTime>
        ) : (
          <FlexDiv>
            <Button color={"coral"} onClick={() => setShowScheduleModal(true)}>
              <FlexDiv>
                <CalendarIcon />
              </FlexDiv>
              <ButtonText>Pick time</ButtonText>
            </Button>
          </FlexDiv>
        )}
      </StartTimeContainer>

      <Entrants>
        <UserDisplay user={match.entrants[0].user} />
        <UserDisplay user={match.entrants[1].user} />
      </Entrants>
      <Round>
        <p>{match.round}</p>
      </Round>
      <ButtonsDiv>
        <UrlButton
          color={"twitchPurple"}
          url={
            match.restreamChannel &&
            "https://www.twitch.tv/" + match.restreamChannel
          }
        >
          <FlexDiv>
            <TwitchIcon />
          </FlexDiv>
          <ButtonText>Restream</ButtonText>
        </UrlButton>
        <ButtonMarginTop>
          <UrlButton
            color={"brightMossGreen"}
            url={`https://kadgar.net/live/${match.entrants[0].user.twitchChannel}/${match.entrants[1].user.twitchChannel}`}
          >
            <FlexDiv>
              <KadgarIcon />
            </FlexDiv>
            <ButtonText>Kadgar</ButtonText>
          </UrlButton>
        </ButtonMarginTop>
      </ButtonsDiv>

      <ScheduleModal
        visible={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
      />
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

const Entrants = styled.div`
  min-width: 14rem;

  p {
    font-size: 1.1rem;
    margin: 5px 0;
  }
`;

const StartTime = styled(FlexDiv)`
  font-size: 1.4rem;
  font-weight: 600;
`;

const StartTimeContainer = styled(FlexDiv)`
  min-width: 7.5rem;
`;

const Round = styled(DesktopOnlyFlexDiv)`
  min-width: 120px;
`;

const ButtonsDiv = styled(FlexDiv)`
  flex-direction: column;
  margin: 0 10px;
`;

const ButtonMarginTop = styled.div`
  margin-top: 8px;
  width: 100%;
`;

const ButtonText = styled(DesktopOnlyFlexDiv)`
  margin-left: 5px;
`;

const KadgarIcon = styled(MdOutlineLiveTv)`
  transform: scale(1.2);
`;

const TwitchIcon = styled(IoLogoTwitch)`
  transform: scale(1.2);
`;

const CalendarIcon = styled(BiCalendar)`
  transform: scale(1.2);
`;
