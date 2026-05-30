
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SiteDetail from './pages/SiteDetail'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/di-tich/den-tho-nguyen-dinh-chieu" element={<SiteDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
