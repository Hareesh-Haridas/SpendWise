import React, { useState } from 'react'
import './AddTransaction.css'

function AddTransaction({ onclose, onSave }) {

    const [type, setType] = useState('expense');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');


    return (
        <div className='modal-overlay'>
            <div className='add-transaction-modal'>
                <div className='modal-header'>
                    <div>
                        <h2>Add Transaction</h2>
                        <p>Add a new income or expense</p>
                    </div>
                    <button className='close-btn' onClick={onclose}>×</button>
                </div>
                <div className='modal-body'>
                    <div className='transaction-type'>
                        <button className={`type-btn ${type === 'expense' ? 'active' : ''}`} onClick={() => setType('expense')}>Expense</button>
                        <button className={`type-btn ${type === 'income' ? 'active' : ''}`} onClick={() => setType('income')}>Income</button>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input type="text" placeholder='eg. Grocery shopping' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Amount</label>
                        <input type="number" placeholder='0.00' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option>Food & Dining</option>
                            <option>Transportation</option>
                            <option>Shopping</option>
                            <option>Bills & Utilities</option>
                            <option>Entertainment</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    {error && (
                        <p className="form-error">
                            {error}
                        </p>
                    )}
                </div>

                <div className='modal-footer'>
                    <button className='cancel-btn' onClick={onclose}>Cancel</button>
                    <button className='save-btn' onClick={() => {
                        if (!description || !amount || !category || !date) {
                            setError('Please fill in all the fiels.');
                            return;
                        }
                        const transaction = {
                            type,
                            description,
                            amount,
                            category,
                            date
                        }
                        onSave(transaction);
                        setDescription('');
                        setAmount('');
                        setCategory('');
                        setDate('');
                        setError('');
                    }}
                    >Save Transaction</button>
                </div>
            </div>
        </div >
    )
}

export default AddTransaction