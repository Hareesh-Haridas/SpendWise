import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <aside className='sidebar'>
            <div className='logo'>
                <div className='logo-icon'>$</div>
                <h2>SpendWise</h2>
            </div>
            <nav className='sidebar-menu'>
                <div className='menu-item active'>
                    <span>$</span>
                    <span>Dashboard</span>
                </div>
                <div className='menu-item'>
                    <span>$</span>
                    <span>Transactions</span>
                </div>
                <div className='menu-item'>
                    <span>$</span>
                    <span>Add Transaction</span>
                </div>
                <div className='menu-item'>
                    <span>$</span>
                    <span>Analytics</span>
                </div>
                <div className='menu-item'>
                    <span>$</span>
                    <span>Budgets</span>
                </div>
                <div className='menu-item'>
                    <span>$</span>
                    <span>Categories</span>
                </div>
                <div className='menu-item'>
                    <span>$</span>
                    <span>Reports</span>
                </div>
                <div className='menu-item'>
                    <span>$</span>
                    <span>Settings</span>
                </div>
                <div className='menu-item'>
                    <span>$</span>
                    <span>Help & Support</span>
                </div>
            </nav>
            <div className='sidebar-bottom'>
                <div className='menu-item notification'>
                    <span>$</span>
                    <span>Notifications</span>
                    <span className='notification-badge'>3</span>
                </div>
                <div className='profile'>
                    <div className='profile-avatar'>H</div>
                    <div className='profile-info'>
                        <strong>Hareesh Haridas</strong>
                        <small>Free Plan</small>
                    </div>
                    <span>v</span>
                </div>
                <div className='theme-switcher'>
                    <button className='theme-active'> ☀ Light</button>
                    <button> ☾ Dark</button>
                </div>
            </div>
        </aside >
    )
}

export default Sidebar