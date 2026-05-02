import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Components
import BackgroundMusic from "./components/BackgroundMusic.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx"
import GuestRoute from "./components/auth/GuestRoute.jsx"

// Core pages
import Landing from "./pages/Landing.jsx"
import Home from "./pages/Home.jsx"
import Sign_Up from "./pages/auth/Sign_Up.jsx"
import Log_in from "./pages/auth/Log_in.jsx"
import Profile from "./pages/Profile.jsx"

import Results from "./pages/Results.jsx"
import ProfileLayout from "./components/layout/ProfileLayout.jsx"

// Dynamic pages (unified architecture)
import GamePage from "./pages/games/GamePage.jsx"
import StoryPage from "./pages/stories/StoryPage.jsx"

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        {/* Global background music */}
        <BackgroundMusic />

        <Routes>

          {/* ========================================
              PUBLIC LANDING PAGE
              ======================================== */}
          <Route path='/' element={<Landing />} />

          {/* ========================================
              PROTECTED ROUTES - Requires authentication
              ======================================== */}
          <Route element={<ProtectedRoute />}>
            {/* Home */}
            <Route path='home' element={<Home />} />

            {/* Story routes */}
            <Route path='/islands/:islandSlug/story'>
              {/* Static story with flipbook (kept for direct URL access) */}
              <Route path=':storyId' element={<StoryPage />} />
            </Route>

            {/* Game route — primary route for all folklore stories */}
            <Route
              path='/islands/:islandSlug/story/:storyId/game'
              element={<GamePage />}
            />

            {/* Profile routes with nested layout */}
            <Route path='/profile' element={<ProfileLayout />}>
              <Route index element={<Profile />} />
              <Route path='results' element={<Results />} />
            </Route>
          </Route>

          {/* ========================================
              GUEST ROUTES - Redirect if already logged in
              ======================================== */}
          <Route element={<GuestRoute />}>
            <Route path='/sign-up' element={<Sign_Up />} />
            <Route path='/login' element={<Log_in />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
