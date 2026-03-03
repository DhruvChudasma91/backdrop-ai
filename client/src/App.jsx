import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Menubar from './components/Menubar'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Menubar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App