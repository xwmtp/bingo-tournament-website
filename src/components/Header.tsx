import { Nav } from "./Nav";
import styled from "styled-components";
import { Colors } from "../GlobalStyle";

export function Header() {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: ${Colors.mossGreen};
  padding: 20px;
`;
