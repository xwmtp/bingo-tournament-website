import React, { useState } from "react";
import styled from "styled-components";
import {
  isFinished,
  isInProgress,
  isScheduled,
  ScheduledMatch,
  UnscheduledMatch,
} from "../../../../domain/Match";
import { DateTime } from "luxon";
import { FlexDiv, WideScreenOnlyFlexDiv } from "../../../divs/FlexDiv";
import { Colors, ScreenWidths } from "../../../../GlobalStyle";
import { UserDisplay } from "../../../UserDisplay";
import { ScheduleModal } from "./ScheduleModal";
import { TwitchButton } from "../../../forms/buttons/TwitchButton";
import { KadgarButton } from "../../../forms/buttons/KadgarButton";
import { ScheduleButton } from "../../../forms/buttons/ScheduleButton";
import { EditButton } from "../../../forms/buttons/EditButton";
import { EditModal } from "./EditModal";

interface Props {
  match: UnscheduledMatch | ScheduledMatch;
  editable?: boolean;
  displayStatus?: boolean;
}

export const MatchBlock: React.FC<Props> = ({ match, editable, displayStatus }) => {
  const [showScheduleModal, setShowScheduleModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  return (
    <MatchBlockContainer
      $displayAsFinished={!!displayStatus && isScheduled(match) && isFinished(match)}
      $displayAsInProgress={!!displayStatus && isScheduled(match) && isInProgress(match)}
    >
      <StartTimeContainer>
        {isScheduled(match) ? (
          <>
            <StartTime>
              <p>{match.scheduledTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
            </StartTime>
            {editable && (
              <FlexDiv>
                <EditButtonStyled onClick={() => setShowEditModal(true)} />
              </FlexDiv>
            )}
          </>
        ) : (
          <FlexDiv>
            <ScheduleButton onClick={() => setShowScheduleModal(true)} />
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

      <StreamButtonsDiv>
        <TwitchButton
          text="Restream"
          url={match.restreamChannel && "https://www.twitch.tv/" + match.restreamChannel}
        />
        <KadgarButtonStyled
          url={`https://kadgar.net/live/${match.entrants[0].user.twitchChannel}/${match.entrants[1].user.twitchChannel}`}
        />
      </StreamButtonsDiv>

      <ScheduleModal visible={showScheduleModal} onClose={() => setShowScheduleModal(false)} />

      <EditModal visible={showEditModal} onClose={() => setShowEditModal(false)} />
    </MatchBlockContainer>
  );
};

const MatchBlockContainer = styled(FlexDiv)<{
  $displayAsFinished: boolean;
  $displayAsInProgress: boolean;
}>`
  justify-content: space-between;
  background-color: ${Colors.lightGray};
  border-radius: 0.6rem;
  padding: 0.6rem 0.8rem;
  margin-top: 0.7rem;
  opacity: ${({ $displayAsFinished }) => ($displayAsFinished ? "20%" : "100%")};
  border: ${({ $displayAsInProgress }) => ($displayAsInProgress ? "0.24rem" : "0")} solid
    ${Colors.brightMossGreen};
`;

const Entrants = styled.div`
  min-width: 14rem;
  margin: 0 0.3rem;

  p {
    font-size: 1.1rem;
    margin: 0.3rem 0;
  }
`;

const StartTimeContainer = styled(FlexDiv)`
  justify-content: flex-start;
  min-width: 8.5rem;
  padding-left: 2rem;

  @media (max-width: ${ScreenWidths.tablet}px) {
    padding-left: 0.6rem;
    min-width: 7rem;
  }
`;

const EditButtonStyled = styled(EditButton)`
  margin-left: 0.5rem;
`;

const StartTime = styled(FlexDiv)`
  font-size: 1.4rem;
  font-weight: 600;
`;

const Round = styled(WideScreenOnlyFlexDiv)`
  min-width: 7.2rem;
`;

const StreamButtonsDiv = styled(FlexDiv)`
  flex-direction: column;
  margin: 0 0.6rem;
`;

const KadgarButtonStyled = styled(KadgarButton)`
  margin-top: 0.5rem;
  width: 100%;
`;
