import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    key: 'sleepSchedule',
    label: 'What time do you usually sleep?',
    options: ['Before 10pm', '10pm - midnight', 'After midnight'],
  },
  {
    key: 'studyHabits',
    label: 'How do you prefer to study?',
    options: ['In silence', 'With music', 'In groups'],
  },
  {
    key: 'noisePreference',
    label: 'How do you feel about noise in the room?',
    options: ['Need it quiet', "Don't mind a little", 'Music/chat is fine'],
  },
  {
    key: 'cleanliness',
    label: 'How tidy do you keep your space?',
    options: ['Very tidy', 'Average', 'Relaxed about it'],
  },
  {
    key: 'budget',
    label: "What's your monthly room budget?",
    options: ['Under 250k', '250k - 350k', 'Above 350k'],
  },
]

const candidateMatches = [
  { name: 'Sarah', course: 'BSIT', year: 2, compatibility: 89, sleepSchedule: '10pm - midnight', studyHabits: 'In silence', noisePreference: 'Need it quiet', cleanliness: 'Very tidy', budget: '250k - 350k' },
  { name: 'Brenda', course: 'BBA', year: 1, compatibility: 76, sleepSchedule: 'After midnight', studyHabits: 'With music', noisePreference: "Don't mind a little", cleanliness: 'Average', budget: 'Under 250k' },
  { name: 'Faith', course: 'BSc Nursing', year: 3, compatibility: 94, sleepSchedule: 'Before 10pm', studyHabits: 'In silence', noisePreference: 'Need it quiet', cleanliness: 'Very tidy', budget: '250k - 350k' },
]

export default function RoommateMatching() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [requestSent, setRequestSent] = useState({})

  function selectAnswer(key, value) {
    setAnswers({ ...answers, [key]: value })
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setStep(questions.length)
    }
  }

  function sendRequest(name) {
    setRequestSent({ ...requestSent, [name]: true })
  }

  const isResults = step === questions.length
  const progress = isResults ? 100 : Math.round((step / questions.length) * 100)

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

        {!isResults && (
          <>
            <h1 className="text-xl font-semibold text-gray-900 mb-1">Roommate Matching</h1>
            <p className="text-sm text-gray-500 mb-6">
              Answer a few quick questions and we'll find your best roommate match.
            </p>

            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-8">
              <div
                className="h-full bg-primary-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <p className="text-xs text-gray-400 mb-2">Question {step + 1} of {questions.length}</p>
              <h2 className="text-base font-semibold text-gray-900 mb-5">{questions[step].label}</h2>

              <div className="space-y-2">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => selectAnswer(questions[step].key, opt)}
                    className="w-full text-left border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-primary-500 hover:bg-primary-50 transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {isResults && (
          <>
            <h1 className="text-xl font-semibold text-gray-900 mb-1">Your roommate matches</h1>
            <p className="text-sm text-gray-500 mb-6">
              Based on your answers, here are students with similar habits and budgets.
            </p>

            <div className="space-y-3">
              {candidateMatches.map((c) => (
                <div key={c.name} className="bg-white border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-sm font-medium">
                        {c.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{c.name}</div>
                        <div className="text-xs text-gray-500">{c.course} · Year {c.year}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary-500">{c.compatibility}%</div>
                      <div className="text-xs text-gray-400">match</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">🛏️ {c.sleepSchedule}</span>
                    <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">📚 {c.studyHabits}</span>
                    <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">💰 {c.budget}</span>
                  </div>

                  <button
                    onClick={() => sendRequest(c.name)}
                    disabled={requestSent[c.name]}
                    className={`w-full text-sm font-medium py-2.5 rounded-lg transition-colors ${
                      requestSent[c.name]
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-primary-500 hover:bg-primary-600 text-white'
                    }`}
                  >
                    {requestSent[c.name] ? '✓ Request sent' : 'Send roommate request'}
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => { setStep(0); setAnswers({}); }}
              className="w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-6"
            >
              Retake the quiz
            </button>
          </>
        )}

      </div>
    </div>
  )
}