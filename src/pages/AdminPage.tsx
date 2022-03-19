import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import { AllEntrants } from "../components/profile/admin/AllEntrants";

export const AdminPage: React.FC = () => {
  return (
    <AdminPageDiv>
      <Container title={"Entrants"} size="small">
        <AllEntrants />
      </Container>
      <Container title={"Scheduled"} size="small" />
    </AdminPageDiv>
  );
};

const AdminPageDiv = styled.div`
  width: 100%;
  flex-direction: column;
`;
