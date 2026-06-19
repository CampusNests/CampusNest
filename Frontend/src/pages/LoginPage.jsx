import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  // 'login' | 'register-student' | 'register-owner'
  const [mode, setMode] = useState('login')

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    studentNumber: '',
    email: '',
    password: '',
    hostelName: '',
    phone: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

function handleSubmit(e) {
    e.preventDefault()
    if (mode === 'register-owner') {
      navigate('/manager/dashboard')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">CN</span>
          </div>
          <span className="text-gray-900 font-semibold text-lg">CampusNest</span>
        </button>
      </nav>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {/* Tab switcher */}
          <div className="flex bg-white border border-gray-100 rounded-xl p-1 mb-6 shadow-sm">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 text-sm py-2 rounded-lg font-medium transition-colors ${
                mode === 'login'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setMode('register-student')}
              className={`flex-1 text-sm py-2 rounded-lg font-medium transition-colors ${
                mode === 'register-student'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setMode('register-owner')}
              className={`flex-1 text-sm py-2 rounded-lg font-medium transition-colors ${
                mode === 'register-owner'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Owner
            </button>
          </div>

          {/* Card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">

            {/* Header */}
            <div className="mb-6">
              {mode === 'login' && (
                <>
                  <h1 className="text-xl font-semibold text-gray-900">Welcome back</h1>
                  <p className="text-sm text-gray-400 mt-1">Sign in to your CampusNest account</p>
                </>
              )}
              {mode === 'register-student' && (
                <>
                  <h1 className="text-xl font-semibold text-gray-900">Create student account</h1>
                  <p className="text-sm text-gray-400 mt-1">Find and book hostels around UCU</p>
                </>
              )}
              {mode === 'register-owner' && (
                <>
                  <h1 className="text-xl font-semibold text-gray-900">List your hostel</h1>
                  <p className="text-sm text-gray-400 mt-1">Reach thousands of UCU students</p>
                </>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Student register fields */}
              {mode === 'register-student' && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Rita"
                        required
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Nakato"
                        required
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Student number</label>
                    <input
                      type="text"
                      name="studentNumber"
                      value={form.studentNumber}
                      onChange={handleChange}
                      placeholder="e.g. M23B10/001"
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                    />
                  </div>
                </>
              )}

              {/* Owner register fields */}
              {mode === 'register-owner' && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Mukasa"
                        required
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Hostel name</label>
                    <input
                      type="text"
                      name="hostelName"
                      value={form.hostelName}
                      onChange={handleChange}
                      placeholder="e.g. Sunrise Hostel"
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Phone number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0701 234 567"
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                    />
                  </div>
                </>
              )}

              {/* Shared fields — email & password */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-800 placeholder-gray-300"
                />
              </div>

              {mode === 'login' && (
                <div className="text-right">
                  <a href="#" className="text-xs text-primary-500 hover:text-primary-600">Forgot password?</a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium py-3 rounded-lg transition-colors mt-2"
              >
                {mode === 'login' ? 'Sign in' : 'Create account'}
              </button>
            </form>

            {/* Switch mode link */}
            <p className="text-center text-xs text-gray-400 mt-5">
              {mode === 'login' ? (
                <>
                  No account?{' '}
                  <button
                    onClick={() => setMode('register-student')}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Register as student
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}