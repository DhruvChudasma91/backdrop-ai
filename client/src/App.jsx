import React from 'react'
import Navbar from './components/Menubar'
import Menubar from './components/Menubar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Menubar />
      
      {/* This margin-top (mt-24) ensures the content isn't hidden under the fixed Navbar */}
      <main className="mt-24">
        {/* We will build the Hero section here next! */}
        <div className="text-center py-20">
          <h1 className="text-4xl font-outfit font-bold">Ready to remove some backgrounds?</h1>
        </div>
      </main>
    </div>
  )
}

export default App