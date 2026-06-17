import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const hostelData = {
  1: { name: 'Sunrise Hostel', price: 300000, rating: 4.6, distance: 10, gender: 'Mixed', emoji: '🏠', bg: 'bg-primary-50', security: 90, water: 95, internet: 87, cleanliness: 85 },
  2: { name: 'Kings Hostel', price: 350000, rating: 4.9, distance: 5, gender: 'Male', emoji: '🏡', bg: 'bg-blue-50', security: 95, water: 90, internet: 92, cleanliness: 90 },
  3: { name: 'Grace Hostel', price: 250000, rating: 4.3, distance: 15, gender: 'Female', emoji: '🏘️', bg: 'bg-amber-50', security: 88, water: 80, internet: 70, cleanliness: 82 },
  4: { name: 'Victory Hostel', price: 280000, rating: 4.5, distance: 8, gender: 'Mixed', emoji: '🏢', bg: 'bg-green-50', security: 92, water: 75, internet: 88, cleanliness: 80 },
  5: { name: 'Hilltop Hostel', price: 220000, rating: 4.1, distance: 20, gender: 'Female', emoji: '🏔️', bg: 'bg-purple-50', security: 80, water: 85, internet: 78, cleanliness: 75 },
  6: { name: 'Unity Hostel', price: 400000, rating: 4.8, distance: 3, gender: 'Male', emoji: '🏰', bg: 'bg-rose-50', security: 97, water: 93, internet: 95, cleanliness: 91 },
}

const reviews = [
  { name: 'Joshua', course: 'Year 2 IT', rating: 5, text: 'Very quiet environment for studying. Water is reliable and the caretaker is responsive.' },
  { name: 'Patricia', course: 'Year 1 BBA', rating: 4, text: 'Good value for the price. WiFi can be slow at night when everyone is online.' },
]

const singleRooms = [
  { id: 's1', type: 'Single Room', price: 300000, available: 3 },
  { id: 's2', type: 'Single Self-Contained', price: 380000, available: 1 },
]

export default function HostelDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const hostel = hostelData[id] || hostelData[1]

  const [roomChoice, setRoomChoice] = useState(null)

  function ScoreBar({ label, value, icon }) {
    return (
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-600">{icon} {label}</span>
          <span className="text-xs font-medium text-gray-800">{value}%</span>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 rounded-full"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">CN</span>
          </div>
          <span className="text-gray-900 font-semibold text-lg">CampusNest</span>
        </button>
        <button onClick={() => navigate('/hostels')} className="text-sm text-gray-500 hover:text-gray-900">
          ← Back to listings
        </button>
      </nav>

      <div className="px-6 py-6 max-w-4xl mx-auto">

        <div className={`h-56 ${hostel.bg} rounded-2xl flex items-center justify-center text-7xl mb-5`}>
          {hostel.emoji}
        </div>

        <div className="flex items-start justify-between mb-1">
          <h1 className="text-2xl font-semibold text-gray-900">{hostel.name}</h1>
          <span className="bg-primary-50 text-primary-600 text-xs font-medium px-2.5 py-1 rounded-full">
            ✓ Verified
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          🚶 {hostel.distance} min walk from UCU · 👤 {hostel.gender} · ⭐ {hostel.rating}
        </p>
        <p className="text-xl font-semibold text-primary-500 mb-6">
          UGX {hostel.price.toLocaleString()} / month
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Reality Score</h2>
            <ScoreBar label="Water reliability" value={hostel.water} icon="💧" />
            <ScoreBar label="Internet quality" value={hostel.internet} icon="📶" />
            <ScoreBar label="Security" value={hostel.security} icon="🛡️" />
            <ScoreBar label="Cleanliness" value={hostel.cleanliness} icon="✨" />
            <p className="text-xs text-gray-400 mt-2">Based on student reviews, not the hostel owner.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">About this hostel</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              A quiet, student-friendly hostel close to UCU's main gate. Rooms come furnished
              with a bed, mattress, wardrobe, and study desk. Shared kitchen and common room available.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>📍 Located in Mukono, near UCU main campus</p>
              <p>📞 Contact: 0701 234 567</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Choose your room setup</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => setRoomChoice('shared')}
              className={`border rounded-xl p-4 text-left transition-colors ${
                roomChoice === 'shared' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-lg mb-1">👥</div>
              <div className="text-sm font-medium text-gray-900">Shared room</div>
              <div className="text-xs text-gray-500 mt-1">Find a roommate match first</div>
            </button>

            <button
              onClick={() => setRoomChoice('single')}
              className={`border rounded-xl p-4 text-left transition-colors ${
                roomChoice === 'single' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-lg mb-1">🚪</div>
              <div className="text-sm font-medium text-gray-900">No roommate</div>
              <div className="text-xs text-gray-500 mt-1">Browse single rooms only</div>
            </button>
          </div>

          {roomChoice === 'shared' && (
            <div className="border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-600 mb-3">
                We'll match you with compatible roommates at {hostel.name} based on your habits and budget.
              </p>
              <button
                onClick={() => navigate('/roommates')}
                className="bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg"
              >
                Start roommate matching →
              </button>
            </div>
          )}

          {roomChoice === 'single' && (
            <div className="border-t border-gray-100 pt-4 space-y-2">
              {singleRooms.map((r) => (
                <div key={r.id} className="flex items-center justify-between border border-gray-100 rounded-lg p-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{r.type}</div>
                    <div className="text-xs text-gray-500">{r.available} room(s) available</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary-500 mb-1">
                      UGX {r.price.toLocaleString()}
                    </div>
                    <button
                      onClick={() => navigate('/booking-confirm')}
                      className="bg-primary-500 hover:bg-primary-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg"
                    >
                      Request room
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Student reviews</h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">{r.name}</span>
                  <span className="text-xs text-amber-500">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{r.course}</p>
                <p className="text-sm text-gray-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}