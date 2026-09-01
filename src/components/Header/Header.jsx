import React from 'react'
import {
    Search,
    Plus,
    CalendarDays,
    ChevronDown,
    Bell
} from "lucide-react";
import './Header.css'
function Header() {
    return (
        <header className='header'>
            <div className='header-greeting'>
                <h1>Good morning, Hareesh! 👋</h1>
                <p> Here's what's happening with your finances today.</p>
            </div>
            <div className='header-actions'>
                <div className='header-search'>
                    <Search size={17}></Search>
                    <input type="text" placeholder='Search transactions, categories...' />
                    <span className='search-shortcut'>⌘ K</span>
                </div>
                <button className='add-transaction-btn'>
                    <Plus size={19}></Plus>
                    <span>Add Transactions</span>
                </button>
                <button className='month-selector'>
                    <CalendarDays size={18}></CalendarDays>
                    <span>May 2026</span>
                    <ChevronDown size={16}></ChevronDown>
                </button>
                <button className='notification-btn'>
                    <Bell size={21}></Bell>
                    <span className='notification-badge'>3</span>
                </button>
            </div>
        </header>
    )
}

export default Header