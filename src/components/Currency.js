import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const currencyNames = {
    "$": "Dollar",
    "£": "Pound",
    "€": "Euro",
    "₹": "Rupee"
};

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="currency-selector" style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
            <button
                onClick={toggleDropdown}
                style={{
                    backgroundColor: '#8cba51',
                    color: '#fff',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '15px 20px',
                    cursor: 'pointer',
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                }}
            >
                Currency ({currency} {currencyNames[currency]})
                <span style={{ marginLeft: '10px' }}>▼</span>
            </button>
            {isDropdownOpen && (
                <select
                    id="currency"
                    name="currency"
                    onChange={event => changeCurrency(event.target.value)}
                    value={currency}
                    className="form-select"
                    style={{
                        backgroundColor: '#8cba51',
                        color: '#fff',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        zIndex: 1,
                    }}
                    size="4"
                >
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            )}
        </div>
    );
};

export default Currency;
