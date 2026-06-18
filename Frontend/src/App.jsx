import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import AdminLogin from './pages/AdminLogin'
import StudentDashboard from './pages/StudentDashboard'
import HostelListings from './pages/HostelListings'
import HostelDetails from './pages/HostelDetails'
import RoommateMatching from './pages/RoommateMatching'
import BudgetPlanner from "./pages/BudgetPlanner";
import AdminDashboard from './pages/AdminDashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import MapView from './pages/MapView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/hostels" element={<HostelListings />} />
        <Route path="/hostels/:id" element={<HostelDetails />} />
        <Route path="/roommates" element={<RoommateMatching />} />
        <Route path="/budget" element={<BudgetPlanner />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App