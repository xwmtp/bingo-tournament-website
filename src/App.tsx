import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import { PairingPage } from "./pages/PairingPage";
import { Page } from "./components/Page";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 3,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={"/"}>
        <ModalProvider>
          <Header />
          <Content>
            <Routes>
              <Route path={"/"} element={<Page children={<LeaderboardPage />} />} />
              <Route path={"/leaderboard"} element={<Page children={<LeaderboardPage />} />} />
              <Route path={"/schedule"} element={<Page children={<SchedulePage />} />}>
                <Route path={"addmatch"} element={<Page children={<AddMatchPage />} />} />
              </Route>

              <Route path={"/results"} element={<Page children={<ResultsPage />} />} />
              <Route path={"/about"} element={<Page children={<AboutPage />} />} />
              <Route path={"/profile"} element={<Page children={<ProfilePage />} />}>
                <Route path={"settings"} element={<Page children={<ProfileSettingsPage />} />} />
                <Route path={"matches"} element={<Page children={<MyMatchesPage />} />} />
                <Route path={"admin"} element={<Page children={<AdminPage />} />} />
              </Route>

              <Route path={"pairing"} element={<Page width={2000} children={<PairingPage />} />} />
            </Routes>
          </Content>
        </ModalProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
