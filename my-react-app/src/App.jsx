import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/home'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App