import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { SchedulePage } from "./pages/SchedulePage";
import { Page } from "./components/Page";

function App() {
  return (
    <HashRouter basename={"/"}>
      <Header />
      <Page>
        <Routes>
          <Route path={"/leaderboard"} />
          <Route path={"/schedule"} element={<SchedulePage />} />
          <Route path={"/results"} />
          <Route path={"/about"} />
        </Routes>
      </Page>
    </HashRouter>
  );
}

export default App;
