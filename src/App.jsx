import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <main className='main-content'>
        <Header />
        <div className='page-content'></div>
      </main>
    </div>
  )
}

export default App