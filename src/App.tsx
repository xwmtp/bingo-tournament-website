import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
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

interface UserContextProps {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

export const UserContext = React.createContext<UserContextProps>({
  user: undefined,
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  const fetchUser = useCallback(() => {
    getApi()
      .getUser()
      .then((fetchedUser) => {
        setUser(fetchedUser);
      })
      .catch((error) => {
        console.log("Could not fetch user " + error);
        setUser(undefined);
      });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
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
            </Route>
          </Routes>
        </Page>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
