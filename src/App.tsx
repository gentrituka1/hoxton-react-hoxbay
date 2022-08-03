import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/products"/>} />
          <Route path="/products" element={<Home />} />
          {/* <Route path="/categories" element={} />
          <Route path="/basket" element={} /> */}
        </Routes>
      </main>
    </>
  )
}

export default App
