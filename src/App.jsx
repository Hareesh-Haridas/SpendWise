import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import SummaryCards from './components/SummaryCards/SummaryCards'
import SpendingCategory from './components/SpendingCategory/SpendingCategory'
import ExpenseTrend from './components/ExpenseTrend/ExpenseTrend'
import QuickSummary from './components/QuickSummary/QuickSummary'
import RecentBudgets from './components/RecentBudgets/RecentBudgets'
import TopCategories from './components/TopCategories/TopCategories'
import RecentTransactions from './components/RecentTransactions/RecentTransactions'
import AddTransaction from './components/AddTransaction/AddTransaction'
import {
  Utensils,
  Car,
  ShoppingBag,
  Receipt,
  Gamepad2
} from 'lucide-react'
function App() {

  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    const categoryIcons = {
      'Food & Dining': Utensils,
      'Transportation': Car,
      'Shopping': ShoppingBag,
      'Bills & Utilities': Receipt,
      'Entertainment': Gamepad2
    }
    const newTransaction = {
      id: Date.now(),
      description: transaction.description,
      subtitle: transaction.category,
      category: transaction.category,
      type: transaction.type === 'income' ? 'Income' : 'Expense',
      amount: Number(transaction.amount),
      date: new Date(transaction.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      status: 'Completed',
      icon: categoryIcons[transaction.category] || null
    }
    setTransactions(prevTransactions => [
      ...prevTransactions,
      newTransaction
    ])
    setShowAddTransaction(false);
  }

  return (
    <div className='app'>
      <Sidebar />
      <main className='main-content'>
        <Header onAddTransaction={() => setShowAddTransaction(true)} />
        {showAddTransaction && (
          <AddTransaction onclose={() => setShowAddTransaction(false)}
            onSave={handleAddTransaction} />
        )}
        <div className='page-content'>
          <SummaryCards />
          <div className='dashboard-grid'>
            <SpendingCategory />
            <ExpenseTrend />
            <div className='right-column'>
              <QuickSummary />
              <RecentBudgets />
              <TopCategories />
            </div>
            <RecentTransactions transactions={transactions} />
          </div>

        </div>
      </main>
    </div>
  )
}

export default App