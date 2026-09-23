import React from 'react'
import './QuickSummary.css'

function QuickSummary() {
    return (
        <section className='quick-summary'>
            <div className='quick-summary-header'>
                <h2>Quick Summary</h2>
            </div>
            <div className='summary-item'>
                <div className='summary-item-content'>
                    <div className='summary-item-label'>
                        Avg. Daily Expense
                    </div>
                    <div className='summary-item-value'>$491.63</div>
                </div>

            </div>
            <div className='summary-item'>
                <div className='summary-item-label'>
                    Largest Expense
                </div>
                <div className='summary-item-content'>
                    <span>Rent</span>
                    <span className='summary-item-value'> $1,250.00</span>
                </div>
            </div>
            <div className='summary-item'>
                <div className='summary-item-label'>Transactions</div>
                <div className='summary-item-content'>
                    <span>This Month</span>
                    <span className='summary-item-value'>28</span>
                </div>
            </div>
        </section>
    )
}

export default QuickSummary