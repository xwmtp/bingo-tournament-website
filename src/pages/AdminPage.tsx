import React from "react";
import { Container } from "../components/Container";
import styled from "styled-components";

export const AdminPage: React.FC = () => {
  return (
    <AdminPageDiv>
      <Container title={"Unscheduled"} size="small" />
      <Container title={"Scheduled"} size="small" />
    </AdminPageDiv>
  );
};

const AdminPageDiv = styled.div`
  flex-direction: column;
`;
