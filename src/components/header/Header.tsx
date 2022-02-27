import { Nav } from "./Nav";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";
import { RaceTimeUser } from "./RaceTimeUser";
import { FlexDiv } from "../divs/FlexDiv";
import { LoginButton } from "./LoginButton";

export function Header() {
  return (
    <StyledHeader>
      <HeaderContent>
        <Nav />
        <RaceTimeUser />
        <LoginButton />
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
