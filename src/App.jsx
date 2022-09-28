import { Routes, Route } from 'react-router-dom'

// Page
import { Home } from './pages/Home/Home'

export function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  )
}
