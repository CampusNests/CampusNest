import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const hostels = [
  {
    id: 1,
    name: 'Sunrise Hostel',
    price: '300,000',
    rating: 4.6,
    distance: '10 min walk',
    gender: 'Mixed',
    wifi: true,
    water: true,
    security: 90,
    badge: 'Verified',
    badgeColor: 'bg-primary-50 text-primary-600',
    emoji: '🏠',
    bg: 'bg-primary-50',
  },
  {
    id: 2,
    name: 'Kings Hostel',
    price: '350,000',
    rating: 4.9,
    distance: '5 min walk',
    gender: 'Male',
    wifi: true,
    water: true,
    security: 95,
    badge: 'Top Rated',
    badgeColor: 'bg-blue-100 text-blue-700',
    emoji: '🏡',
    bg: 'bg-blue-50',
  },
  {
    id: 3,
    name: 'Grace Hostel',
    price: '250,000',
    rating: 4.3,
    distance: '15 min walk',
    gender: 'Female',
    wifi: false,
    water: true,
    security: 88,
    badge: 'New',
    badgeColor: 'bg-amber-100 text-amber-700',
    emoji: '🏘️',
    bg: 'bg-amber-50',
  },
  {
    id: 4,
    name: 'Victory Hostel',
    price: '280,000',
    rating: 4.5,
    distance: '8 min walk',
    gender: 'Mixed',
    wifi: true,
    water: false,
    security: 92,
    badge: 'Verified',
    badgeColor: 'bg-primary-50 text-primary-600',
    emoji: '🏢',
    bg: 'bg-green-50',
  },
]

const features = [
  {
    icon: '🛡️',
    title: 'Reality Scores',
    desc: 'Water, WiFi, security & cleanliness rated by students who actually live there.',
  },
  {
    icon: '👥',
    title: 'Roommate Matching',
    desc: 'Answer 5 questions and get matched with compatible roommates before you move in.',
  },
  {
    icon: '🗺️',
    title: 'Interactive Map',
    desc: 'See all hostels on a map with real walking distances from UCU main gate.',
  },
  {
    icon: '💰',
    title: 'Budget Planner',
    desc: 'Plan rent, food, transport & internet in UGX. Know your total before you commit.',
  },
]

export default function LandingPage() {
  const [search, setSearch] = useState('')
  const [priceFilter, setPriceFilter] = useState('Any price')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    navigate('/hostels')
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">CN</span>
          </div>
          <span className="text-gray-900 font-semibold text-lg">CampusNest</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#hostels" className="text-sm text-gray-500 hover:text-gray-900">Hostels</a>
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900">Features</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Map</a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/login')}
            className="text-sm px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate('/register')}
            className="text-sm px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white px-6 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
          📍 Built for UCU students in Mukono
        </div>

        <h1 className="text-4xl font-semibold text-gray-900 leading-tight max-w-xl mx-auto mb-4">
          Find your <span className="text-primary-500">ideal hostel</span> near campus — fast
        </h1>

        <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
          Verified listings, real student reviews, and tools to plan your life at Uganda Christian University.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center max-w-xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white mb-8"
        >
          <span className="pl-4 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hostels near UCU..."
            className="flex-1 px-3 py-3 text-sm outline-none text-gray-800 placeholder-gray-400"
          />
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border-l border-gray-100 bg-gray-50 text-sm px-3 py-3 text-gray-500 outline-none"
          >
            <option>Any price</option>
            <option>Under 200k</option>
            <option>200k – 400k</option>
            <option>Above 400k</option>
          </select>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-5 py-3"
          >
            Search
          </button>
        </form>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-0">
          {['✅ Verified hostels', '🛡️ Safety ratings', '👥 Roommate matching', '💰 Budget planner'].map((item) => (
            <span key={item} className="text-sm text-gray-500">{item}</span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-gray-100 mt-10 bg-gray-50">
          {[
            { num: '85+', label: 'Listed hostels' },
            { num: '1,200+', label: 'Students housed' },
            { num: '4.7★', label: 'Avg review score' },
            { num: 'Free', label: 'Always for students' },
          ].map((s) => (
            <div key={s.label} className="py-5 text-center border-r border-gray-100 last:border-r-0">
              <div className="text-2xl font-semibold text-primary-500">{s.num}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Hostels */}
      <section id="hostels" className="px-6 py-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-900">Featured hostels</h2>
          <button
            onClick={() => navigate('/hostels')}
            className="text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1"
          >
            See all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hostels.map((h) => (
            <div
              key={h.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-primary-500 transition-colors cursor-pointer"
              onClick={() => navigate(`/hostels/${h.id}`)}
            >
              {/* Thumbnail */}
              <div className={`h-28 ${h.bg} flex items-center justify-center text-4xl relative`}>
                {h.emoji}
                <span className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-full ${h.badgeColor}`}>
                  {h.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-3">
                <div className="font-medium text-gray-900 text-sm mb-1">{h.name}</div>
                <div className="text-primary-500 text-sm font-medium mb-2">UGX {h.price} / month</div>
                <div className="flex flex-wrap gap-2">
                  {h.wifi && (
                    <span className="text-xs text-gray-400 flex items-center gap-1">📶 WiFi</span>
                  )}
                  {h.water && (
                    <span className="text-xs text-gray-400 flex items-center gap-1">💧 Water</span>
                  )}
                  <span className="text-xs text-gray-400">🚶 {h.distance}</span>
                  <span className="text-xs text-gray-400">👤 {h.gender}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="px-3 py-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">⭐ {h.rating}</span>
                <button className="text-xs text-primary-500 font-medium">View details →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-10 bg-white">
        <h2 className="text-lg font-semibold text-gray-900 mb-5">What makes CampusNest different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-50 rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <div className="text-sm font-medium text-gray-900 mb-1">{f.title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-10">
        <div className="bg-primary-500 rounded-2xl px-6 py-10 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">Ready to find your room?</h2>
          <p className="text-white/80 text-sm mb-6">
            Join 1,200+ UCU students who found their hostel on CampusNest.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => navigate('/register')}
              className="bg-white text-primary-600 font-medium text-sm px-6 py-3 rounded-lg hover:bg-gray-50"
            >
              Create free account
            </button>
            <button
              onClick={() => navigate('/hostels')}
              className="border border-white/40 text-white text-sm px-6 py-3 rounded-lg hover:bg-white/10"
            >
              Browse hostels
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-gray-400">© 2025 CampusNest · Built for UCU students in Mukono</p>
        <div className="flex gap-4">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">About</a>
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Contact</a>
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">List your hostel</a>
        </div>
      </footer>

    </div>
  )
}