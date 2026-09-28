import React from 'react'
import './RecentTransactions.css'
import {
    Search,
    SlidersHorizontal,
    ArrowDownToLine,
    CalendarDays,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Utensils,
    Car,
    ShoppingBag
} from 'lucide-react'
function RecentTransactions() {
    const transactions = [
        {
            id: 1,
            description: 'Grocery Store',
            subtitle: 'Walmart',
            category: 'Food & Dining',
            type: 'Expense',
            amount: -85.50,
            date: 'May 28, 2025',
            status: 'Completed',
            icon: Utensils
        },
        {
            id: 2,
            description: 'Salary Deposit',
            subtitle: 'Monthly Salary',
            category: 'Income',
            type: 'Income',
            amount: 3200.00,
            date: 'May 27, 2025',
            status: 'Completed',
            icon: null
        },
        {
            id: 3,
            description: 'Gas Station',
            subtitle: 'Shell',
            category: 'Transportation',
            type: 'Expense',
            amount: -45.20,
            date: 'May 26, 2025',
            status: 'Completed',
            icon: Car
        },
        {
            id: 4,
            description: 'Online Shopping',
            subtitle: 'Amazon',
            category: 'Shopping',
            type: 'Expense',
            amount: -129.99,
            date: 'May 25, 2025',
            status: 'Completed',
            icon: ShoppingBag
        },
        {
            id: 5,
            description: 'Restaurant Bill',
            subtitle: "McDonald's",
            category: 'Food & Dining',
            type: 'Expense',
            amount: -25.80,
            date: 'May 24, 2025',
            status: 'Completed',
            icon: Utensils
        }
    ]
    return (
        <section className='recent-transactions'>
            <div className='transactions-header'>
                <h2>Recent Transactions</h2>
                <div className='transaction-controls'>
                    <select name="" id="" className='transaction-filter'>
                        <option value="">All Transactions</option>
                        <option value="">Expenses</option>
                        <option value="">Income</option>
                    </select>
                    <div className='transaction-search'>
                        <Search size={16} />
                        <input type="text" placeholder='Search transactions...' />
                    </div>
                    <button className='icon-button'>
                        <SlidersHorizontal size={17} />
                    </button>
                    <button className='icon-button'>
                        <ArrowDownToLine size={17} />
                    </button>
                    <button className='icon-button'>
                        <CalendarDays size={17} />
                    </button>
                </div>
            </div>
            <div className='transactions-table-wrapper'>
                <table className='transactions-table'>
                    <thead>
                        <tr>
                            <th>DESCRIPTION</th>
                            <th>CATEGORY</th>
                            <th>TYPE</th>
                            <th>AMOUNT</th>
                            <th>DATE</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => {
                            const CategoryIcon = transaction.icon;
                            return (
                                <tr key={transaction.id}>
                                    <td>
                                        <div className='description-cell'>
                                            <span className='description'>
                                                {transaction.description}
                                            </span>
                                            <span className='description-subtitle'>
                                                {transaction.subtitle}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='category-cell'>
                                            {CategoryIcon && (
                                                <div className={`transaction-category-icon ${transaction.category.toLowerCase().replaceAll(' ', '-')}`}>
                                                    <CategoryIcon size={15} />
                                                </div>
                                            )}
                                            <span>
                                                {transaction.category}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={`transaction-type ${transaction.type === 'Income' ? 'income' : 'expense'
                                            }`}>
                                            <span>
                                                {transaction.type === 'Income' ? '↑' : '↓'}
                                            </span>
                                            {transaction.type}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`transaction-amount ${transaction.type === 'Income' ? 'income' : 'expense'
                                            }`}>
                                            {transaction.type === 'Income' ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='transaction-date'>
                                            {transaction.date}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='status completed'>
                                            <span className='status-dot'>✓</span>
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className='transaction-actions'>
                                            <button className='action-button edit'>
                                                <Pencil size={15} />
                                            </button>
                                            <button className='action-button delete'>
                                                <Trash2 size={15} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='transactions-footer'>
                <span className='transaction-count'>Showing 1 to 5 of 28 transactions</span>
                <div className='pagination'>
                    <button className='page-button'>
                        <ChevronLeft size={16} />
                    </button>
                    <button className='page-button active'>1</button>
                    <button className='page-button'>2</button>
                    <button className='page-button'>3</button>
                    <button className='page-button'>4</button>
                    <button className='page-button'>5</button>
                    <button className='page-button'>
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section >
    )
}

export default RecentTransactions