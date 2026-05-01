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
import QuizKulturPage from "./pages/QuizKulturPage.jsx"
import QuizIslandPage from "./pages/QuizIslandPage.jsx"
import QuizGameplayPage from "./pages/QuizGameplayPage.jsx"

// Dynamic pages (unified architecture)
import TestPage from "./pages/tests/TestPage.jsx"
import GamePage from "./pages/games/GamePage.jsx"
import StoryPage from "./pages/stories/StoryPage.jsx"
import ProfileLayout from "./components/layout/ProfileLayout.jsx"
import MonitoringGuruDashboard from "./app/monitoring-guru/page.jsx"
import MonitoringGuruProfilAnak from "./app/monitoring-guru/profil-anak/page.jsx"
import MonitoringGuruProfilAnakDetail from "./app/monitoring-guru/profil-anak/[studentId]/page.jsx"
import StudentProfile from "./app/monitoring-guru/[studentId]/page.jsx"
import MonitoringGuruProfil from "./app/monitoring-guru/profil/page.jsx"
import MonitoringOrtuDashboard from "./app/monitoring-ortu/page.jsx"
import MonitoringOrtuProfil from "./app/monitoring-ortu/profil/page.jsx"
import MonitoringOrtuProfilAnak from "./app/monitoring-ortu/profil-anak/page.jsx"
import MonitoringLogin from "./pages/monitoring/MonitoringLogin.jsx"

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
          <Route path='/monitoring-login-guru' element={<MonitoringLogin role="guru" />} />
          <Route path='/monitoring-login-ortu' element={<MonitoringLogin role="ortu" />} />
          <Route path='/monitoring-guru/profil' element={<MonitoringGuruProfil />} />
          <Route path='/monitoring-guru/profil-anak' element={<MonitoringGuruProfilAnak />} />
          <Route path='/monitoring-guru/profil-anak/:studentId' element={<MonitoringGuruProfilAnakDetail />} />
          <Route path='/monitoring-guru/hasil' element={<MonitoringGuruDashboard />} />
          <Route path='/monitoring-guru/hasil/:studentId' element={<StudentProfile />} />
          
          <Route path='/monitoring-ortu/profil' element={<MonitoringOrtuProfil />} />
          <Route path='/monitoring-ortu/profil-anak' element={<MonitoringOrtuProfilAnak />} />
          <Route path='/monitoring-ortu/hasil' element={<MonitoringOrtuDashboard />} />
          {/* ========================================
              PROTECTED ROUTES - Requires authentication
              ======================================== */}
          <Route element={<ProtectedRoute />}>
            {/* Home */}
            <Route path='home' element={<Home />} />

            {/* Quiz Kultur */}
            <Route path='quiz' element={<QuizKulturPage />} />
            {/* Quiz Kultur Details */}
            <Route path='/islands/:islandSlug/quiz' element={<QuizIslandPage />} />
            <Route path='/islands/:islandSlug/quiz/:topicId/:levelId' element={<QuizGameplayPage />} />

            {/* Story routes */}
            <Route path='/islands/:islandSlug/story'>
              {/* Static story with flipbook (requires storyId) */}
              <Route path=':storyId' element={<StoryPage />} />
              {/* Pre/Post tests */}
              <Route
                path=':storyId/pre-test'
                element={<TestPage testType='pre' />}
              />
              <Route
                path=':storyId/post-test'
                element={<TestPage testType='post' />}
              />
            </Route>

            {/* Game route */}
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
