import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <Navigation>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/results">Results</Link>
      <Link to="/about">About</Link>
    </Navigation>
  );
};

const Navigation = styled.nav`
  flex-direction: row;
`;

const Link = styled(NavLink)`
  padding: 0px 10px;
  font-size: 1.4rem;
`;
