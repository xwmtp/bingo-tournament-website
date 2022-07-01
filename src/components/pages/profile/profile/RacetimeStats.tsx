import React from "react";
import { Container } from "../../../Container";
import { secondsToHms } from "../../../../lib/timeHelpers";
import { BingoLeaderboardPlayer } from "../../../../domain/BingoLeaderboard";
import styled from "styled-components";
import { FlexDiv } from "../../../divs/FlexDiv";
import { Colors } from "../../../../GlobalStyle";
import { DateTime } from "luxon";
import { ExternalLink } from "../../../general/ExternalLink";
import { BiLinkExternal } from "react-icons/bi";

interface Props {
  racetimeStats: BingoLeaderboardPlayer;
}

export const RacetimeStats: React.FC<Props> = ({ racetimeStats }) => {
  return (
    <Container size="small" title="Racetime Bingo Stats" width={"50%"}>
      <Stats>
        <RacetimeStat name={"Rank"} stat={`# ${racetimeStats.rank}`} />
        <RacetimeStat
          name={"Leaderboard time"}
          stat={secondsToHms(racetimeStats.leaderboardTime)}
        />
        <RacetimeStat
          name={"Effective median 15"}
          stat={secondsToHms(racetimeStats.effectiveMedian)}
        />
        <RacetimeStat
          name={"Last bingo"}
          stat={racetimeStats.lastRaceDate.toLocaleString(DateTime.DATE_MED)}
        />
        <BingoLbLink url={"https://xwmtp.github.io/bingo-leaderboard"}>
          Racetime Bingo Leaderboard <ExternalIcon />
        </BingoLbLink>
      </Stats>
    </Container>
  );
};

const RacetimeStat: React.FC<{ name: string; stat: string | number }> = ({ name, stat }) => {
  return (
    <StatRow>
      <StatName>{name}</StatName>
      <Stat>{stat}</Stat>
    </StatRow>
  );
};

const Stats = styled(FlexDiv)`
  flex-direction: column;
  align-items: flex-start;
`;

const StatRow = styled(FlexDiv)`
  justify-content: flex-start;
`;

const StatName = styled.p`
  min-width: 10rem;
`;

const Stat = styled.p`
  color: ${Colors.brighterMossGreen};
`;

const BingoLbLink = styled(ExternalLink)`
  margin-top: 0.5rem;
`;

const ExternalIcon = styled(BiLinkExternal)`
  padding-top: 0.25rem;
  transform: scale(1.4);
`;
