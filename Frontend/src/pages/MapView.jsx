import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// UCU main campus coordinates (real)
const UCU_LOCATION = { lat: 0.357500, lng: 32.741389 }

const hostels = [
  { id: 1, name: 'Galaxy Hostel', price: 300000, distance: 5, gender: 'Mixed', registered: true, lat: 0.35610, lng: 32.74180 },
  { id: 2, name: 'Victory Hostel', price: 280000, distance: 8, gender: 'Mixed', registered: true, lat: 0.35480, lng: 32.74250 },
  { id: 3, name: 'Tupendane Hostel', price: 250000, distance: 10, gender: 'Mixed', registered: true, lat: 0.35720, lng: 32.74050 },
  { id: 4, name: 'William Hostel', price: 320000, distance: 12, gender: 'Male', registered: true, lat: 0.35350, lng: 32.74400 },
  { id: 5, name: 'Pameja Hostel', price: 220000, distance: 15, gender: 'Female', registered: true, lat: 0.35900, lng: 32.73950 },
  { id: 6, name: 'Lea Courts', price: 270000, distance: 9, gender: 'Mixed', registered: true, lat: 0.35550, lng: 32.74300 },
  { id: 7, name: 'Soso Courts', price: 240000, distance: 14, gender: 'Mixed', registered: false, lat: 0.35280, lng: 32.74050 },
  { id: 8, name: 'Jikah Hostel', price: 350000, distance: 11, gender: 'Mixed', registered: false, lat: 0.35850, lng: 32.74450 },
]

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const grayIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function MapView() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [showUnregistered, setShowUnregistered] = useState(true)

  const filtered = hostels.filter((h) => {
    if (search && !h.name.toLowerCase().includes(search.toLowerCase())) return false
    if (!showUnregistered && !h.registered) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <nav className="sticky top-0 z-[1000] bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">CN</span>
          </div>
          <span className="text-gray-900 font-semibold text-lg">CampusNest</span>
        </button>
        <button onClick={() => navigate('/hostels')} className="text-sm text-gray-500 hover:text-gray-900">
          List view →
        </button>
      </nav>

      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <div className="flex flex-wrap items-center gap-3 max-w-4xl">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white flex-1 min-w-[200px]">
            <span className="pl-3 text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search university or hostel name..."
              className="flex-1 px-2 py-2 text-sm outline-none text-gray-800 placeholder-gray-400"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={showUnregistered}
              onChange={(e) => setShowUnregistered(e.target.checked)}
              className="accent-primary-500"
            />
            Show unregistered hostels
          </label>
        </div>

        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-500"></span> CampusNest listed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span> Not registered
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> UCU campus
          </span>
        </div>
      </div>

      <div className="flex-1" style={{ minHeight: '500px' }}>
        <MapContainer
          center={[UCU_LOCATION.lat, UCU_LOCATION.lng]}
          zoom={15}
          style={{ height: '100%', width: '100%', minHeight: '500px' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[UCU_LOCATION.lat, UCU_LOCATION.lng]} icon={blueIcon}>
            <Popup>
              <strong>Uganda Christian University</strong><br />
              Main campus, Mukono
            </Popup>
          </Marker>
          <Circle
            center={[UCU_LOCATION.lat, UCU_LOCATION.lng]}
            radius={1500}
            pathOptions={{ color: '#1D9E75', fillOpacity: 0.05, weight: 1 }}
          />

          {filtered.map((h) => (
            <Marker
              key={h.id}
              position={[h.lat, h.lng]}
              icon={h.registered ? greenIcon : grayIcon}
            >
              <Popup>
                <div style={{ minWidth: '160px' }}>
                  <strong>{h.name}</strong><br />
                  {h.registered ? (
                    <>
                      UGX {h.price.toLocaleString()} / month<br />
                      🚶 {h.distance} min walk · 👤 {h.gender}<br />
                      <button
                        onClick={() => navigate(`/hostels/${h.id}`)}
                        style={{
                          marginTop: '6px',
                          background: '#1D9E75',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}
                      >
                        View details →
                      </button>
                    </>
                  ) : (
                    <span style={{ color: '#888', fontSize: '12px' }}>
                      Not yet registered on CampusNest
                    </span>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

    </div>
  )
}