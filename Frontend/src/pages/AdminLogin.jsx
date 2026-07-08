import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          role: 'admin',
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.msg || 'Login failed')
      }

      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">CN</span>
          </div>
          <span className="text-white font-semibold text-lg">CampusNest</span>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
          <div className="mb-6">
            <h1 className="text-lg font-semibold text-white">Admin access</h1>
            <p className="text-sm text-gray-400 mt-1">Restricted area — authorized personnel only</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Admin email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@campusnest.app"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 text-white placeholder-gray-500"
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3 mb-4">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium py-3 rounded-lg transition-colors mt-2"
            >
              Sign in to dashboard
            </button>
          </form>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full text-center text-xs text-gray-500 hover:text-gray-300 mt-4"
        >
          ← Back to CampusNest
        </button>
      </div>
    </div>
  )
}