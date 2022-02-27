import { Container } from "../components/Container";
import React from "react";
import styled from "styled-components";
import { Margins } from "../GlobalStyle";
import { PreviousYears } from "../components/about/PreviousYears";

export const AboutPage: React.FC = () => {
  const aboutWidth = 700 - Math.round(Margins.container / 2);
  const previousYearsWidth = 1000 - aboutWidth - Margins.container;

  return (
    <AboutPageDiv>
      <Container title={"About"} width={aboutWidth}>
        <p> Welcome to the 2022 OoT Bingo Tournament!</p>
      </Container>
      <PreviousYearsContainer
        title={"Previous years"}
        width={previousYearsWidth}
      >
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
  margin-left: ${Margins.container}px;
`;
