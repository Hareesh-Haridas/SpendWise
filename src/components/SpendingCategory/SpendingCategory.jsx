import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";
import './SpendingCategory.css'
import React from 'react'
import {
    ChevronDown
} from "lucide-react";


function SpendingCategory() {

    const categoryData = [{
        name: "Food & Dining",
        amount: 5250,
        percentage: 34.5,
        color: "#ff8a00"
    },
    {
        name: "Transportation",
        amount: 3120,
        percentage: 20.5,
        color: "#ff5353"
    },
    {
        name: "Shopping",
        amount: 2180,
        percentage: 14.3,
        color: "#3787e8"
    },
    {
        name: "Bills & Utilities",
        amount: 2050,
        percentage: 13.5,
        color: "#2bb9b2"
    },
    {
        name: "Entertainment",
        amount: 1280,
        percentage: 8.4,
        color: "#8751d9"
    },
    {
        name: "Health & Fitness",
        amount: 680,
        percentage: 4.5,
        color: "#5caf70"
    },
    {
        name: "Others",
        amount: 680,
        percentage: 4.5,
        color: "#a8b2c2"
    }];


    return (
        <section className="spending-category">
            <div className="spending-header">

                <h2>Spending by Category</h2>
                <button className="month-button">
                    <span>This Month</span>
                    <ChevronDown size={14} />
                </button>
            </div>
            <div className="spending-content">
                <div className="donut-container">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <PieChart>
                            <Pie
                                data={categoryData}
                                dataKey="amount"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={59}
                                outerRadius={101}
                                paddingAngle={1}
                                stroke="#ffffff"
                                strokeWidth={2}
                            >
                                {categoryData.map((category) => (
                                    <Cell key={category.name}
                                        fill={category.color}></Cell>
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="category-list">
                    {categoryData.map((category) => (
                        <div className="category-row" key={category.name}>
                            <div className="category-name-wrapper">
                                <span className="category-color" style={{ backgroundColor: category.color }}></span>
                                <span className="category-name">{category.name}</span>
                            </div>
                            <span className="category-amount">
                                ${category.amount.toLocaleString()}
                            </span>
                            <span className="category-percentage">
                                {category.percentage}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default SpendingCategory