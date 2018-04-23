import React from 'react';
import './Header.css';

export default function Header(props){
    const { onSubmit, handleChange, symbol } = props;
    return(
        <div className="header">
            <h3>Enter any stock symbol to retrieve the most recent quote. (eg. NFLX, AAPL, SQ)</h3>
            <form className="input-group" onSubmit={(e) => onSubmit(e)}>
                <input 
                    placeholder="Enter stock symbol"
                    className="form-control"
                    value={symbol}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">GET QUOTE</button>
                </span>
            </form>
        </div>
    )
}