import { Nav } from "./Nav";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";
import { LoggedInUserDisplay } from "./LoggedInUserDisplay";
import { FlexDiv } from "../divs/FlexDiv";
import { LoginButton } from "./LoginButton";
import { UserContext } from "../../App";
import React, { useContext } from "react";
import { User } from "../../domain/User";

export const Header: React.FC = () => {
  const userContext = useContext(UserContext);

  return (
    <StyledHeader>
      <HeaderContent>
        <Nav />
        <LoginOrUser loading={userContext.loading} user={userContext.user} />
      </HeaderContent>
    </StyledHeader>
  );
};

const LoginOrUser: React.FC<{ user: User | undefined; loading: boolean }> = ({
  user,
  loading,
}) => {
  if (user) {
    return <LoggedInUserDisplay user={user} />;
  }
  if (loading) {
    return <></>;
  }
  return <LoginButton />;
};

const StyledHeader = styled(FlexDiv)`
  background-color: ${Colors.mossGreen};
  height: 72px;
`;

const HeaderContent = styled(FlexDiv)`
  width: 1200px;
  justify-content: space-between;
`;
