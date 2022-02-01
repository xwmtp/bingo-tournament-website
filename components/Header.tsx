import Nav from "./Nav";
import styled from "styled-components";

export default function Header() {
    return (
        <StyledHeader>
            <Nav/>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
  background-color: darkslategrey;
  color: white;
  padding: 20px;
`