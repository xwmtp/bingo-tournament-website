import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { SchedulePage } from "./pages/SchedulePage";
import { Content } from "./components/Content";
import { AddMatchPage } from "./pages/AddMatchPage";
import { ProfilePage } from "./pages/ProfilePage";
import { MyMatchesPage } from "./pages/MyMatchesPage";
import { ProfileSettingsPage } from "./pages/ProfileSettingsPage";
import { AboutPage } from "./pages/AboutPage";
import { AdminPage } from "./pages/AdminPage";
import { ModalProvider } from "styled-react-modal";
import { ResultsPage } from "./pages/ResultsPage";
import { Page } from "./components/Page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LeaderboardPage } from "./pages/LeaderboardPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter basename={"/"}>
        <ModalProvider>
          <Header />
          <Content>
            <Page>
              <Routes>
                <Route path={"/"} element={<LeaderboardPage />} />
                <Route path={"/leaderboard"} element={<LeaderboardPage />} />
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
