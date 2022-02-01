import styled from "styled-components";
import {NavLink} from "./NavLink";

const StyledNav = styled.nav`
  flex-direction: row;
`

export default function Nav() {
    return (
        <StyledNav>
            <NavLink href="/leaderboard" name={"Leaderboard"}/>
            <NavLink href="/schedule" name={"Schedule"}/>
            <NavLink href="/results" name={"Results"}/>
            <NavLink href="/about" name={"About"}/>
        </StyledNav>
    );
}