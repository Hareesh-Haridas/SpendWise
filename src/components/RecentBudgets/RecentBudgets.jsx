import React from 'react'
import './RecentBudgets.css'
import {
    Utensils,
    Car,
    ShoppingBag
} from 'lucide-react'

function RecentBudgets() {

    const budgets = [{
        name: 'Food & Dining',
        spent: 850,
        budget: 1200,
        percentage: 71,
        color: 'orange',
        icon: Utensils
    },
    {
        name: 'Transportation',
        spent: 400,
        budget: 600,
        percentage: 67,
        color: 'red',
        icon: Car
    },
    {
        name: 'Shopping',
        spent: 300,
        budget: 500,
        percentage: 60,
        color: 'blue',
        icon: ShoppingBag
    }];

    return (
        <section className='recent-budgets'>
            <div className='recent-budgets-header'>
                <h2>Recent Budgets</h2>
                <button>View All</button>
            </div>
            <div className='budget-list'>
                {budgets.map((budget) => (
                    <div className='budget-item' key={budget.name}>
                        <div className='budget-top'>
                            <div className='budget-name'>
                                <div className={`budget-icon ${budget.color}`}>
                                    <budget.icon size={16} />
                                </div>
                                <span>{budget.name}</span>
                            </div>
                            <span className='budget-amount'>${budget.spent}/${budget.budget}</span>
                        </div>
                        <div className='budget-progress-row'>
                            <div className='budget-progress'>
                                <div className={`budget-progress-fill ${budget.color}`}
                                    style={{ width: `${budget.percentage}%` }}>

                                </div>
                            </div>
                            <span className='budget-percentage'>{budget.percentage}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default RecentBudgets