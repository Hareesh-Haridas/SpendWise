import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import SummaryCards from './components/SummaryCards/SummaryCards'
import SpendingCategory from './components/SpendingCategory/SpendingCategory'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <main className='main-content'>
        <Header />
        <div className='page-content'>
          <SummaryCards />
          <div className='dashboard-grid'>
            <SpendingCategory />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App