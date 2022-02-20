import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { SchedulePage } from "./pages/SchedulePage";
import { Page } from "./components/Page";
import { AddMatchPage } from "./pages/AddMatchPage";
import { ProfilePage } from "./pages/ProfilePage";
import { MyMatchesPage } from "./pages/MyMatchesPage";
import { ProfileSettingsPage } from "./pages/ProfileSettingsPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
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
  );
}

export default App;
