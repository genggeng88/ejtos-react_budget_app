import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    // calculate the total amount spent so far
    const totalSpent = expenses.reduce((total, item) => {
        return total + item.cost
    }, 0)
    
    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value)
        
        if (value < totalSpent) {
            alert('The budget cannot be lower than the amount spent so far: £' + totalSpent);
            setNewBudget(totalSpent);
            return;
        }
        
        if (value > 20000) {
            alert('The budget cannot exceed £20,000.');
            setNewBudget(20000);
            return;
        }

        setNewBudget(value);

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency} </span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
