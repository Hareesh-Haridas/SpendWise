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
  const [editingTransaction, setEditingTransaction] = useState(null);
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

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setShowAddTransaction(true);
  }
  const handleUpdateTransaction = (updatedTransaction) => {
    setTransactions(prevTransactions =>
      prevTransactions.map(transaction =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    )
    setEditingTransaction(null);
    setShowAddTransaction(false);
  }


  const handleDeleteTransaction = (id) => {
    setTransactions(prevTransactions =>
      prevTransactions.filter(transaction => transaction.id !== id)
    )
  }

  return (
    <div className='app'>
      <Sidebar />
      <main className='main-content'>
        <Header onAddTransaction={() => {
          setEditingTransaction(null)
          setShowAddTransaction(true)
        }} />
        {showAddTransaction && (
          <AddTransaction onclose={() => setShowAddTransaction(false)}
            onSave={editingTransaction ? handleUpdateTransaction : handleAddTransaction}
            editingTransaction={editingTransaction} />
        )}
        <div className='page-content'>
          <SummaryCards transactions={transactions} />
          <div className='dashboard-grid'>
            <SpendingCategory />
            <ExpenseTrend />
            <div className='right-column'>
              <QuickSummary />
              <RecentBudgets />
              <TopCategories />
            </div>
            <RecentTransactions transactions={transactions} onDeleteTransaction={handleDeleteTransaction} onEditTransaction={handleEditTransaction} />
          </div>

        </div>
      </main>
    </div>
  )
}

export default App