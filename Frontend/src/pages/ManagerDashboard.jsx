import { useNavigate } from 'react-router-dom'

export default function ManagerDashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-5xl mx-auto bg-white shadow-sm rounded-3xl border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Manager Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">View hostel performance, bookings, and manage available rooms.</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="rounded-full bg-primary-500 text-white px-4 py-2 text-sm font-medium hover:bg-primary-600"
          >
            Home
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Room inventory</h2>
            <p className="text-sm text-gray-500 mt-2">Track available rooms, update pricing, and manage amenities.</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Booking status</h2>
            <p className="text-sm text-gray-500 mt-2">Monitor current bookings and approve tenant requests.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
