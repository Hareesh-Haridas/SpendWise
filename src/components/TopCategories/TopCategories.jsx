import React from 'react'
import {
    Utensils,
    Car,
    ShoppingBag,
    Receipt,
    Gamepad2,
    Icon
} from 'lucide-react'
import './TopCategories.css'

function TopCategories() {
    const categories = [{
        name: 'Food & Dining',
        amount: 5250,
        color: 'orange',
        icon: Utensils
    },
    {
        name: 'Transportation',
        amount: 3120,
        color: 'red',
        icon: Car
    },
    {
        name: 'Shopping',
        amount: 2180,
        color: 'blue',
        icon: ShoppingBag
    },
    {
        name: 'Bills & Utilities',
        amount: 2050,
        color: 'green',
        icon: Receipt
    },
    {
        name: 'Entertainment',
        amount: 1280,
        color: 'purple',
        icon: Gamepad2
    }];
    return (
        <section className='top-categories'>
            <div className='top-categories-header'>
                <h2>Top Categories</h2>
                <button>View All</button>
            </div>
            <div className='category-list'>
                {categories.map((category) => {
                    const categoryIcon = category.icon;
                    return (
                        <div className='category-item' key={category.name} >
                            <div className='category-info'>
                                <div className={`category-icon ${category.color}`}>
                                    <categoryIcon size={15} />
                                </div>
                                <span className='category-name'>
                                    {category.name}
                                </span>
                            </div>
                            <span className='category-amount'>
                                ${category.amount.toLocaleString()}
                            </span>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default TopCategories