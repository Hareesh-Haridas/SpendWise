import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
}

    from "recharts";
import './ExpenseTrend.css'

import React from 'react'

function ExpenseTrend() {

    const trendData = [{
        month: "Dec",
        expenses: 1300,
        income: 2100,
        savings: 600
    },
    {
        month: "Jan",
        expenses: 3000,
        income: 2100,
        savings: 600
    },
    {
        month: "Feb",
        expenses: 1800,
        income: 3400,
        savings: 950
    },
    {
        month: "Mar",
        expenses: 1000,
        income: 3000,
        savings: 450
    },
    {
        month: "Apr",
        expenses: 1600,
        income: 3600,
        savings: 800
    },
    {
        month: "May",
        expenses: 2900,
        income: 4100,
        savings: 1000
    }];
    return (
        <section className="expense-trend">
            <div className="expense-trend-header">
                <h2>Expense Trend</h2>
                <div className="trend-periods">
                    <button className="active">6M</button>
                    <button>YTD</button>
                    <button>1Y</button>
                </div>
            </div>
            <div className="trend-legend">
                <div className="legend-item">
                    <span className="legend-dot expense-dot"></span>
                    <span>Expenses</span>
                </div>
                <div className="legend-item">
                    <span className="legend-dot income-dot"></span>
                    <span>Income</span>
                </div>
                <div className="legend-item">
                    <span className="legend-dot savings-dot"></span>
                    <span>Savings</span>
                </div>
            </div>
            <div className="trend-chart">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <LineChart
                        data={trendData}
                        margin={{
                            top: 10,
                            right: 5,
                            left: 0,
                            bottom: 0
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />


                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fontSize: 11
                            }}
                        />


                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            width={35}
                            tick={{
                                fontSize: 11
                            }}
                            tickFormatter={(value) =>
                                `$${value / 1000}k`
                            }
                        />


                        <Tooltip
                            formatter={(value) =>
                                `$${value.toLocaleString()}`
                            }
                        />


                        <Line
                            type="monotone"
                            dataKey="expenses"
                            stroke="#ff4d4d"
                            strokeWidth={2}
                            dot={{
                                r: 4
                            }}
                            activeDot={{
                                r: 5
                            }}
                        />


                        <Line
                            type="monotone"
                            dataKey="income"
                            stroke="#20a464"
                            strokeWidth={2}
                            dot={{
                                r: 4
                            }}
                            activeDot={{
                                r: 5
                            }}
                        />


                        <Line
                            type="monotone"
                            dataKey="savings"
                            stroke="#3182e6"
                            strokeWidth={2}
                            dot={{
                                r: 4
                            }}
                            activeDot={{
                                r: 5
                            }}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>
        </section>
    )
}

export default ExpenseTrend