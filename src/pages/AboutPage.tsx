import { Container } from "../components/Container";
import React from "react";
import styled from "styled-components";
import { Margins } from "../GlobalStyle";
import { PreviousYears } from "../components/about/PreviousYears";

export const AboutPage: React.FC = () => {
  //const aboutWidth = 700 - Math.round(Margins.container / 2);
  //const previousYearsWidth = 1000 - aboutWidth - Margins.container;

  return (
    <AboutPageDiv>
      <Container title={"About"} width={"70%"}>
        <p> Welcome to the 2022 OoT Bingo Tournament!</p>

        <p>
          During this stage, every week, each player will be paired with another player for a bingo
          match. This pairing is calculated according to the points you have gathered so far,
          meaning you will play against people with similar scores. There will be 4 of these rounds.
        </p>
      </Container>
      <PreviousYearsContainer title={"Previous years"} width={"30%"}>
        <PreviousYears />
      </PreviousYearsContainer>
    </AboutPageDiv>
  );
};

const AboutPageDiv = styled.div`
  width: 100%;
  display: flex;
  max-width: 90vw;
  flex-direction: row;
  justify-content: center;
`;

const PreviousYearsContainer = styled(Container)`
  margin-left: ${Margins.container}rem;
`;
