import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'

const Home = lazy(() => import('./components/Home'))
const Placeholder = ({ title }) => (
  <main className="min-h-screen flex items-center justify-center">
    <h2 className="text-2xl font-semibold">{title}</h2>
  </main>
)

function App() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Placeholder title="Skills" />} />
        <Route path="/projects" element={<Placeholder title="Projects" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
      </Routes>
    </Suspense>
  )
}

export default App
