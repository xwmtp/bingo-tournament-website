import { Nav } from "./Nav";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";
import { RaceTimeUser } from "./RaceTimeUser";
import { FlexDiv } from "../divs/FlexDiv";
import { LoginButton } from "./LoginButton";
import { UserContext } from "../../App";
import { useContext } from "react";

export function Header() {
  const userContext = useContext(UserContext);
  console.log("t1");

  return (
    <StyledHeader>
      <HeaderContent>
        <Nav />
        {userContext.user ? (
          <RaceTimeUser user={userContext.user} />
        ) : (
          <LoginButton />
        )}
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
