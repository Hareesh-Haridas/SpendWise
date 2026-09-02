import React from 'react'
import {
    ArrowDown,
    ArrowUp,
    Wallet,
    PieChart,
    TrendingUp
} from "lucide-react";
import './SummaryCards.css'

function SummaryCards() {
    return (
        <section className='summary-cards'>
            <div className='summary-card'>
                <div className='summary-card-top'>
                    <div className='summary-icon expense-icon'>
                        <ArrowDown size={22} />
                    </div>
                    <div className='summary-details'>
                        <p>Total Expenses</p>
                        <h2>$15,240.50</h2>
                    </div>
                </div>
                <div className='summary-bottom expense-change'>
                    <ArrowDown size={15} />
                    <span>8.2%</span>
                    <p>from last month</p>
                </div>
            </div>
            <div className='summary-card'>
                <div className='summary-card-top'>
                    <div className='summary-icon income-icon'>
                        <TrendingUp size={22} />
                    </div>
                    <div className='summary-details'>
                        <p>Total Income</p>
                        <h2>$17,000.00</h2>
                    </div>
                </div>
                <div className='summary-bottom income-change'>
                    <ArrowUp size={15} />
                    <span>12.1%</span>
                    <p>from last month</p>
                </div>
            </div>
            <div className='summary-card'>
                <div className='summary-card-top'>
                    <div className='summary-icon balance-icon'>
                        <Wallet size={22} />
                    </div>
                    <div className='summary-details'>
                        <p>Current Balance</p>
                        <h2>$1,759.50</h2>
                    </div>
                </div>
                <div className='summary-progress'>
                    <p><span className='summary-progress-data'>68%</span> of budget remaining</p>
                    <div className='progress-bar'>
                        <div className='progress-fill balance-progress'></div>
                    </div>
                </div>
            </div>
            <div className='summary-card'>
                <div className='summary-card-top'>
                    <div className='summary-icon budget-icon'>
                        <PieChart size={22} />
                    </div>
                    <div className='summary-details'>
                        <p>Monthly Budget</p>
                        <h2>$5,000.00</h2>
                    </div>
                </div>
                <div className='summary-progress'>
                    <p><span className='summary-progress-data'>$3,240.50</span> spent (65%)</p>
                    <div className='progress-bar'>
                        <div className='progress-fill budget-progress'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SummaryCards