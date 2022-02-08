import { Nav } from "./Nav";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";
import { RaceTimeUser } from "./RaceTimeUser";

export function Header() {
  return (
    <StyledHeader>
      <HeaderContent>
        <Nav />
        <RaceTimeUser />
      </HeaderContent>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.mossGreen};
  padding: 20px;
`;

const HeaderContent = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
