import React, { useState } from "react";
import styled from "styled-components";
import {
  isScheduled,
  ScheduledMatch,
  standardMatchDuration,
  UnscheduledMatch,
} from "../../domain/Match";
import { DateTime } from "luxon";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";
import { Colors } from "../../GlobalStyle";
import { UserDisplay } from "../UserDisplay";
import { ScheduleModal } from "./ScheduleModal";
import { TwitchButton } from "../forms/buttons/TwitchButton";
import { KadgarButton } from "../forms/buttons/KadgarButton";
import { EditButton } from "../forms/buttons/EditButton";
import { ScheduleButton } from "../forms/buttons/ScheduleButton";

interface Props {
  match: UnscheduledMatch | ScheduledMatch;
  editable?: boolean;
}

const now = DateTime.local(2021, 2, 4, 5, 50, 34);

export const MatchBlock: React.FC<Props> = ({ match, editable }) => {
  const [showScheduleModal, setShowScheduleModal] = useState<boolean>(false);

  const isInProgress =
    isScheduled(match) &&
    match.scheduledTime < now &&
    now < match.scheduledTime.plus(standardMatchDuration);

  const isFinished =
    isScheduled(match) && now > match.scheduledTime.plus(standardMatchDuration);

  return (
    <MatchBlockContainer $isFinished={isFinished} $isInProgress={isInProgress}>
      <StartTimeContainer>
        {isScheduled(match) ? (
          <WithMaybeEditButton showButton={editable && isScheduled(match)}>
            <StartTime>
              <p>{match.scheduledTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
            </StartTime>
          </WithMaybeEditButton>
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
          url={
            match.restreamChannel &&
            "https://www.twitch.tv/" + match.restreamChannel
          }
        />
        <KadgarButtonStyled
          url={`https://kadgar.net/live/${match.entrants[0].user.twitchChannel}/${match.entrants[1].user.twitchChannel}`}
        />
      </StreamButtonsDiv>

      <ScheduleModal
        visible={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
      />
    </MatchBlockContainer>
  );
};

const WithMaybeEditButton: React.FC<{ showButton?: boolean }> = ({
  showButton,
  children,
}) => {
  return (
    <>
      <Edit />
      <WithMaybeEdit>{children}</WithMaybeEdit>
      <Edit>{showButton && <EditButton />}</Edit>
    </>
  );
};

const MatchBlockContainer = styled(FlexDiv)<{
  $isFinished: boolean;
  $isInProgress: boolean;
}>`
  justify-content: space-around;
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  padding: 10px 0;
  margin-top: 12px;
  opacity: ${({ $isFinished }) => ($isFinished ? "20%" : "100%")};
  border: ${({ $isInProgress }) => ($isInProgress ? "4px" : "0px")} solid
    ${Colors.brightMossGreen};
`;

const Edit = styled(FlexDiv)`
  width: 2rem;
`;

const WithMaybeEdit = styled(FlexDiv)`
  margin: 0 0.7rem;
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
  min-width: 9.5rem;
`;

const Round = styled(DesktopOnlyFlexDiv)`
  min-width: 120px;
`;

const StreamButtonsDiv = styled(FlexDiv)`
  flex-direction: column;
  margin: 0 10px;
`;

const KadgarButtonStyled = styled(KadgarButton)`
  margin-top: 8px;
  width: 100%;
`;
