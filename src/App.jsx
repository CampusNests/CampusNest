import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import AdminLogin from './pages/AdminLogin'
import StudentDashboard from './pages/StudentDashboard'
import HostelListings from './pages/HostelListings'
import HostelDetails from './pages/HostelDetails'
import RoommateMatching from './pages/RoommateMatching'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/hostels" element={<HostelListings />} />
        <Route path="/hostels/:id" element={<HostelDetails />} />
        <Route path="/roommates" element={<RoommateMatching />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App