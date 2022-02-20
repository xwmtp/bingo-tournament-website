import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";

export const MyMatchesPage: React.FC = () => {
  return (
    <ProfilePageDiv>
      <Container title={"Unscheduled"} size="small" />
    </ProfilePageDiv>
  );
};

const ProfilePageDiv = styled.div`
  flex-direction: column;
`;
