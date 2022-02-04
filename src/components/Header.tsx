import { Nav } from "./Nav";
import styled from "styled-components";

export function Header() {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: var(--moss-green);
  padding: 20px;
`;
