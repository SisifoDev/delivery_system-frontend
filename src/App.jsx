import { Routes, Route } from 'react-router-dom';
import Home from './pages/Client/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  )
}

export default App
