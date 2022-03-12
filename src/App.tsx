import React, { useCallback, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { SchedulePage } from "./pages/SchedulePage";
import { Content } from "./components/Content";
import { AddMatchPage } from "./pages/AddMatchPage";
import { ProfilePage } from "./pages/ProfilePage";
import { MyMatchesPage } from "./pages/MyMatchesPage";
import { ProfileSettingsPage } from "./pages/ProfileSettingsPage";
import { AboutPage } from "./pages/AboutPage";
import { User } from "./domain/User";
import { AdminPage } from "./pages/AdminPage";
import { ModalProvider } from "styled-react-modal";
import { getUser } from "./api/userApi";
import { ResultsPage } from "./pages/ResultsPage";
import { Page } from "./components/Page";

export interface UserContextProps {
  user?: User;
  loading: boolean;
  fetchUser: () => void;
}

export const UserContext = React.createContext<UserContextProps>({
  user: undefined,
  loading: true,
  fetchUser: () => {},
});

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

  const fetchUser = useCallback(() => {
    if (!user) {
      setLoadingUser(true);
      console.log("fetching...");
      getUser()
        .then((fetchedUser) => {
          console.log("found user!");
          setUser(fetchedUser);
        })
        .catch((error) => {
          console.log("Could not fetch user " + error);
          setUser(undefined);
        })
        .finally(() => setLoadingUser(false));
    }
  }, [user]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <UserContext.Provider
      value={{ user: user, fetchUser: fetchUser, loading: loadingUser }}
    >
      <HashRouter basename={"/"}>
        <ModalProvider>
          <Header />
          <Content>
            <Page>
              <Routes>
                <Route path={"/leaderboard"} />
                <Route path={"/schedule"} element={<SchedulePage />}>
                  <Route path={"addmatch"} element={<AddMatchPage />} />
                </Route>
                <Route path={"/results"} element={<ResultsPage />} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/profile"} element={<ProfilePage />}>
                  <Route path={"settings"} element={<ProfileSettingsPage />} />
                  <Route path={"matches"} element={<MyMatchesPage />} />
                  <Route path={"admin"} element={<AdminPage />} />
                </Route>
              </Routes>
            </Page>
          </Content>
        </ModalProvider>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
