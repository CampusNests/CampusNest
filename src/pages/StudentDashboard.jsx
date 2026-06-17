import { useNavigate } from 'react-router-dom'

const quickActions = [
  { icon: '🔍', label: 'Search Hostels', path: '/hostels', color: 'bg-primary-50 text-primary-600' },
  { icon: '♥', label: 'Saved Hostels', path: '/saved', color: 'bg-pink-50 text-pink-600' },
  { icon: '📋', label: 'Booking Requests', path: '/bookings', color: 'bg-blue-50 text-blue-600' },
  { icon: '👥', label: 'Roommate Matches', path: '/roommates', color: 'bg-purple-50 text-purple-600' },
  { icon: '💰', label: 'Budget Planner', path: '/budget', color: 'bg-amber-50 text-amber-600' },
  { icon: '🗺️', label: 'Map View', path: '/map', color: 'bg-green-50 text-green-600' },
]

const savedHostels = [
  { id: 1, name: 'Sunrise Hostel', price: '300,000', emoji: '🏠', bg: 'bg-primary-50' },
  { id: 2, name: 'Kings Hostel', price: '350,000', emoji: '🏡', bg: 'bg-blue-50' },
]

const recentBookings = [
  { id: 1, hostel: 'Sunrise Hostel', room: 'Single Room', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700', date: 'Submitted 2 days ago' },
]

const notifications = [
  { id: 1, text: 'Your booking request at Sunrise Hostel is under review', time: '2h ago', icon: '📋' },
  { id: 2, text: 'Sarah sent you a roommate request', time: '5h ago', icon: '👥' },
  { id: 3, text: 'New vacancy opened at Kings Hostel', time: '1d ago', icon: '🏠' },
]

export default function StudentDashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">CN</span>
          </div>
          <span className="text-gray-900 font-semibold text-lg">CampusNest</span>
        </button>

        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/notifications')} className="text-gray-500 hover:text-gray-900 text-lg relative">
            🔔
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-sm font-medium">
            R
          </div>
        </div>
      </nav>

      <div className="px-6 py-6 max-w-5xl mx-auto">

        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Rita 👋</h1>
          <p className="text-sm text-gray-500 mt-1">Here's what's happening with your hostel search</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-semibold text-primary-500">{savedHostels.length}</div>
            <div className="text-xs text-gray-400 mt-1">Saved Hostels</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-semibold text-primary-500">{recentBookings.length}</div>
            <div className="text-xs text-gray-400 mt-1">Pending Bookings</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-semibold text-primary-500">3</div>
            <div className="text-xs text-gray-400 mt-1">Roommate Matches</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Quick actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {quickActions.map((a) => (
              <button
                key={a.label}
                onClick={() => navigate(a.path)}
                className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 hover:border-primary-500 transition-colors text-left"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${a.color}`}>
                  {a.icon}
                </div>
                <span className="text-sm font-medium text-gray-800">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-900">Saved hostels</h2>
              <button onClick={() => navigate('/saved')} className="text-xs text-primary-500">See all →</button>
            </div>
            <div className="space-y-2">
              {savedHostels.map((h) => (
                <div
                  key={h.id}
                  onClick={() => navigate(`/hostels/${h.id}`)}
                  className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:border-primary-500"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${h.bg}`}>
                    {h.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{h.name}</div>
                    <div className="text-xs text-primary-500">UGX {h.price} / month</div>
                  </div>
                  <span className="text-pink-500">♥</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-900">Booking requests</h2>
              <button onClick={() => navigate('/bookings')} className="text-xs text-primary-500">See all →</button>
            </div>
            <div className="space-y-2">
              {recentBookings.map((b) => (
                <div key={b.id} className="bg-white border border-gray-100 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{b.hostel}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${b.statusColor}`}>{b.status}</span>
                  </div>
                  <div className="text-xs text-gray-500">{b.room}</div>
                  <div className="text-xs text-gray-400 mt-1">{b.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-900">Recent notifications</h2>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl divide-y divide-gray-100">
            {notifications.map((n) => (
              <div key={n.id} className="p-3 flex items-start gap-3">
                <span className="text-lg">{n.icon}</span>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{n.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}