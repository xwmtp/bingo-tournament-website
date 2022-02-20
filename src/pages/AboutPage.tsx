import { Container } from "../components/Container";
import React from "react";
import styled from "styled-components";
import { Margins } from "../GlobalStyle";

export const AboutPage: React.FC = () => {
  const aboutWidth = 700 - Math.round(Margins.container / 2);
  const previousYearsWidth = 1000 - aboutWidth - Margins.container;

  return (
    <AboutPageDiv>
      <Container title={"About"} width={aboutWidth}>
        <h2>Previous tournaments</h2>
        <ul>
          <li>2020</li>
          <li>2021</li>
        </ul>
      </Container>
      <PreviousYearsContainer
        title={"Previous years"}
        width={previousYearsWidth}
      >
        <h2>Previous tournaments</h2>
        <ul>
          <li>2020</li>
          <li>2021</li>
        </ul>
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
