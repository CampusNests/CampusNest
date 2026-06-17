import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const allHostels = [
  { id: 1, name: 'Sunrise Hostel', price: 300000, rating: 4.6, distance: 10, gender: 'Mixed', wifi: true, water: true, security: 90, shuttle: true, badge: 'Verified', badgeColor: 'bg-primary-50 text-primary-600', emoji: '🏠', bg: 'bg-primary-50' },
  { id: 2, name: 'Kings Hostel', price: 350000, rating: 4.9, distance: 5, gender: 'Male', wifi: true, water: true, security: 95, shuttle: true, badge: 'Top Rated', badgeColor: 'bg-blue-100 text-blue-700', emoji: '🏡', bg: 'bg-blue-50' },
  { id: 3, name: 'Grace Hostel', price: 250000, rating: 4.3, distance: 15, gender: 'Female', wifi: false, water: true, security: 88, shuttle: false, badge: 'New', badgeColor: 'bg-amber-100 text-amber-700', emoji: '🏘️', bg: 'bg-amber-50' },
  { id: 4, name: 'Victory Hostel', price: 280000, rating: 4.5, distance: 8, gender: 'Mixed', wifi: true, water: false, security: 92, shuttle: true, badge: 'Verified', badgeColor: 'bg-primary-50 text-primary-600', emoji: '🏢', bg: 'bg-green-50' },
  { id: 5, name: 'Hilltop Hostel', price: 220000, rating: 4.1, distance: 20, gender: 'Female', wifi: true, water: true, security: 80, shuttle: false, badge: 'Verified', badgeColor: 'bg-primary-50 text-primary-600', emoji: '🏔️', bg: 'bg-purple-50' },
  { id: 6, name: 'Unity Hostel', price: 400000, rating: 4.8, distance: 3, gender: 'Male', wifi: true, water: true, security: 97, shuttle: true, badge: 'Top Rated', badgeColor: 'bg-blue-100 text-blue-700', emoji: '🏰', bg: 'bg-rose-50' },
]

export default function HostelListings() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [maxPrice, setMaxPrice] = useState(500000)
  const [gender, setGender] = useState('Any')
  const [wifiOnly, setWifiOnly] = useState(false)
  const [waterOnly, setWaterOnly] = useState(false)
  const [maxDistance, setMaxDistance] = useState(25)

  const filtered = allHostels.filter((h) => {
    if (search && !h.name.toLowerCase().includes(search.toLowerCase())) return false
    if (h.price > maxPrice) return false
    if (gender !== 'Any' && h.gender !== gender) return false
    if (wifiOnly && !h.wifi) return false
    if (waterOnly && !h.water) return false
    if (h.distance > maxDistance) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">CN</span>
          </div>
          <span className="text-gray-900 font-semibold text-lg">CampusNest</span>
        </button>
        <button onClick={() => navigate('/dashboard')} className="text-sm text-gray-500 hover:text-gray-900">
          ← Dashboard
        </button>
      </nav>

      <div className="px-6 py-6 max-w-6xl mx-auto">

        <div className="mb-6">
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm max-w-xl">
            <span className="pl-4 text-gray-400">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by hostel name..."
              className="flex-1 px-3 py-3 text-sm outline-none text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">

          <div className="bg-white border border-gray-100 rounded-xl p-4 h-fit">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Filters</h2>

            <div className="mb-5">
              <label className="block text-xs font-medium text-gray-600 mb-2">
                Max price: UGX {maxPrice.toLocaleString()}
              </label>
              <input
                type="range"
                min="200000"
                max="500000"
                step="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-medium text-gray-600 mb-2">
                Max distance: {maxDistance} min walk
              </label>
              <input
                type="range"
                min="3"
                max="25"
                step="1"
                value={maxDistance}
                onChange={(e) => setMaxDistance(Number(e.target.value))}
                className="w-full accent-primary-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-medium text-gray-600 mb-2">Gender</label>
              <div className="flex flex-wrap gap-2">
                {['Any', 'Male', 'Female', 'Mixed'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`text-xs px-3 py-1.5 rounded-full border ${
                      gender === g
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-white text-gray-600 border-gray-200'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-2">
              <label className="block text-xs font-medium text-gray-600 mb-2">Amenities</label>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={wifiOnly}
                  onChange={(e) => setWifiOnly(e.target.checked)}
                  className="accent-primary-500"
                />
                📶 WiFi available
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={waterOnly}
                  onChange={(e) => setWaterOnly(e.target.checked)}
                  className="accent-primary-500"
                />
                💧 Reliable water
              </label>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">{filtered.length} hostels found</p>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-xl p-10 text-center">
                <p className="text-sm text-gray-500">No hostels match your filters. Try adjusting them.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map((h) => (
                  <div
                    key={h.id}
                    onClick={() => navigate(`/hostels/${h.id}`)}
                    className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-primary-500 transition-colors cursor-pointer"
                  >
                    <div className={`h-32 ${h.bg} flex items-center justify-center text-4xl relative`}>
                      {h.emoji}
                      <span className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-full ${h.badgeColor}`}>
                        {h.badge}
                      </span>
                    </div>
                    <div className="p-3">
                      <div className="font-medium text-gray-900 text-sm mb-1">{h.name}</div>
                      <div className="text-primary-500 text-sm font-medium mb-2">
                        UGX {h.price.toLocaleString()} / month
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {h.wifi && <span className="text-xs text-gray-400">📶 WiFi</span>}
                        {h.water && <span className="text-xs text-gray-400">💧 Water</span>}
                        {h.shuttle && <span className="text-xs text-gray-400">🚐 Shuttle</span>}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs text-gray-400">🚶 {h.distance} min walk</span>
                        <span className="text-xs text-gray-400">👤 {h.gender}</span>
                      </div>
                    </div>
                    <div className="px-3 py-2 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center gap-2">
                        ⭐ {h.rating} · 🛡 {h.security}% safety
                      </span>
                      <button className="text-xs text-primary-500 font-medium">View →</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}