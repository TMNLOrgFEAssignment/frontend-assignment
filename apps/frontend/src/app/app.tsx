import './styles.css'
import { Link, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <div className="flex">
      <nav className="flex flex-col p-4 bg-gray-200 h-screen w-32">
        <ul className="space-y-4">
          <li>
            <Link className="text-blue-500 hover:underline" to="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 hover:underline" to="/alerts">
              Alerts
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-4">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="text-2xl font-semibold">Home Page</h1>
              </div>
            }
          />
          <Route
            path="/alerts"
            element={
              <div>
                <h1 className="text-2xl font-semibold">Alerts Page</h1>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
