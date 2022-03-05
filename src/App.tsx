import React, { useCallback, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { SchedulePage } from "./pages/SchedulePage";
import { Page } from "./components/Page";
import { AddMatchPage } from "./pages/AddMatchPage";
import { ProfilePage } from "./pages/ProfilePage";
import { MyMatchesPage } from "./pages/MyMatchesPage";
import { ProfileSettingsPage } from "./pages/ProfileSettingsPage";
import { AboutPage } from "./pages/AboutPage";
import { User } from "./domain/User";
import { getApi } from "./api/api";
import { AdminPage } from "./pages/AdminPage";

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
      getApi()
        .getUser()
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
        <Header />
        <Page>
          <Routes>
            <Route path={"/leaderboard"} />
            <Route path={"/schedule"} element={<SchedulePage />}>
              <Route path={"addmatch"} element={<AddMatchPage />} />
            </Route>
            <Route path={"/results"} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/profile"} element={<ProfilePage />}>
              <Route path={"settings"} element={<ProfileSettingsPage />} />
              <Route path={"matches"} element={<MyMatchesPage />} />
              <Route path={"admin"} element={<AdminPage />} />
            </Route>
          </Routes>
        </Page>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
