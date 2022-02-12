import { Nav } from "./Nav";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";
import { RaceTimeUser } from "./RaceTimeUser";
import { FlexDiv } from "../divs/FlexDiv";

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

const StyledHeader = styled(FlexDiv)`
  background-color: ${Colors.mossGreen};
  padding: 20px;
`;

const HeaderContent = styled(FlexDiv)`
  width: 1200px;
  justify-content: space-between;
`;
