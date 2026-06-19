import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialPending = [
  { id: 1, name: 'Tupendane Hostel', manager: 'David Okello', location: 'Mukono, near UCU gate', distance: 12, submitted: '2 days ago', emoji: '🏠' },
  { id: 2, name: 'Lea Courts', manager: 'Esther Namuli', location: 'Mukono, Seeta road', distance: 18, submitted: '5 hours ago', emoji: '🏘️' },
]

const initialApproved = [
  { id: 3, name: 'Galaxy Hostel', manager: 'John Mukasa', rooms: 24, occupied: 19, status: 'Active' },
  { id: 4, name: 'Victory Hostel', manager: 'Grace Atim', rooms: 30, occupied: 28, status: 'Active' },
  { id: 5, name: 'William Hostel', manager: 'Peter Ssali', rooms: 15, occupied: 10, status: 'Active' },
]

const reports = [
  { id: 1, hostel: 'Victory Hostel', type: 'Water issue', reporter: 'Anonymous', date: '1 day ago', severity: 'Medium' },
  { id: 2, hostel: 'Pameja Hostel', type: 'Noise complaint', reporter: 'Anonymous', date: '3 days ago', severity: 'Low' },
]

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('overview')
  const [pending, setPending] = useState(initialPending)
  const [approved, setApproved] = useState(initialApproved)

  function approveHostel(h) {
    setPending(pending.filter((p) => p.id !== h.id))
    setApproved([...approved, { id: h.id, name: h.name, manager: h.manager, rooms: 0, occupied: 0, status: 'Active' }])
  }

  function rejectHostel(h) {
    setPending(pending.filter((p) => p.id !== h.id))
  }

  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'verify', label: `Verify (${pending.length})` },
    { key: 'hostels', label: 'All Hostels' },
    { key: 'reports', label: 'Reports' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="sticky top-0 z-50 bg-gray-900 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">CN</span>
          </div>
          <span className="text-white font-semibold text-lg">CampusNest Admin</span>
        </div>
        <button onClick={() => navigate('/')} className="text-sm text-gray-400 hover:text-white">
          Log out
        </button>
      </nav>

      <div className="px-6 py-6 max-w-6xl mx-auto">

        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Admin Dashboard</h1>
        <p className="text-sm text-gray-500 mb-6">Manage hostel verification, listings, and platform reports.</p>

        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`text-sm font-medium px-4 py-2.5 border-b-2 transition-colors ${
                tab === t.key
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-semibold text-primary-500">1,250</div>
                <div className="text-xs text-gray-400 mt-1">Total students</div>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-semibold text-primary-500">{approved.length}</div>
                <div className="text-xs text-gray-400 mt-1">Hostels listed</div>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-semibold text-amber-500">{pending.length}</div>
                <div className="text-xs text-gray-400 mt-1">Pending approvals</div>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-semibold text-rose-500">{reports.length}</div>
                <div className="text-xs text-gray-400 mt-1">Open reports</div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Recent activity</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <p>📝 <span className="font-medium text-gray-800">Lea Courts</span> submitted for verification — 5 hours ago</p>
                <p>✅ <span className="font-medium text-gray-800">William Hostel</span> was approved and published — 1 day ago</p>
                <p>🚩 New safety report filed for <span className="font-medium text-gray-800">Victory Hostel</span> — 1 day ago</p>
              </div>
            </div>
          </div>
        )}

        {tab === 'verify' && (
          <div className="space-y-4">
            {pending.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-xl p-10 text-center text-sm text-gray-500">
                No pending hostel verifications. 🎉
              </div>
            ) : (
              pending.map((h) => (
                <div key={h.id} className="bg-white border border-gray-100 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-2xl">
                        {h.emoji}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{h.name}</div>
                        <div className="text-xs text-gray-500">Manager: {h.manager}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">
                      Pending
                    </span>
                  </div>

                  <div className="text-xs text-gray-500 mb-4 space-y-1">
                    <p>📍 {h.location}</p>
                    <p>🚶 {h.distance} min walk from UCU</p>
                    <p>🕒 Submitted {h.submitted}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => approveHostel(h)}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium py-2.5 rounded-lg"
                    >
                      ✓ Approve & publish
                    </button>
                    <button
                      onClick={() => rejectHostel(h)}
                      className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-lg"
                    >
                      ✕ Reject
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {tab === 'hostels' && (
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Hostel</th>
                  <th className="text-left px-4 py-3 font-medium">Manager</th>
                  <th className="text-left px-4 py-3 font-medium">Rooms</th>
                  <th className="text-left px-4 py-3 font-medium">Occupied</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {approved.map((h) => (
                  <tr key={h.id}>
                    <td className="px-4 py-3 font-medium text-gray-900">{h.name}</td>
                    <td className="px-4 py-3 text-gray-600">{h.manager}</td>
                    <td className="px-4 py-3 text-gray-600">{h.rooms}</td>
                    <td className="px-4 py-3 text-gray-600">{h.occupied}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded-full font-medium">
                        {h.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'reports' && (
          <div className="space-y-3">
            {reports.map((r) => (
              <div key={r.id} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">{r.hostel}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{r.type} · Reported by {r.reporter} · {r.date}</div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  r.severity === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {r.severity}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}