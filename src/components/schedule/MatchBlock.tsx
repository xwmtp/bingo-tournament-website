import React, { useState } from "react";
import styled from "styled-components";
import {
  isScheduled,
  ScheduledMatch,
  standardMatchDuration,
  UnscheduledMatch,
} from "../../domain/Match";
import { DateTime } from "luxon";
import { UrlButton } from "../forms/UrlButton";
import { MdOutlineLiveTv } from "react-icons/md";
import { BiCalendar, BiPencil } from "react-icons/bi";
import { DesktopOnlyFlexDiv, FlexDiv } from "../divs/FlexDiv";
import { Colors } from "../../GlobalStyle";
import { UserDisplay } from "../UserDisplay";
import { Button } from "../forms/Button";
import { ScheduleModal } from "./ScheduleModal";
import { TwitchButton } from "../forms/TwitchButton";

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
        <WithMaybeEditButton showButton={editable && isScheduled(match)}>
          {isScheduled(match) ? (
            <>
              <StartTime>
                <p>
                  {match.scheduledTime.toLocaleString(DateTime.TIME_SIMPLE)}
                </p>
              </StartTime>
            </>
          ) : (
            <FlexDiv>
              <Button
                color={"coral"}
                onClick={() => setShowScheduleModal(true)}
              >
                <FlexDiv>
                  <CalendarIcon />
                </FlexDiv>
                <ButtonText>Pick time</ButtonText>
              </Button>
            </FlexDiv>
          )}
        </WithMaybeEditButton>
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
      <Edit>
        {showButton && (
          <EditButton color={"coral"}>
            <FlexDiv>
              <PencilIcon />
            </FlexDiv>
          </EditButton>
        )}
      </Edit>
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

const EditButton = styled(Button)`
  padding: 0.3rem 0.4rem;
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
  min-width: 5rem;
`;

const Round = styled(DesktopOnlyFlexDiv)`
  min-width: 120px;
`;

const StreamButtonsDiv = styled(FlexDiv)`
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

const CalendarIcon = styled(BiCalendar)`
  transform: scale(1.2);
`;

const PencilIcon = styled(BiPencil)`
  transform: scale(1.3);
`;
