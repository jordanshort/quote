import React from 'react';
import './Quote.css';
import Details from '../details/Details';

export default function Quote(props){
    const { symbol, companyName, latestPrice, latestTime, change, changePercent } = props.stockData.quote,
        logo = props.stockData.logo.url,
        percent = changePercent*100;
    return(
        <div className="quote">

            {/* colors are determined by direction of stock price, green for up and red for down */}
            <div className="quote-box" style={{backgroundColor: Math.sign(change) === -1 ? 'red' : 'green'}}>
                <div className="logo" style={{backgroundColor: '#fff'}}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="symbol" style={{backgroundColor: Math.sign(change) === -1 ? 'lightcoral' : 'lightgreen'}}>
                    <h1>{symbol}</h1>
                </div>
                <div className="company" style={{backgroundColor: Math.sign(change) === -1 ? 'lightcoral' : 'lightgreen'}}>
                    <p>{companyName}</p>
                </div>
                <div className="price" style={{backgroundColor: Math.sign(change) === -1 ? 'lightcoral' : 'lightgreen'}}>
                    <p>Last Price:</p> 
                    <h1 style={{color: Math.sign(change) === -1 ? 'red' : 'green'}}>${latestPrice}</h1> 
                </div>
                <div className="time" style={{backgroundColor: Math.sign(change) === -1 ? 'lightcoral' : 'lightgreen'}}>
                    <p>Latest Time:</p> 
                    <p>{latestTime}</p>
                </div>
                <div className="change" style={{backgroundColor: Math.sign(change) === -1 ? 'lightcoral' : 'lightgreen'}}>
                    <p>Change:</p> 
                    <h3 style={{color: Math.sign(change) === -1 ? 'red' : 'green'}}>{change} ({Math.round(percent*100)/100}%)</h3>
                </div>
            </div>

            {/* Details contains company data table */}
            <Details stockData={props.stockData.quote} />
        </div>
    )
}