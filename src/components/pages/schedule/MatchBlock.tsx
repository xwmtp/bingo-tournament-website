import React, { useState } from "react";
import styled from "styled-components";
import {
  includesEntrant,
  isFinished,
  isInProgress,
  isScheduled,
  ScheduledMatch,
  UnscheduledMatch,
} from "../../../domain/Match";
import { DateTime } from "luxon";
import { FlexDiv, WideScreenOnlyFlexDiv } from "../../divs/FlexDiv";
import { Colors, ScreenWidths } from "../../../GlobalStyle";
import { UserDisplay } from "../../UserDisplay";
import { ScheduleModal } from "./ScheduleModal";
import { TwitchButton } from "../../forms/buttons/TwitchButton";
import { KadgarButton } from "../../forms/buttons/KadgarButton";
import { ScheduleButton } from "../../forms/buttons/ScheduleButton";
import { EditButton } from "../../forms/buttons/EditButton";
import { EditModal } from "./EditModal";
import { RecordButton } from "../../forms/buttons/RecordButton";
import { RecordModal } from "./RecordModal";
import { useUser } from "../../../api/userApi";
import { Block } from "../../Block";

interface Props {
  match: UnscheduledMatch | ScheduledMatch;
  editable?: boolean;
  displayStatus?: boolean;
}

export const MatchBlock: React.FC<Props> = ({ match, editable, displayStatus }) => {
  const { data: user } = useUser();
  const [scheduleModalMatch, setScheduleModalMatch] = useState<UnscheduledMatch | undefined>(
    undefined
  );
  const [editModalMatch, setEditModalMatch] = useState<ScheduledMatch | undefined>(undefined);
  const [recordModalMatch, setRecordModalMatch] = useState<ScheduledMatch | undefined>(undefined);

  return (
    <MatchBlockContainer
      $displayAsFinished={!!displayStatus && isScheduled(match) && isFinished(match)}
      $displayAsInProgress={!!displayStatus && isScheduled(match) && isInProgress(match)}
      $displayAsLoggedInUser={!!displayStatus && !!user && includesEntrant(match, user.id)}
    >
      {isScheduled(match) ? (
        <StartTimeContainer>
          <ActionButton>
            <VerticalButtonsDiv>
              {editable && <EditButton onClick={() => setEditModalMatch(match)} />}
              {editable && isFinished(match) && (
                <RecordButtonStyled onClick={() => setRecordModalMatch(match)} />
              )}
            </VerticalButtonsDiv>
          </ActionButton>

          <StartTime>
            <p>{match.scheduledTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
          </StartTime>

          <ActionButton />
        </StartTimeContainer>
      ) : (
        <PickTimeContainer>
          <ScheduleButton onClick={() => setScheduleModalMatch(match)} />
        </PickTimeContainer>
      )}

      <Entrants>
        {match.entrants.map((entrant) => (
          <UserDisplay key={match.id + entrant.user.id} user={entrant.user} />
        ))}
      </Entrants>

      <Round>
        <p>{match.round}</p>
      </Round>

      <VerticalButtonsDiv>
        <TwitchButton
          text="Restream"
          url={match.restreamChannel && "https://www.twitch.tv/" + match.restreamChannel}
        />
        <KadgarButtonStyled users={match.entrants.map((entrant) => entrant.user)} />
      </VerticalButtonsDiv>

      {scheduleModalMatch && (
        <ScheduleModal
          match={scheduleModalMatch}
          visible={!!scheduleModalMatch}
          onClose={() => setScheduleModalMatch(undefined)}
        />
      )}

      {editModalMatch && (
        <EditModal
          match={editModalMatch}
          visible={!!editModalMatch}
          onClose={() => setEditModalMatch(undefined)}
        />
      )}

      {recordModalMatch && (
        <RecordModal
          match={recordModalMatch}
          visible={!!recordModalMatch}
          onClose={() => setRecordModalMatch(undefined)}
        />
      )}
    </MatchBlockContainer>
  );
};

const MatchBlockContainer = styled(Block)<{
  $displayAsFinished: boolean;
  $displayAsInProgress: boolean;
  $displayAsLoggedInUser: boolean;
}>`
  background-color: ${({ $displayAsLoggedInUser }) =>
    $displayAsLoggedInUser ? Colors.brightGrey : Colors.lightGray};
  opacity: ${({ $displayAsFinished }) => ($displayAsFinished ? "30%" : "100%")};
  border: ${({ $displayAsInProgress }) => ($displayAsInProgress ? "0.24rem" : "0")} solid
    ${Colors.brightMossGreen};
`;

const Entrants = styled.div`
  min-width: 14rem;
  margin: 0 0.3rem;

  p {
    font-size: 1.1rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
`;

const StartTimeContainer = styled(FlexDiv)`
  justify-content: flex-start;
  min-width: 8.5rem;

  @media (max-width: ${ScreenWidths.tablet}px) {
    min-width: 7rem;
  }
`;

const PickTimeContainer = styled(StartTimeContainer)`
  justify-content: flex-start;
`;

const ActionButton = styled(FlexDiv)`
  justify-content: flex-start;
  width: 2.4rem;
`;

const StartTime = styled(FlexDiv)`
  font-size: 1.4rem;
  font-weight: 600;
`;

const Round = styled(WideScreenOnlyFlexDiv)`
  min-width: 7.2rem;
`;

const VerticalButtonsDiv = styled(FlexDiv)`
  flex-direction: column;
`;

const KadgarButtonStyled = styled(KadgarButton)`
  margin-top: 0.5rem;
  width: 100%;
`;

const RecordButtonStyled = styled(RecordButton)`
  margin-top: 0.5rem;
  width: 100%;
`;
