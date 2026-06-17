import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BudgetPlanner() {
  const navigate = useNavigate()

  const [rent, setRent] = useState(300000)
  const [food, setFood] = useState(200000)
  const [transport, setTransport] = useState(100000)
  const [internet, setInternet] = useState(30000)
  const [misc, setMisc] = useState(50000)

  const total = rent + food + transport + internet + misc

  const items = [
    { label: 'Rent', icon: '🏠', value: rent, setValue: setRent, color: 'bg-primary-500' },
    { label: 'Food', icon: '🍽️', value: food, setValue: setFood, color: 'bg-blue-500' },
    { label: 'Transport', icon: '🚐', value: transport, setValue: setTransport, color: 'bg-amber-500' },
    { label: 'Internet', icon: '📶', value: internet, setValue: setInternet, color: 'bg-purple-500' },
    { label: 'Other / Misc', icon: '🧾', value: misc, setValue: setMisc, color: 'bg-rose-500' },
  ]

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

      <div className="px-6 py-8 max-w-lg mx-auto">

        <h1 className="text-xl font-semibold text-gray-900 mb-1">Budget Planner</h1>
        <p className="text-sm text-gray-500 mb-6">
          Plan your monthly student budget in UGX. Adjust the sliders to fit your situation.
        </p>

        <div className="bg-white border border-gray-100 rounded-xl p-5 mb-6">
          {items.map((item, i) => (
            <div key={item.label} className={i !== items.length - 1 ? 'mb-5' : ''}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">{item.icon} {item.label}</span>
                <span className="text-sm font-medium text-gray-900">
                  UGX {item.value.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="600000"
                step="10000"
                value={item.value}
                onChange={(e) => item.setValue(Number(e.target.value))}
                className="w-full accent-primary-500"
              />
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Cost breakdown</h2>
          <div className="w-full h-3 rounded-full overflow-hidden flex mb-4">
            {items.map((item) => (
              <div
                key={item.label}
                className={item.color}
                style={{ width: `${total > 0 ? (item.value / total) * 100 : 0}%` }}
              ></div>
            ))}
          </div>
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                  {item.label}
                </span>
                <span className="text-gray-800 font-medium">
                  UGX {item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-500 rounded-xl p-5 text-center">
          <p className="text-white/80 text-sm mb-1">Total monthly cost</p>
          <p className="text-white text-3xl font-semibold">UGX {total.toLocaleString()}</p>
        </div>

        <button
          onClick={() => navigate('/hostels')}
          className="w-full mt-6 bg-white border border-gray-200 hover:border-primary-500 text-gray-700 text-sm font-medium py-3 rounded-lg transition-colors"
        >
          Find hostels within this budget →
        </button>

      </div>
    </div>
  )
}